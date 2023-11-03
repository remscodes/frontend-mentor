import { registerComponents } from './components/register-components';
import summariesData from './data.json';

function renderSummaries() {
  const slot = document.getElementById('summaries-slot');

  summariesData.forEach((summaryData) => {
    const staticSummary = document.createElement('app-summary');
    staticSummary.setAttribute('category', summaryData.category)
    staticSummary.setAttribute('score', summaryData.score)
    staticSummary.setAttribute('icon', summaryData.icon)

    slot.appendChild(staticSummary);
  });
}

registerComponents();
renderSummaries();
