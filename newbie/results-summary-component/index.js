import summaries from './data.json';

const slot = document.getElementById('summaries-slot');

summaries.forEach((summary) => {

  const div = document.createElement('div');
  div.classList.add('summary-content');

  slot.appendChild(div);
});
