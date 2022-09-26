<a href={href}
  class={
    "core_contentButton" + 
    (nameAlwaysVisible ? " nameVisible" : "") + 
    (ofCurrentPage ? " current" : "")
  }
  tabindex={currentPagePath === href ? -1 : 0}
  >
  <img src={imgSrc} alt={imgAlt}/>
  <span>{pageName}</span>
</a>

<script lang="ts">
  export let href:string;
  export let imgSrc:string
  export let imgAlt:string;
  export let pageName:string;
  export let currentPagePath:string;
  export let nameAlwaysVisible = false;

  $: ofCurrentPage = href === "/" ? currentPagePath === "/" : currentPagePath.includes(href);
</script>

<style>
  a {
    height: 3em;
    text-align: center;
    overflow: hidden;
  }
  a img {
    display: block;
    height: 100%;
    width: auto;
    margin: auto;
    transition: height 250ms ease-in-out 100ms;
  }
  a span {
    font-weight: bold;
    user-select: none;
    opacity: 0;
    transition: opacity 250ms ease-out;
  }

  a.current {
    cursor: default;
    color: var(--textSubColor);
  }
  a.current img {filter: var(--filterToTextSubColor)}

  a.nameVisible img, a.current img,
  a:hover img, a:focus img, a:active img {
    height: 60%;
    transition: height 250ms;
  }

  a.nameVisible span, a.current span,
  a:hover span, a:focus span, a:active span {
    user-select: auto;
    opacity: 1;
    transition: opacity 250ms ease-in-out 100ms;
  }
</style>