<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div id="rootLayout">
	<header>
		<img
			id="eakLogo"
			src="/eak.svg"
			alt="The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween"
		/>

		<a id="navSkipper" href="#main">Skip to content</a>

		<div id="pageTitleWrapper" aria-live="polite">
			{#key currentPath}
				<h1
					id="pageTitle"
					out:fly={{y: titleFly.y, duration: titleFly.duration}}
					in:fly={{y: titleFly.y, duration: titleFly.duration, delay: titleFly.duration}}
				>
					{routes[currentPath].name}
				</h1>
			{/key}
		</div>

		<button
			id="navButton"
			aria-label="Open (extra) navigation"
			class={"core_contentButton" + (sidebarToggled ? " buttonOfOpenNav" : "")}
			on:click={() => (sidebarToggled = !sidebarToggled)}
		>
			<NavSvg activated={sidebarToggled} />
		</button>
		<div id="buttonElemAlternativeForPositioningTitle" />
	</header>

	<nav class:sidebarToggled inert={!sidebarInteractable || null}>
		<div>
			<NavItem route={"/"} current={currentPath === "/"} />
			<NavItem route={"/portfolio"} current={currentPath === "/portfolio"} />
			<NavItem route={"/contact"} current={currentPath === "/contact"} />
		</div>
		<hr />
		<div>
			<NavItem route={"/toolbox"} current={currentPath === "/toolbox"} />
		</div>
	</nav>

	<main id="main">
		<slot />
	</main>
</div>

<script lang="ts">
	import {page} from "$app/stores";
	import {routes, type routeK} from "./routes";
	import NavSvg from "./_layout/navSvg.svelte";
	import NavItem from "./_layout/navItem.svelte";
	import {fly} from "svelte/transition";

	let windowWidth: number;
	let windowHeight: number;

	const titleFly = {
		y: -25,
		duration: 400,
	};

	let sidebarToggled = false;
	$: landscapeMode = windowWidth > windowHeight;
	$: sidebarInteractable = sidebarToggled || landscapeMode;

	$: pathDetected = $page.url.pathname.match(/(?<!\/)\/[^/]+/);
	$: currentPath = pathDetected ? (pathDetected[0] as routeK) : ("/" as routeK);
</script>

<style>
	#rootLayout {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-areas:
			"header"
			"nav"
			"main";
		grid-template-rows: auto auto 1fr;
	}

	header {
		grid-area: header;
		height: 3.75rem;
		padding-inline: 0.5rem;
		background-color: var(--backgroundSubColor);
		z-index: 1000;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 0 0.25rem 0.1rem black;
	}

	#navSkipper {
		background-color: var(--textColor);
		color: var(--backgroundColor);
		padding: 0.25rem 0.5rem;
		text-decoration: none;
		border: 0.25rem dashed var(--accentColor);
		position: absolute;
		top: -3rem;
		transition: top 250ms ease-in-out;
	}
	#navSkipper:focus {
		top: 0;
	}

	#pageTitleWrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		justify-items: center;
	}

	#pageTitle {
		font-size: 2.25rem;
	}

	#navButton {
		height: 3.5rem;
		padding: 0.5rem;
		transition: margin-right 250ms, background-color 350ms;
	}

	#eakLogo {
		height: 2.5rem;
		width: auto;
		vertical-align: bottom; /* removes unduely-added space (see https://stackoverflow.com/a/27999850) */
	}

	nav {
		grid-area: nav;
		direction: rtl; /* for the scrollbar */
		background-color: var(--backgroundSubColor);
		position: fixed;
		top: 0;
		right: 0;
		overflow-y: auto;
		max-height: calc(100% - 5rem);
		transform: translateX(125%);
		transition: transform 250ms;
		box-shadow: -0.1rem 0.1rem 0.5rem 0.1rem black;
		width: 6.5rem;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0.5rem 0 0.5rem;
		margin-top: 3.75rem;
		z-index: 900;
	}
	nav hr {
		border: 0.1rem solid color-mix(in srgb, var(--textSubColor), transparent 75%);
		margin: 0.5rem;
	}
	nav.sidebarToggled {
		transform: translateX(0);
	}

	#navButton.buttonOfOpenNav {
		margin-right: 0.9rem;
	}

	main {
		grid-area: main;
		background-color: var(--backgroundColor);
		overflow: auto;
		scroll-behavior: smooth;
	}

	#buttonElemAlternativeForPositioningTitle {
		display: none;
	}

	@media (orientation: landscape) and (min-width: 70rem) {
		#rootLayout {
			grid-template-areas:
				"header header"
				"nav main";
			grid-template-rows: auto 1fr;
			grid-template-columns: auto 1fr;
		}

		#eakLogo {
			margin-left: 0.75rem;
		}

		#navButton {
			display: none;
		}
		#buttonElemAlternativeForPositioningTitle {
			display: unset;
		}

		nav {
			position: relative;
			transform: unset;
			max-height: unset;
			transition: none;
			direction: initial;
			margin-top: 0;
			justify-content: space-between;
		}

		hr {
			display: none;
		}
	}
</style>
