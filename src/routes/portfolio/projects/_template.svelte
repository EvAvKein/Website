<article>
  <img class="logoImg"
    src={logoSrc}
    alt={logoAlt}
  />
  <h3>{name}</h3>
  <h4>{technologies}</h4>
  <p>{description}</p>
  {#if links}
    <section class="projectLinks">
      {#each links as link}
        <a href={link.url} class="core_contentButton">
          <img
            src={link.src}
            alt={link.alt}
          />
        </a>
      {/each}
    </section>
  {/if}
</article>

<script lang="ts">
  export let logoSrc:string;
  export let logoAlt:string;
  export let name:string;
  export let technologies:string;
  export let description:string;
  export let links:{src:string, alt:string, url:string}[]|undefined;
</script>

<style>
  article {
    box-shadow: 0 0 0.25em 0.1em black;
    padding: 0.5em;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas: 
      "logo name links"
      "logo techs links"
      "description description links"
    ;
    column-gap: 0 5em;
  }

  .logoImg {
    grid-area: logo;
    height: 3em;
    width: auto;
    margin-right: 0.35em;
    align-self: center;
  }

  h3 {
    grid-area: name;
    font-size: 1.75em;
  }

  h4 {
    grid-area: techs;
    font-size: 1.1em;
    color: var(--textSubColor);
    font-weight: normal;
  }

  p {
    grid-area: description;
    margin-top: 0.25em;
  }
  
  .projectLinks {
    grid-area: links;
    border-left: 0.2em solid var(--textSubColor);
    padding-left: 0.4em;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75em;
  }
  .projectLinks a {width: min-content}
  .projectLinks img {
    height: 1.75em;
    width: auto;
  }
</style>