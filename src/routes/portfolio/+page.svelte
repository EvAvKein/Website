<Core
  headTitle="EvAvKein: Portfolio"
  headDescription="Eve Aviv Keinan's programming portfolio page; including summaries with links to his projects, lists of the techs he has experience with, dispositions relevant to his professional conduct, and information regarding his resumé"
>
  <section id="portfolio">
    <section id="projects" class="core_blueprint">
      <h2>Projects</h2>
      <section id="projectsList">
        <Distillogue/>
        <Website/>
        <FilterJobsFeeds/>
        <Warehouse/>
      </section>
    </section>

    <section id="techs" class="core_blueprint">
      <h2>Technologies</h2>
      <TechsTable/>
    </section>

    <section id="resume" class="core_blueprint">
      <h2>Resumé</h2>
      <p>The summary is that I've done civil service and community management, you're welcome to contact me for the resumé file with all its usual details</p>
    </section>

    <section id="dispositions" class="core_blueprint">
      <h2>Dispositions</h2>
        <p>
          Considering my lack of professional experience in the field, here are (some) reasons why I'm dispositionally fit for software engineering:
        </p>
        <ul>
          <li>
            Thanks to my neuroatypicality, ongoing introspection, and ethics, I'm particularly analytically-inclined: I have a keen eye for edge-cases and incongruities, and 
            <Tooltip>
              <span slot="subject">prefer long-term/systemic solutions</span>
              <span slot="content">(or, when there's insufficient context, at least the likeliest educated guess)</span>
            </Tooltip>
            over instantly-gratifying haphazard ones
          </li>
          <li>
            I'm mindful of the well-being of myself and 
            <Tooltip>
              <span slot="subject">those I affect</span>
              <span slot="content">(individuals and systems alike)</span>
            </Tooltip>:
            Heeding Utilitarian calculus in all domains,
            <Tooltip>
              <span slot="subject">without disregarding</span>
              <span slot="content">(but outright exonerating as few as viable)</span>
            </Tooltip>
            human imperfections/conditions
          </li>
          <li>
            I aim to be 
            <Tooltip>
              <span slot="subject">as courteous as possible</span>
              <span slot="content">(while it is conducive for Utility (as in Utilitarianism))</span>
            </Tooltip>, 
            to
            <Tooltip>
              <span slot="subject">'meet people where they're at'</span>
              <span slot="content">(...despite me citing Utilitarian. It seemed too necessary to sufficiently convey my perspective)</span>
            </Tooltip>,
            and (at a minimum) be a 
            <Tooltip>
              <span slot="subject">worthwhile participant</span>
              <span slot="content">(compared to the time/attention/resources my presence/conduct necessitate)</span>
            </Tooltip>
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
  import TechsTable from "./techsTable.svelte";

  import Tooltip from "../../lib/tooltip.svelte";
</script>

<style>
  #portfolio {
    max-width: 75em;
    margin: 0 auto;
    padding-bottom: 0.5em;
  }
  #portfolio > section {
    background-color: var(--backgroundSubColor);
    padding: 1em;
    box-shadow: inset 0 0 0.5em 0.1em black;
  }
  #portfolio > section + section {margin-top: 1em}

  h2 {
    font-size: 3.25em;
    margin-bottom: 0.1em;
  }

  #techs {overflow-x: auto}

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

  #dispositions h2, #resume h2 {
    font-size: 2.75em;
  }
  li + li {margin-top: 0.4em}
  
  @media (min-width: 80em) {
    #portfolio {
      display: grid;
      justify-items: stretch;
      align-items: stretch;
      grid-template-columns: 1.25fr 1fr;
      grid-template-areas:
        "projects techs"
        "projects resume"
        "dispositions dispositions"
      ;
      gap: 1em;
    }
    
    #portfolio > section + section {margin-top: 0}
    #projects {grid-area: projects}
    #techs {grid-area: techs}
    #resume {grid-area: resume}
    #dispositions {grid-area: dispositions}
  }
</style>