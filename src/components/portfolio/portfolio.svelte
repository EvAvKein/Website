<main>
  <section id="projects">
    <h2>Projects</h2>
    <section id="projects">
      <Distillogue/>
      <Website/>
      <Warehouse/>
    </section>
  </section>
  
  <section id="techs">
    <h2>Technologies</h2>
    <TechsTable/>
  </section>
  
  <section id="dispositions">
    <h2>Dispositions</h2>
      <p>
        The following are reasons why I believe I'm dispositionally/interpersonally fit for software engineering:
      </p>
      <ul>
        <li>I'm diligent (and communicative when appropriate) regarding the what/why/how of my conduct and its likely short-term & long-term consequences</li>
        <li>I'm mindful of how I communicate and interpret; Accounting for distinctions, implications, uncertainty, dynamics with the recipient(s) and their priorities, etc</li>
        <li>I strongly value the long-term well-being of myself and those I affect. In the context of programming, this guides my output (e.g readability, reusability) and motivates me to refine my approach to software engineering (e.g priorities, mindset)</li>
      </ul>
  </section>
</main>

<script lang="ts">
  import Distillogue from "./projects/distillogue.svelte";
  import Website from "./projects/website.svelte";
  import Warehouse from "./projects/warehouse.svelte";

  import TechsTable from "./techsTable.svelte";
</script>

<style>
  main {
    max-width: 70em;
    font-size: clamp(0.8em, 3vw, 1.1em);
    padding: 0 1em 0.5em;
    margin: 0 auto;
  }

  h2 {
    font-size: 3.25em;
    margin-bottom: 0.1em;
  }

  #techs {
    display: flex;
    flex-direction: column
  }

  li + li {margin-top: 0.4em}

  #dispositions h2 {
    font-size: 2.75em;
  }
  
  @media (min-width: 55rem) {
    main {
      display: grid;
      justify-items: center;
      grid-template-columns: 1.25fr 1fr;
      grid-template-areas:
        "projects techs"
        "dispositions dispositions"
      ;
      gap: 1em;
    }

    #projects {grid-area: projects}
    #techs {
      display: block;
      grid-area: techs;
    }
    #dispositions {grid-area: dispositions}
  }
</style>