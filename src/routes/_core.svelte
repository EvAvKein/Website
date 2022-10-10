<svelte:head>
  <link rel="icon" href={headFavicon}/>
  <title>{headTitle}</title>
  <meta name="description" content={headDescription}>
</svelte:head>
<div id="pageTransitionWrapper"
  in:fade={{delay: 500, duration: 500}}
  out:fade={{duration: 500}}
  on:introstart={noScrollWhilePageTransitions}
>
  <slot/>
</div>

<script lang="ts">
  import {onMount} from "svelte";
  import {fade} from "svelte/transition";

  export let headFavicon = "./eak.svg";
  export let headTitle:string;
  export let headDescription:string;

  let main:HTMLElement;
  onMount(() => main = document.querySelector("main")!);

  function noScrollWhilePageTransitions() {
    main.style.overflow = "hidden";
    setTimeout(() => {
      main.style.overflow = "";
    }, 500);
  };
</script>

<style global>
  #pageTransitionWrapper {
    height: 100%;
    width: 100%;
  }

  /*~~~~~~~~~~~~\
    CORE STYLES
  \~~~~~~~~~~~~*/
  :root { /* filters created via https://codepen.io/sosuke/pen/Pjoqqp */
    --textColor: #ececec;
    --filterToTextColor: brightness(92.5%);
    --textSubColor: #bebebe;
    --filterToTextSubColor: brightness(75%); 
    --backgroundColor: #033070;
    --filterToBackgroundColor: brightness(0) saturate(100%) invert(5%) sepia(12%) saturate(2899%) hue-rotate(171deg) brightness(92%) contrast(100%);
    --backgroundMidColor: #053A85;
    --filterToBackgroundMidColor: brightness(0) saturate(100%) invert(5%) sepia(12%) saturate(2899%) hue-rotate(171deg) brightness(92%) contrast(100%);
    --backgroundSubColor: #0A4B8F;
    --filterToBackgroundSubColor: brightness(0) saturate(100%) invert(14%) sepia(50%) saturate(2250%) hue-rotate(194deg) brightness(92%) contrast(94%);
    --highlightColor: #f5cb32;
    --filterToHighlightColor: brightness(0) saturate(100%) invert(91%) sepia(83%) saturate(7499%) hue-rotate(325deg) brightness(101%) contrast(98%);
    --highlightSubColor: #d8b434;
    --filterToHighlightSubColor: brightness(0) saturate(100%) invert(62%) sepia(76%) saturate(412%) hue-rotate(9deg) brightness(102%) contrast(84%);
  }

  * {box-sizing: border-box}

  body {
    margin: 0;
    min-height: 100%;
    color: var(--textColor);
    font-family: sans-serif;
    letter-spacing: 0.03em;
    text-underline-offset: 0.1em;
    font-size: clamp(0.9em, 2.5vw, 1.1em);
  }

  :focus {outline: none}

  img {
    pointer-events: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6, p {margin: 0}

  button, a, summary {cursor: pointer}
  button, a, summary, input, textarea {
    font-size: inherit;
    font-family: inherit;
    border: none;
  }

  ::-webkit-scrollbar {
    width: 1em;
    height: 1em;
  }
  ::-webkit-scrollbar-track {
    background-color: inherit;
    margin: 0.2em;
  }
  ::-webkit-scrollbar-corner {
    background-color: inherit
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--textColor);
    border: 0.25em solid transparent;
    background-clip: content-box;
    border-radius: 3em;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--textSubColor);
  }

  /*~~~~~~~~~~~~~~~~~~~~~\
    CORE STYLING CLASSES
  \~~~~~~~~~~~~~~~~~~~~~*/
  .core_blueprint {
    background-size: 1.5rem 1.5rem;
    background-position: center;
    background-image:
      linear-gradient(to right, #FFFFFF06 0.15rem, transparent 0),
      linear-gradient(to bottom, #FFFFFF06 0.15rem, transparent 0);
  }

  .core_backgroundButton {
    color: var(--backgroundColor);
    text-align: center;
    background-color: var(--textColor);
    border-radius: 0.2em;
    text-decoration: none;
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
    transition: background-color 350ms;
  }
  .core_backgroundButton:focus, .core_backgroundButton:hover {
    background-color: var(--highlightSubColor);
  }
  .core_backgroundButton:active {
    background-color: var(--highlightColor);
  }

  .core_contentButton {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    padding: 0;
  }
  .core_contentButton img {
    height: inherit;
    filter: var(--filterToTextColor);
  }
  .core_contentButton:focus, .core_contentButton:hover {
    color: var(--highlightSubColor);
  }
  .core_contentButton:active {
    color: var(--highlightColor);
  }
  .core_contentButton:focus img, .core_contentButton:hover img {
    filter: var(--filterToHighlightSubColor);
  }
  .core_contentButton:active img {
    filter: var(--filterToHighlightColor);
  }

  .core_contentButton svg {
    height: inherit;
    width: min-content;
  }
  .core_contentButton svg path,
  .core_contentButton svg rect,
  .core_contentButton svg circle {
    transition: fill 350ms;
    fill: var(--textColor);
  }
  .core_contentButton:focus svg path, .core_contentButton:hover svg path,
  .core_contentButton:focus svg rect, .core_contentButton:hover svg rect,
  .core_contentButton:focus svg circle, .core_contentButton:hover svg circle {
    fill: var(--highlightSubColor);
  }
  .core_contentButton:active svg path,
  .core_contentButton:active svg rect,
  .core_contentButton:active svg circle {
    fill: var(--highlightColor);
  }
</style>