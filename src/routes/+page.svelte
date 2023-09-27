<Core headTitle="EvAvKein" headDescription="The home page for Eve Aviv Keinan's website">
	<div id="rootPageWrapper">
		<EvAvKein />

		<section id="contentGrid">
			<section id="who" class="core_blueprint">
				<h2>Who?</h2>
				<h3>(Demographics)</h3>
				<ul>
					<li>Progressive leftie <span>(deriving from Utilitarianism)</span></li>
					<li>Neuroatypical <span>(HFASD & GAD & ADD)</span></li>
					<li>Cis/agender guy <span>(he/they)</span></li>
					<li>Senior Gen-Z</li>
				</ul>
			</section>

			<section id="what" class="core_blueprint">
				<h2>What?</h2>
				<h3>(Activities)</h3>
				<ul>
					<li>Programming <span>(fullstack web)</span></li>
					<li>Video-games <span>(e.g. RPGs, adventure, shooters, misc indie)</span></li>
					<li>Online media <span>(e.g. news, explainers, fandoms)</span></li>
				</ul>
			</section>

			<section id="why" class="core_blueprint">
				<h2>Why?</h2>
				<h3>(Values)</h3>
				<ValuesDiagram />
				<p>(Select any value or connection)</p>
			</section>

			<section id="where" class="core_blueprint">
				<h2>Where?</h2>
				<h3>(Residence)</h3>
				<p>
					Recently moved to Finland (from Israel, but with an EU citizenship). Currently in Helsinki, but jobseeking and
					open to relocating within Finland
				</p>
			</section>
		</section>
	</div>
</Core>

<script lang="ts">
	import Core from "./_core.svelte";
	import EvAvKein from "./evavkein.svelte";
	import ValuesDiagram from "./valuesDiagram.svelte";
</script>

<style>
	#rootPageWrapper {
		font-size: 1.4em;
	}

	section.core_blueprint {
		background-color: var(--backgroundSubColor);
		margin: auto;
		padding: 0.75em 1em;
		box-shadow: 0 0 0.5em 0.1em black;
	}
	section.core_blueprint + section.core_blueprint {
		margin-top: 1em;
	}

	h2 {
		font-size: 2em;
	}
	h3 {
		font-size: 1.25em;
		color: var(--textSubColor);
		margin-bottom: 0.5em;
	}

	ul {
		margin: 0;
	}

	li + li {
		margin-top: 0.25em;
	}

	li span {
		color: var(--textSubColor);
		font-size: 65%;
	}

	#why p {
		color: var(--textSubColor);
		font-size: 0.9em;
		text-align: center;
	}

	#why {
		grid-area: why;
	}
	#who {
		grid-area: who;
	}
	#what {
		grid-area: what;
	}
	#where {
		grid-area: where;
	}
	#contentGrid {
		margin-top: 1em;
	}

	@media (min-width: 50em) {
		section.core_blueprint {
			margin: unset;
		}

		section.core_blueprint + section.core_blueprint {
			margin-top: 0;
		}

		#contentGrid {
			display: grid;
			gap: 1em;
			grid-template-areas:
				"who what"
				"why why"
				"where where";
		}

		#who,
		#what {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
		}

		ul {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: space-evenly;
		}

		#why {
			width: 30em;
			justify-self: center;
		}
	}

	@media (min-width: 80em) {
		#contentGrid {
			align-items: unset;
			grid-template-areas:
				"why who"
				"why what"
				"where where";
			grid-template-columns: 60% auto;
		}

		#why {
			width: unset;
			justify-self: unset;
		}
	}
</style>
