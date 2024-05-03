<a href={route} class:current inert={current}>
	<img src={routes[route].imgSrc} alt={routes[route].imgAlt} />
	<span>{routes[route].name}</span>
</a>

<script lang="ts">
	import {type routeK, routes} from "../routes";

	export let route: routeK;
	export let current: boolean;

	// doesn't really make sense to make "current" a parameter when the route is already provided, but this is better than declaring the current-checking reactive variable(s) in this component (as that'd redundantly recompute the current path for every instance of the component)
	// i have a solution in mind that'd solve the parameterization without redundant recomputes, but that (seemingly) depends on the framework switch i have in mind (from svelte to solid)
</script>

<style>
	a {
		display: block;
		height: 5rem;
		color: var(--textSubColor);
		text-decoration: none;
		text-align: center;
		overflow: hidden;
		padding-block: 0.75rem;
		padding-inline-end: 0.2rem;
		border-inline-start: 0.2rem solid transparent;
		transition: border-color 200ms;
	}

	img {
		display: block;
		height: 100%;
		width: auto;
		margin: auto;
		filter: var(--filterToTextSubColor);
		transition: all 200ms ease-in-out;
	}

	a span {
		font-weight: bold;

		user-select: none;
		opacity: 0;
		transition: opacity 200ms ease-out;
	}

	a.current,
	a:hover,
	a:focus {
		color: var(--textColor);
	}

	a.current img,
	a:hover img,
	a:focus img {
		filter: var(--filterToTextColor);
	}

	a.current {
		border-color: var(--textColor);
	}

	a:hover img,
	a:focus img {
		height: 60%;
		transition: height 200ms;
	}

	a:hover span,
	a:focus span {
		user-select: auto;
		opacity: 1;
		transition: opacity 200ms ease-in-out 100ms;
	}
</style>
