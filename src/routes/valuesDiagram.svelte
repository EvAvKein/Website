<section class:interacted>
	<svg
		viewBox={`0 0 ${boxX} ${boxY}`}
		bind:this={svg}
		on:mousedown={handler.grabStart}
		on:touchstart={handler.grabStart}
		on:mousemove={handler.grabMove}
		on:touchmove={handler.grabMove}
		on:mouseup={handler.grabEnd}
		on:touchend={handler.grabEnd}
		on:touchcancel={handler.grabEnd}
		on:mouseleave={() => {
			handler.grabEnd();
			setPointerCoords(0, 0);
		}}
	>
		<g
			style={`
      transform-origin: center 50%;
      rotate: ${rotationDeg > 0 ? 0 - rotationDeg : Math.abs(rotationDeg)}deg;
    `}
		>
			{#if line}
				<line x1={line[0].x} y1={line[0].y} x2={line[1].x} y2={line[1].y} />
			{/if}
			{#each values as [name], index}
				<foreignObject
					class="valueWrapper"
					x={valuesMap[name].coords.x - valueDotDiameter / 2}
					y={valuesMap[name].coords.y - valueDotDiameter / 2}
				>
					<div
						class={"valueLabel"}
						style={`rotate: ${rotationDeg}deg`}
						class:active={currentValues.length === 0 || currentValues.includes(name)}
					>
						{name}
					</div>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex - it's interactable, actually -->
					<div
						bind:this={dragCircles[index]}
						class="dragCircle"
						id={name}
						tabindex="0"
						class:selected={currentValues.includes(name)}
						on:click={() => selectValues([name])}
						on:keypress={() => selectValues([name])}
						on:focusout={() => {
							const prevValues = [...currentValues];
							setTimeout(() => {
								if (dragOriginValue === prevValues[0]) {
									dragOriginValue = false;
								}
								if (prevValues.every((prevValue, i) => prevValue === currentValues[i])) {
									selectValues([]);
								}
							}, 250);
						}}
					/>
				</foreignObject>
			{/each}
		</g>
	</svg>
	<dialog id="valueDesc" open={Boolean(currentValues[0])} aria-live="polite" transition:fly={{y: 25, duration: 200}}>
		{#if currentValuePairText}
			{#key currentValuePairText}
				<SwappableContentWrapper>
					<div>
						<h4>{currentValuePairText.title}</h4>
						<p>{currentValuePairText.description}</p>
					</div>
				</SwappableContentWrapper>
			{/key}
		{:else if currentValues[0]}
			{#key currentValues[0]}
				<SwappableContentWrapper>
					<div>
						<p>{valuesMap[currentValues[0]].text}</p>
					</div>
				</SwappableContentWrapper>
			{/key}
		{/if}
	</dialog>
</section>
<div id="pointer" bind:this={pointer} style="left: 0px; top: 0px" />

<script lang="ts">
	import {onMount} from "svelte";
	import {fly} from "svelte/transition";
	import {type valueName, values, valueConnections} from "./values";
	import SwappableContentWrapper from "../lib/swappableContentWrapper.svelte";

	const boxX = 750;
	const boxY = 650;
	const valuesDiameter = 525;
	const valuesRadius = valuesDiameter / 2;
	const boxPaddingX = (boxX - valuesDiameter) / 2;
	const boxPaddingY = (boxY - valuesDiameter) / 2;
	const valueDotDiameter = 35;

	const rotationDegsPerStep = 360 / values.length;
	const rotationAdjust = 90;
	let rotationDeg = rotationAdjust;

	const valueSequence = values.map((arrOfValueArrs) => arrOfValueArrs[0]);

	let currentValues: valueName[] = [];
	$: currentValuePairText = !currentValues[1]
		? null
		: valueConnections.find(
				(connection) => connection.values.includes(currentValues[0]) && connection.values.includes(currentValues[1])
		  )!.text;

	function calcValueCoordinates(valuesCount: number, subjectValueIndex: number) {
		const angleIncrement = (2 * Math.PI) / valuesCount;
		const angleToValue = subjectValueIndex * angleIncrement;
		const x = valuesRadius * Math.cos(angleToValue) + valuesRadius + boxPaddingX;
		const y = valuesRadius * Math.sin(angleToValue) + valuesRadius + boxPaddingY;

		return {x, y};
	}

	const valuesMap = Object.fromEntries(
		Object.entries(values).map(([indexString, [value, text]]) => {
			const index = Number.parseInt(indexString);
			return [value, {text, coords: calcValueCoordinates(values.length, index)}];
		})
	) as Record<valueName, {text: string; coords: {x: number; y: number}}>; // overriding the type because Object.fromEntries assigns keys' type as string instead of the argument's keys. seems like 'the' fix for this was rejected from TS for being "too complex", see: https://github.com/microsoft/TypeScript/issues/35745

	let interacted: boolean = false;

	function selectValues(selectedValues: valueName[]) {
		currentValues = selectedValues;
		interacted = true;
		setLineByValues(selectedValues);
		setRotateByDiff(selectedValues);
	}

	type lineCoordinates = [{x: number; y: number}, {x: number; y: number}];
	let line: lineCoordinates | false = false;
	function setLineByValues(connection: valueName[]) {
		connection.length === 2
			? (line = connection.map((value) => valuesMap[value].coords) as lineCoordinates)
			: (line = false);
	}

	let svg: SVGSVGElement;

	let pointer: HTMLDivElement;
	let pointerPxSize: {height: number; width: number};
	onMount(() => (pointerPxSize = {height: pointer.clientHeight, width: pointer.clientWidth}));
	function updatePointerCoords(e: MouseEvent | TouchEvent) {
		const {pageX, pageY} = e instanceof MouseEvent ? e : e.touches[0];
		setPointerCoords(pageX, pageY);
	}
	function setPointerCoords(x: number, y: number) {
		pointer.style.left = `${x - pointerPxSize.width / 2}px`;
		pointer.style.top = `${y - pointerPxSize.height / 2}px`;
	}

	const dragCircles: HTMLDivElement[] = [];
	function pointerValueOverlap() {
		const pointerRect = pointer.getBoundingClientRect();

		const dragCircleCoords = dragCircles.map((dragCircle) => {
			const rect = dragCircle.getBoundingClientRect();
			return {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2,
			};
		});

		for (const coords of dragCircleCoords) {
			if (
				pointerRect.left < coords.x &&
				pointerRect.right > coords.x &&
				pointerRect.top < coords.y &&
				pointerRect.bottom > coords.y
			) {
				return dragCircles[dragCircleCoords.indexOf(coords)].id as valueName;
			}
		}

		return false;
	}

	const handler = {
		grabMove: (e: MouseEvent | TouchEvent) => {
			updatePointerCoords(e);
			if (dragOriginValue && currentValues.length < 2) {
				const intersectingValue = pointerValueOverlap();
				setLineByValues(intersectingValue ? [dragOriginValue, intersectingValue] : []);
			}
		},
		grabStart: (e: MouseEvent | TouchEvent) => {
			updatePointerCoords(e);
			const grabbedValue = pointerValueOverlap();
			if (grabbedValue) dragOriginValue = grabbedValue;
		},
		grabEnd: () => {
			const grabbedValue = pointerValueOverlap();
			if (dragOriginValue === grabbedValue) return; // handled by click event
			dragOriginValue && grabbedValue ? selectValues([dragOriginValue, grabbedValue]) : (dragOriginValue = false);
		},
	};

	let dragOriginValue: valueName | false = false;

	function setRotateByDiff(selectedValues: valueName[]) {
		const [firstValue, secondValue] = selectedValues;

		let valueDeg = calcAbsoluteRotationToValue(firstValue);

		if (secondValue) {
			const value2ndDeg = calcAbsoluteRotationToValue(secondValue);

			let middleDegBetweenValues =
				Math.min(valueDeg, value2ndDeg) === 0 && Math.max(valueDeg, value2ndDeg) > 180
					? (valueDeg + value2ndDeg + 360) / 2
					: (valueDeg + value2ndDeg) / 2;
			const value1Index = valueSequence.indexOf(firstValue);
			const value2Index = valueSequence.indexOf(secondValue);
			if (Math.min(value1Index, value2Index) === 1 && Math.max(value1Index, value2Index) === 4) {
				// because, with the current pentagon shape, dot connections 1-4 and 2-3 both produce a 180
				middleDegBetweenValues -= 180;
			}

			valueDeg = middleDegBetweenValues;
		}

		rotationDeg += calcShortestRotationToTarget(rotationDeg, valueDeg) + rotationAdjust;
	}

	function calcAbsoluteRotationToValue(selectedValues: valueName) {
		let newValueIndex = valueSequence.indexOf(selectedValues);
		if (newValueIndex === -1) newValueIndex = 0;
		return newValueIndex * rotationDegsPerStep;
	}

	function calcShortestRotationToTarget(currentDeg: number, targetDeg: number) {
		let shortestRotationToTarget = targetDeg - (currentDeg % 360);
		if (shortestRotationToTarget > 180) shortestRotationToTarget -= 360;
		if (shortestRotationToTarget <= -180) shortestRotationToTarget += 360;
		return shortestRotationToTarget;
	}
</script>

<style>
	section {
		position: relative;
	}

	svg {
		user-select: none;
	}

	g,
	.valueLabel {
		transition: all 350ms;
	}

	#pointer {
		position: absolute;
		pointer-events: none;
		width: 1.5rem;
		height: 1.5rem;
	}

	line {
		stroke: var(--textSubColor);
		stroke-width: 1rem;
		stroke-linecap: round;
		transition: stroke 350ms;
	}
	line:focus {
		stroke: #666;
	}

	.valueWrapper {
		position: relative;
		text-align: center;
		height: 2.25rem;
		width: 2.25rem;
		overflow: visible;
	}

	.valueLabel {
		position: absolute;
		user-select: none;
		left: 1.5rem;
		font-size: 1.9rem; /* particular value only needed with monospace font, to prevent end of "introspection" label from being clipped. (could've instead allowed overflow from <svg>, but that looked bad)*/
		opacity: 0.075;
		transform-origin: left;
		transform: translateX(-50%) translateY(-2.5rem);
	}
	.valueLabel.active {
		opacity: 1;
	}

	.dragCircle {
		cursor: grab;
		display: block;
		margin: auto;
		height: inherit;
		width: inherit;
		border-radius: 50%;
		background-color: transparent;
		border: 0.25rem dashed var(--textColor);
		transition: background-color 350ms;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	section:not(.interacted) .dragCircle {
		animation: 10s linear infinite normal spin;
	}

	.valueLabel:hover + .dragCircle,
	.dragCircle:hover,
	.dragCircle:focus {
		border-width: 0.3rem;
	}

	.dragCircle:active {
		background-color: var(--textSubColor);
	}
	.dragCircle.selected {
		background-color: var(--textColor);
	}

	#valueDesc {
		position: absolute;
		left: 0;
		bottom: 2%;
		max-height: 54%;
		overflow-x: hidden;
		color: var(--textColor);
		background-color: var(--backgroundSubColor);
		border: 0.1rem solid var(--textColor);
		padding: 0;
		border-radius: 0.1rem;
		box-shadow: 0 0 0.5rem 0.15rem black;
		transition: all 7500ms;
	}
	#valueDesc div {
		display: block;
		padding: 0.5rem;
		height: 100%;
	}

	h4 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 0.25rem;
	}
	h4 + p {
		font-size: 0.9rem;
	}
</style>
