<h1 class={(expandable ? "expandable" : "undefined") + " " + (expanded ? "expanded": "")}>
  <span>Ev<span class="extra">e</span></span>
  <span>Av<span class="extra">iv</span></span>
  <span>Kein<span class="extra">an</span></span>
</h1>

<script lang="ts">
  export let expandable:boolean;
  export let expanded = false;
</script>

<style>
  h1 {
    color: inherit;
    font-size: inherit;
    cursor: default;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: fit-content;
    margin: 0;
    gap: 0;
    transition: gap 1000ms;
  }
  .extra {
    display: inline-block;
    text-align: left;
    visibility: hidden;
    max-width: 0;
    opacity: 0;
    transition: max-width 750ms ease-out,
                opacity 250ms ease-out 250ms,
                visibility 0ms 500ms;
  }

  h1.expandable:hover, h1.expandable.expanded {
    gap: 0 0.3em;
    transition: gap 750ms ease-in-out;
  }
  h1.expandable:hover .extra, h1.expandable.expanded .extra {
    visibility: visible;
    max-width: 2.5em;
    opacity: 1;
    transition: max-width 1250ms ease-in-out,
                opacity 500ms ease-out 250ms;
  }
</style>