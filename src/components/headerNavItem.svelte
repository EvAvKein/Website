<a href={href}
  class={currentPagePath === href ? "current" : 'core_contentButton'}
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

  a.core_contentButton:hover img, a.current img
  a.core_contentButton:focus img, a.current img
  a.core_contentButton:active img, a.current img {
    height: 70%;
    transition: height 250ms;
  }

  a.core_contentButton:hover span, a.current span
  a.core_contentButton:focus span, a.current span
  a.core_contentButton:active span, a.current span {
    user-select: auto;
    opacity: 1;
    transition: opacity 250ms ease-in-out 100ms;
  }
</style>