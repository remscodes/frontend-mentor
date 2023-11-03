import { Result } from './result/result';
import { Summaries } from './summaries/summaries';
import { Summary } from './summary/summary';

export function registerComponents() {
  customElements.define('app-result', Result);
  customElements.define('app-summaries', Summaries);
  customElements.define('app-summary', Summary);
}
