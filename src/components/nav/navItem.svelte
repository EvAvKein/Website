<a href={href}
  class={"core_contentButton" + (href === currentPagePath ? " current" : "")}
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
</script>

<style>
  a {height: 3em}
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

  a.current {cursor: default}
  a.current {color: var(--textSubColor)}
  a.current img {filter: var(--filterToTextSubColor)}

  a.current img, a:hover img,
  a.current img, a:focus img,
  a.current img, a:active img {
    height: 70%;
    transition: height 250ms;
  }

  a.current span, a:hover span,
  a.current span, a:focus span,
  a.current span, a:active span {
    user-select: auto;
    opacity: 1;
    transition: opacity 250ms ease-in-out 100ms;
  }
</style>