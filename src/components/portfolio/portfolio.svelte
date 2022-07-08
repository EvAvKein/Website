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
  
  <section id="employmentPitch">
    <h2>Employment Pitch</h2>
      <p>
        In an occupation as collaborative as software engineering, interpersonal skill can be just as important as technical skill.
        The above projects represent my technical skill, and below is a list of reasons why I believe I'm dispositionally/interpersonally fit for the role:
      </p>
      <ul>
        <li>I'm diligent (and communicative when appropriate) regarding the what/why/how of my conduct and its likely short-term & long-term consequences</li>
        <li>I'm mindful of how I communicate and interpret; Accounting for distinctions, implications, uncertainty, dynamics with the recipient(s) and their priorities, etc</li>
        <li>I strongly value the long-term viability/well-being of both my code (readilibity, reusability, etc) and of myself (learning and refining core principles/patterns, comprehending code as opposed to copy-pasting whatever works, etc)</li>
          <!-- ^ TODO: needs rephrasing. e.g abstrast into something like "strongly value the well-being of the people i affect and of myself" with programming-specific examples (because expanding on internal & interpersonal examples would be either incomplete or verbose) -->
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
  
  @media (min-width: 55rem) {
    main {
      display: grid;
      justify-items: center;
      grid-template-columns: 1.25fr 1fr;
      grid-template-areas:
        "projects techs"
        "pitch pitch"
      ;
      gap: 1em;
    }

    #projects {grid-area: projects}
    #techs {
      display: block;
      grid-area: techs;
    }
    #employmentPitch {grid-area: pitch}
  }
</style>