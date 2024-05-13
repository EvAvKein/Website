<Core
	headTitle="EvAvKein"
	headDescription="The home page for Eve Aviv Keinan's website; including answers to the questions 'who', 'what', 'why', and 'where'"
>
	<div id="rootPageWrapper">
		<div id="evavkeinWrapper">
			<EvAvKein />
		</div>

		<section id="contentGrid">
			<div id="whoWhat">
				<section id="who">
					<h2>Who?</h2>
					<h3>(Characteristics)</h3>
					<ul>
						<li>Amiable leftist <span>(deriving from Utilitarianism)</span></li>
						<li>Neuroatypical <span>(triple-diagnosed, adapted so they're not evident)</span></li>
						<li>Cis/agender guy <span>(he/him)</span></li>
						<li>Senior Gen-Z</li>
					</ul>
				</section>

				<section id="what">
					<h2>What?</h2>
					<h3>(Activities)</h3>
					<ul>
						<li>Programming <span>(web, frontend & backend)</span></li>
						<li>Video games <span>(e.g. rhythm-action, shooters, role-playing, indie)</span></li>
						<li>Misc media <span>(e.g. sci-fi, news, explainers, fandoms)</span></li>
						<li>Local events <span>(e.g. software-engineering talks)</span></li>
					</ul>
				</section>
			</div>

			<section id="why">
				<h2>Why?</h2>
				<h3>(Values)</h3>
				<ValuesDiagram />
				<p>(Select a value or connect two)</p>
			</section>

			<section id="where">
				<h2>Where?</h2>
				<h3>(Residence & Work)</h3>
				<p>
					Living in Finland since summer 2023. Currently residing and jobseeking in Helsinki (open to in-office, hybrid,
					and remote)!
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
		margin: auto;
		max-width: 65rem;
		font-size: 1.3rem;
	}

	#evavkeinWrapper {
		font-size: 4rem;
	}
	h2 {
		font-size: 2.75rem;
	}
	h3 {
		font-size: 1.75rem;
		color: var(--textSubColor);
		margin-bottom: 0.5rem;
	}

	ul {
		margin: 0;
	}
	li + li {
		margin-top: 0.25rem;
	}

	li span {
		color: var(--textSubColor);
		font-size: 65%;
	}

	#contentGrid {
		margin: 1rem auto 0;
		padding-bottom: 0.5rem;
	}
	#contentGrid > section {
		margin-top: 0.75rem;
	}

	#whoWhat {
		grid-area: whoWhat;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	#why {
		grid-area: why;
		max-width: 40rem;
		margin: auto;
	}
	#why p {
		color: var(--textSubColor);
		font-size: 0.9rem;
		text-align: center;
	}
	#where {
		grid-area: where;
	}
	#where p {
		font-size: 1.2rem;
	}

	#who,
	#what,
	#why,
	#where {
		background-color: var(--backgroundSubColor);
		padding: 0.75rem 1.25rem 0.75rem;
		box-shadow: 0 0 0.5rem 0.1rem black;
	}

	@media (min-width: 50rem) {
		#contentGrid {
			display: grid;
			align-items: unset;
			grid-template-areas:
				"why whoWhat"
				"where whoWhat";
			grid-template-columns: 55% auto;
		}
		#contentGrid,
		#whoWhat {
			gap: 1rem;
		}

		#evavkeinWrapper {
			font-size: 5rem;
		}

		#contentGrid > section {
			margin-top: unset;
		}

		#who,
		#what {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
		}

		ul {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: space-around;
		}

		#why {
			margin: unset;
		}
	}

	@media (min-width: 80rem) {
		#rootPageWrapper {
			max-width: 80rem;
		}

		#contentGrid {
			grid-template-areas:
				"why whoWhat"
				"why whoWhat"
				"where where";
			grid-template-columns: 50% auto;
		}
		#contentGrid,
		#whoWhat {
			gap: 1.5rem;
		}

		#why {
			width: unset;
			justify-self: unset;
		}
	}
</style>
