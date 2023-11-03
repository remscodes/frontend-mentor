export class Summary extends HTMLElement {

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
      <link href="./components/summary/summary.css" type="text/css" rel="stylesheet">

      <div class="summary summary--${this.category}">
  
        <img src="${this.icon}" alt="${this.category}" draggable="false">
  
        <span>${this.category}</span>
  
        <div style="flex: 1; display: flex; justify-content: flex-end;">
          <span style="color: var(--dark-gray-blue);">${this.score} <span style="color: var(--light-lavander);">/ 100</span></span>
        </div>
      </div>
    `;
  }
}
