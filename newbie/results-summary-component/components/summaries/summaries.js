import summariesData from '../../data.json';

export class Summaries extends HTMLElement {

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <link href="./components/summaries/summaries.css" type="text/css" rel="stylesheet">
      
      <div class="panel-summaries">

        <span>Summary</span>

        <div id="summaries-slot"></div>
      </div>`;

    const slot = shadow.getElementById('summaries-slot')
    this.renderSummaries(slot);
  }

  renderSummaries(slot) {
    summariesData.forEach((summaryData) => {
      const staticSummary = document.createElement('app-summary');
      staticSummary.setAttribute('category', summaryData.category)
      staticSummary.setAttribute('score', summaryData.score)
      staticSummary.setAttribute('icon', summaryData.icon)

      slot.appendChild(staticSummary);
    });
  }
}
