<Core
  headTitle="EvAvKein: Portfolio"
  headDescription="Eve Aviv Keinan's programming portfolio page; including summaries with links to his projects, lists of the techs he has experience with, dispositions relevant to his professional conduct, and information regarding his resumé"
>
  <section id="portfolio">
    <h2>Portfolio</h2>
    <section id="technologies" class="core_blueprint">
      <h3>Technologies</h3>
      <Techs/>
    </section>

    <section id="projects" class="core_blueprint">
      <h3>Projects</h3>
      <section id="projectsList">
        <Distillogue/>
        <Website/>
        <FilterJobsFeeds/>
        <Warehouse/>
      </section>
    </section>

    <section id="resume" class="core_blueprint">
      <h3>Resumé</h3>
      <p>The summary is that I've done civil service and community management, you're welcome to contact me for the resumé file with all its usual details</p>
    </section>

    <section id="dispositions" class="core_blueprint">
      <h3>Dispositions</h3>
        <p>
          Considering my lack of professional experience in the field, here are (some) reasons why I'm dispositionally fit for software engineering:
        </p>
        <ul>
          <li>
            Thanks to my neuroatypicality, ongoing introspection, and ethics, I'm particularly analytically-inclined: I have a keen eye for edge-cases and incongruities, and 
            <Tooltip
              text={"prefer long-term/systemic solutions"}
              tooltip={"(or, when there's insufficient context, at least the likeliest educated guess)"}
            />
            over instantly-gratifying haphazard ones
          </li>
          <li>
            I'm mindful of the well-being of those I affect: Heeding Utilitarian calculus in all domains,
            <Tooltip
              text={"without disregarding"}
              tooltip={"(but outright exonerating as few as viable)"}
            />
            human imperfections/conditions
          </li>
          <li>
            I aim to be 
            <Tooltip
              text={"as courteous as possible"}
              tooltip={"(while it is conducive for Utility (as in Utilitarianism))"}
            />, 
            <Tooltip
              text={"'meet people where they're at'"}
              tooltip={"(...despite me citing Utilitarian. It seemed too necessary here to sufficiently convey my perspective)"}
            />,
            and (at a minimum) be a 
            <Tooltip
              text={"worthwhile participant"}
              tooltip={"(compared to the time/attention/resources my presence/conduct necessitate)"}
            />
            in the communities/systems I engage with
          </li>
        </ul>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "../_core.svelte";
  import Distillogue from "./projects/distillogue.svelte";
  import Website from "./projects/website.svelte";
  import FilterJobsFeeds from "./projects/filterJobsFeeds.svelte";
  import Warehouse from "./projects/warehouse.svelte";
  import Techs from "./techs/techsSection.svelte";

  import Tooltip from "../../lib/tooltip.svelte";
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

  #projects {
    display: flex;
    flex-direction: column;
  }
  #projectsList {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1.5em;
  }

  li + li {margin-top: 0.4em}
</style>