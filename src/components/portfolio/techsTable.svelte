<table>
  <tr>
    <th>
      Category <img src="./arrow.svg" alt="Rightward arrow">
      <hr>
      <img src="./arrow.svg" alt="Downward arrow"> Proficiency
    </th>
    <th>Tools</th>
    <th>Languages</th>
  </tr>

  <tr> 
    <th>Substantial</th>
    <td>
      <ul>
        <li>Chrome DevTools</li>
        <li>Visual Studio Code</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Vue</li>
      </ul>
    </td>
  </tr>

  <tr>
    <th>Foundational</th>
    <td>
      <ul>
        <li>Cypress</li>
        <li>Git</li>
        <li>Docker</li>
        <li>Shell</li>
        <li>Node.js</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Svelte</li>
        <li>MongoDB</li>
        <li>Express.js</li>
      </ul>
    </td>
  </tr>
</table>

<style>
  table {
    display: table;
    border-collapse: collapse;
  }

  img {
    white-space: nowrap;
    height: 1em;
    width: auto;
    vertical-align: middle;
  }
  img[alt="Downward arrow"] {
    transform: rotate(90deg);
  }

  hr {
    border: 0.1em solid var(--textSubColor);
    background-color: var(--textSubColor);
  }

  td, th {
    min-width: 7.5em;
    padding: 0.75em 0.5rem 0.75em 0.5em;
  }
  th ~ th:not(:first-child) {
    border-left: 0.2em solid var(--textSubColor);
  }
  tr:not(:first-child) th {
    border-top: 0.2em solid var(--textSubColor);
  }
  th ~ td {
    border-top: 0.2em solid var(--textSubColor);
    border-left: 0.2em solid var(--textSubColor);
  }

  ul {
    margin: 0;
    padding-left: 1.25em;
  }
  li + li {margin-top: 0.25em}
</style>