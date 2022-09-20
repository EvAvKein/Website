<section id="portfolio">
  <section id="projects">
    <h2>Projects</h2>
    <section id="projects">
      <Distillogue/>
      <Website/>
      <FilterJobsFeeds/>
      <Warehouse/>
    </section>
  </section>
  
  <section id="techs">
    <h2>Technologies</h2>
    <TechsTable/>
  </section>

  <section id="resume">
    <h2>Resumé</h2>
    <p>The summary is that I've done civil service and community management, you're welcome to contact me for the resumé file with all its usual details</p>
  </section>
  
  <section id="dispositions">
    <h2>Dispositions</h2>
      <p>
        The following are (some) reasons why I believe I'm dispositionally fit for software engineering:
      </p>
      <ul>
        <li>I'm diligent (and communicative when appropriate) regarding the what/why/how of my conduct and its likely short-term & long-term consequences</li>
        <li>I'm mindful of how I communicate and interpret; Accounting for distinctions, implications, uncertainty, dynamics with the recipient(s) and their priorities, etc</li>
        <li>I strongly value the long-term well-being of myself and those I affect. In the context of programming, this guides my output (e.g readability, reusability) and motivates me to refine my approach to software engineering (e.g priorities, mindset)</li>
      </ul>
  </section>
</section>

<script lang="ts">
  import Distillogue from "./projects/distillogue.svelte";
  import Website from "./projects/website.svelte";
  import FilterJobsFeeds from "./projects/filterJobsFeeds.svelte";
  import Warehouse from "./projects/warehouse.svelte";

  import TechsTable from "./techsTable.svelte";
</script>

<style>
  #portfolio {
    max-width: 70em;
    padding: 0 0.5em 0.5em;
    margin: 0 auto;
  }

  h2 {
    font-size: 3.25em;
    margin-bottom: 0.1em;
  }
  section + section {margin-top: 1em}

  #dispositions h2, #resume h2 {
    font-size: 2.75em;
  }
  li + li {margin-top: 0.4em}
  
  @media (min-width: 55em) {
    section + section {margin-top: 0}
    #portfolio {
      display: grid;
      justify-items: center;
      grid-template-columns: 1.25fr 1fr;
      grid-template-areas:
        "projects techs"
        "projects resume"
        "dispositions dispositions"
      ;
      gap: 1em;
    }

    #projects {grid-area: projects}
    #techs {grid-area: techs}
    #resume {grid-area: resume}
    #dispositions {grid-area: dispositions}
  }
</style>