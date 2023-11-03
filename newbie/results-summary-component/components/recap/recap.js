export class Recap extends HTMLElement {

  static observedAttributes = ['category', 'score', 'icon'];

  category = 'Category';
  score = 0;
  icon;

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <link href="./components/recap/recap.css" type="text/css" rel="stylesheet">

      <div class="recap recap--${this.category}">
  
        <img src="${this.icon}" alt="${this.category}" draggable="false">
  
        <span>${this.category}</span>
  
        <div class="recap__score">
          <span class="recap__score-current">${this.score} <span class="recap__score-total">/ 100</span></span>
        </div>
      </div>
    `;
  }
}
