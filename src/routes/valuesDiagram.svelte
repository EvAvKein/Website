<section>
	<svg viewBox={`0 0 ${boxX} ${boxY}`}>
		<g
			style={`
      transform-origin: center 50%;
      rotate: ${rotationDeg > 0 ? 0 - rotationDeg : Math.abs(rotationDeg)}deg;
    `}
		>
			{#each valueConnections as connection}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex - explicit tabindex is not necessary is chrome, but is necessary in firefox (as of v114)-->
				<line
					tabindex="0"
					aria-label={`Synthesis of ${connection.values[0]} and ${connection.values[1]}`}
					x1={valuesMap[connection.values[0]].coords.x}
					y1={valuesMap[connection.values[0]].coords.y}
					x2={valuesMap[connection.values[1]].coords.x}
					y2={valuesMap[connection.values[1]].coords.y}
					stroke-width="15"
					stroke="black"
					on:click={() => selectValues([connection.values[0], connection.values[1]])}
					on:keypress={() => selectValues([connection.values[0], connection.values[1]])}
					on:focusout={() => {
						setTimeout(() => {
							if (
								currentValues.length === 2 &&
								currentValues[0] === connection.values[0] &&
								currentValues[1] === connection.values[1]
							) {
								selectValues([]);
							}
						}, 300);
					}}
				/>
			{/each}
			{#each values as [name]}
				<foreignObject class="valueWrapper" x={valuesMap[name].coords.x - 17} y={valuesMap[name].coords.y - 17}>
					<label
						for={name}
						style={`rotate: ${rotationDeg}deg`}
						class={currentValues.length === 0 || currentValues.includes(name) ? "active" : ""}>{name}</label
					>
					<button
						id={name}
						on:click={() => selectValues([name])}
						on:focusout={() => {
							setTimeout(() => {
								if (currentValues.length === 1 && currentValues[0] === name) {
									selectValues([]);
								}
							}, 300);
						}}
					/>
				</foreignObject>
			{/each}
		</g>
	</svg>
	{#if currentValues[0]}
		<div id="valueDesc" transition:fly={{y: 25, duration: 200}} aria-live="polite">
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
		</div>
	{/if}
</section>

<script lang="ts">
	import {fly} from "svelte/transition";
	import SwappableContentWrapper from "../lib/swappableContentWrapper.svelte";
	import {type valueName, values, valueConnections} from "./values";

	const boxX = 750;
	const boxY = 650;
	const valuesDiameter = 525;
	const valuesRadius = valuesDiameter / 2;
	const boxPaddingX = (boxX - valuesDiameter) / 2;
	const boxPaddingY = (boxY - valuesDiameter) / 2;

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

	function selectValues(selectedValues: valueName[]) {
		currentValues = selectedValues;
		setRotateByDiff(selectedValues);
	}

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

	g,
	label {
		transition: all 350ms;
	}

	line {
		cursor: pointer;
		transition: stroke 350ms;
	}
	line:focus {
		stroke: #666;
	}

	.valueWrapper {
		position: relative;
		text-align: center;
		font-size: 2rem;
		height: 1em;
		width: 1em;
		overflow: visible;
	}

	label {
		position: absolute;
		cursor: pointer;
		opacity: 0.075;
		transform-origin: left;
		transform: translateX(-50%) translateY(-1.25em);
	}
	label.active {
		opacity: 1;
	}

	button {
		display: block;
		margin: auto;
		height: inherit;
		width: inherit;
		border-radius: 50%;
		background-color: var(--backgroundSubColor);
		box-shadow: 0 0 0.25em 0.1em black;
		transition: box-shadow 350ms;
	}

	label:hover + button,
	button:focus {
		box-shadow: 0 0 0.25em 0.1em #888;
	}

	#valueDesc {
		position: absolute;
		left: 0;
		bottom: 2%;
		max-height: 54%;
		overflow-x: hidden;
		background-color: var(--backgroundSubColor);
		border-radius: 0.25em;
		box-shadow: 0 0 0.5em 0.15em black;
		transition: all 7500ms;
	}
	#valueDesc div {
		display: block;
		padding: 0.5em;
		height: 100%;
	}

	h4 {
		font-size: 1.5em;
		text-align: center;
		margin-bottom: 0.25em;
	}
	h4 + p {
		font-size: 0.9em;
	}
</style>
