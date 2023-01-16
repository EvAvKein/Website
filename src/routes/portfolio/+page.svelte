<Core
  headTitle="EvAvKein: Portfolio"
  headDescription="Eve Aviv Keinan's programming portfolio page; including summaries with links to his projects, lists of the techs he has experience with, and information regarding his resumé"
>
  <section id="portfolio">
    <h2>Portfolio</h2>
    <section id="technologies" class="core_blueprint">
      <h3>Technologies</h3>
      <Techs/>
    </section>

    <section id="projects" class="core_blueprint">
      <h3>Projects</h3>
      <Projects/>
    </section>

    <section id="resume" class="core_blueprint">
      <h3>Resumé</h3>
      <p>The summary is that I've done civil service and community management, you're welcome to contact me for the resumé file with all its usual details</p>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "../_core.svelte";
  import Techs from "./techs/techsSection.svelte";
  import Projects from "./projects/projectsSection.svelte";
</script>

<style>
  #portfolio {max-width: 55em}

  h2 {font-size: 3.5em}
  h3 {font-size: 3em}
  h2, h3 {
    text-align: center;
    margin-bottom: 0.25em;
  }

  #portfolio > section {
    background-color: var(--backgroundMidColor);
    border-radius: 0.25em;
    padding: 0.5em 1em 0.5em;
    box-shadow: 0 0 0.5em 0.1em black;
  }
  #portfolio > section + section {margin-top: 1.5em}

  #technologies {
    margin: auto;
    max-width: 45em;
  }
</style>