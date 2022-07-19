<header>
  <div id="evavkeinWrapper">
    <Evavkein minEmWidthExpandable={14} expanded={evavkeinExpanded}/>
  </div>

  <Nav/>
</header>

<script lang="ts">
  import {afterNavigate} from "$app/navigation";
  import Nav from "./nav/nav.svelte";
  import Evavkein from "./evavkein.svelte";

  let evavkeinExpanded = false;

  afterNavigate((navData) => {
    if (navData.from === null) {
      evavkeinExpanded = true;
      setTimeout(() => {evavkeinExpanded = false}, 2000);
    };
  });
</script>

<style>
  header {
    position: sticky;
    font-size: clamp(0.65em, 3vw, 1.25em);
    top: 0;
    left: 0;
    width: calc(100% - 1em);
    background-color: var(--backgroundColor);
    padding: 0.25em 0.5em;
    margin: 0 0 1em;
    z-index: 1000;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5em;
  }
  header:after {
    z-index: 1000;
    content: "";
    position: absolute;
    left: 0;
    display: block;
    bottom: -1em;
    width: 100%;
    height: 1em;
    background-image: linear-gradient(to top, #00000000, var(--backgroundColor));
  }
  
  #evavkeinWrapper {
    color: var(--highlightColor);
    font-size: 3em;
    line-height: 0.9em;
  }
</style>