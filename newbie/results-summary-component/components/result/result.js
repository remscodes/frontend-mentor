export class Result extends HTMLElement {

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <link href="./components/result/result.css" rel="stylesheet">

      <div class="panel-result">

        <span>Your Result</span>

        <div class="result-circle">
          76
          of 100
        </div>

        <span>Great</span>

        <span>You scored higher than 65% of the people who have taken these tests.</span>
      </div>
    `;
  }
}
