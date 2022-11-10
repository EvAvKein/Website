<ToolWrapper>
  <section>
    <label>
      <input bind:value={percent}
        type="number"
        placeholder="0"
        on:input={convertPercent} 
      >
      PERCENT <span>(0-100)</span>
    </label>
    <label>
      <input bind:value={rgb}
        type="number"
        placeholder="0"
        on:input={convertRgb}
      >
      RGB <span>(0-255)</span>
    </label>
    <label>
      <input bind:value={hex}
        type="text"
        placeholder="0"
        maxlength="2"
        pattern={"[0-9a-fA-F]{0,2}"}
        on:input={convertHex}
      >
      HEX <span>(0-FF)<span>
    </label>
  </section>

  <hr/>

  <p> 
    Without <a href="https://www.joshuamiron.com/percent-to-hex-converter" class="core_contentButton">the original converter by Joshua Miron</a> (and his permission), this wouldn't be here.<br>
    All I've done is adapt Joshua's code for Svelte & Typescript, and style & refactor a bit per my own preferences.
  </p>
</ToolWrapper>

<script lang="ts">
  import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";

  let percent:string;
  let rgb:string;
  let hex:string;

  function clampNumb(numb:number, max:number) {
    return Math.max(0, Math.min(numb, max));
  };

  function rgbAsPercent(rgb:number) {
    return Math.round(rgb / 255 * 100);
  };

  function rgbAsHex(rgb:number) {
    const rgbAsHex = rgb.toString(16).toUpperCase();
    return rgbAsHex.length === 1 ? "0" + rgbAsHex : rgbAsHex;
  };

  function convertPercent() {
    if (!percent) return;

    percent = String(clampNumb(Number(percent), 100));
    const percentNumb = Number(percent);
    

    const percentAsRGB = Math.round(percentNumb * 255 / 100);
    rgb = String(percentAsRGB);
    
    hex = rgbAsHex(percentAsRGB);
  };

  function convertRgb() {
    if (!rgb) return;

    rgb = String(clampNumb(Number(rgb), 255));
    const rgbNumb = Number(rgb);

    percent = String(rgbAsPercent(rgbNumb));

    hex = rgbAsHex(rgbNumb);
  };

  function convertHex() {
    if (!hex) return;

    const hexAsRgb = Math.round(parseInt(hex, 16));

    percent = String(rgbAsPercent(hexAsRgb));
    rgb = String(hexAsRgb);
  };
</script>

<style>
  section, hr, p {
    font-size: 1.25em;
    text-align: center;
  }

  section {
    margin-top: 0.4em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.5em 1em;
  }
  label {white-space: nowrap}
  input {
    color: var(--textColor);
    background-color: var(--backgroundSubColor);
    box-shadow: 0 0 0.5em 0em black;
    width: 3em;
    padding: 0.25em;
    border-radius: 0.5em;
  }
  input::placeholder {color: var(--textSubColor)}
  input:invalid {background-color: firebrick}
  input:focus, input:hover {
    box-shadow: 0 0 0.25em 0.15em var(--highlightSubColor);
  }
  label span {
    font-size: 0.85em;
    color: var(--textSubColor);
  }

  hr {
    border-color: var(--textSubColor);
    margin-block: 1em;
  }

  p {line-height: 1.3em}

  a {text-decoration: underline}
</style>