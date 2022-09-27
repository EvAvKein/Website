<span id="wrapper" class={(expandable ? "expandable" : "undefined") + " " + (expanded ? "expanded": "")}>
  <span>Ev<span class="extra">e</span></span>
  <span>Av<span class="extra">iv</span></span>
  <span>Kein<span class="extra">an</span></span>
</span>

<script lang="ts">
  export let expandable:boolean;
  export let expanded = false;
</script>

<style>
  #wrapper {
    color: var(--highlightColor);
    font-weight: bold;
    cursor: default;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0;
    gap: 0;
    transition: gap 750ms ease-in-out;
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

  #wrapper.expandable:hover, #wrapper.expandable.expanded {
    gap: 0 0.3em;
  }
  #wrapper.expandable:hover .extra, #wrapper.expandable.expanded .extra {
    visibility: visible;
    max-width: 2.5em;
    opacity: 1;
    transition: max-width 750ms ease-in-out,
                opacity 500ms ease-in-out 250ms;
  }
</style>