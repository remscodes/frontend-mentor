import { registerComponents } from './components/register-components.js';
import summariesData from './data.js';

function renderSummary() {
  const slot = document.getElementById('recaps-slot');

  summariesData.forEach((props) => {
    const recap = document.createElement('app-recap');
    Object.assign(recap, props);
    slot.appendChild(recap);
  });
}

registerComponents();
renderSummary();
