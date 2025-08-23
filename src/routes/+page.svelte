<Core
	headTitle="EvAvKein"
	headDescription="The home page for Eve Aviv Keinan's website; including answers to the questions 'who', 'what', 'why', and 'where'"
>
	<div id="rootPageWrapper">
		<div id="evavkeinWrapper">
			<EvAvKein />
		</div>

		<section id="contentGrid">
				<section id="who">
					<h2>Who?</h2>
					<h3>(Identities)</h3>
					<ul>
						<li>Cis/agender guy <span>(he/they)</span></li>
						<li>Progressive <span>(vegan, accessibility-minded, etc. Deriving from Utilitarianism)</span></li>
						<li>Neuroatypical <span>(triple-diagnosed, advantages outshining support needs)</span></li>
						<li>Senior gen-Z</li>
					</ul>
				</section>

				<section id="what">
					<h2>What?</h2>
					<h3>(Interests)</h3>
					<ul>
						<li>Programming <span>(e.g. web, C++, Linux, Vim)</span></li>
						<li>Humanities <span>(e.g. communications, philosophy, equity)</span></li>
						<li>Community-building <span>(e.g.  supporting, volunteering, organizing)</span></li>
						<li>Recurring hobbies <span>(e.g. video-games, crocheting, sci-fi, D&D, music)</span></li>
					</ul>
				</section>

			<section id="where">
				<h2>Where?</h2>
				<h3>(Residence & Work)</h3>
				<p>
					Finland since summer 2023 - currently studying at Hive Helsinki, leading Hive's student association, and open to other opportunities!
				</p>
			</section>

			<section id="email">
				<ContactLink
					logoSrc="/contact.svg"
					logoAlt="Envelope"
					text="evavkein@gmail.com"
					url="mailto:evavkein@gmail.com"
				/>
			</section>
		</section>
	</div>
</Core>

<script lang="ts">
	import Core from "./_core.svelte";
	import EvAvKein from "./evavkein.svelte";
	import ContactLink from "$lib/contactLink.svelte";
</script>

<style>
	#rootPageWrapper {
		margin: auto;
		max-width: 75rem;
		font-size: 1.3rem;
		height: inherit;
		display: flex;
		flex-direction: column;
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
		margin-top: 0.5rem;
	}

	li span {
		color: var(--textSubColor);
		font-size: 65%;
	}

	#contentGrid {
		flex-grow: 1;
		margin: 0.5rem;
		padding-bottom: 0.5rem;
	}
	#contentGrid > section {
		margin-top: 0.75rem;
	}

	#who {
		grid-area: who;
	}
	@counter-style whoList {
		system: fixed;
		symbols: "👨‍🦲" "🌱" "🧠" "🧑‍💻";
		suffix: " ";
	}
	#who ul {
		list-style-type: whoList;
	}
	
	#what {
		grid-area: what;
	}
	@counter-style whatList {
		system: cyclic;
		symbols: "💻" "🤝" "🫂" "🧶";
		suffix: " ";
	}
	#what ul {
		list-style-type: whatList;
	}

	#where {
		grid-area: where;
	}
	#where p {
		font-size: 1.2rem;
	}

	#email {
		grid-area: email;
		display: flex;
		justify-content: center;
	}

	#who,
	#what,
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
				"who what"
				"where where"
				"email email";
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto 1fr;
		}
		#contentGrid {
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

		#email {
			align-items: end;
		}
	}
</style>
