import { Recap } from './recap/recap.js';

export function registerComponents() {
  customElements.define('app-recap', Recap);
}
