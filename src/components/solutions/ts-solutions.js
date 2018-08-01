import { PageViewElement } from '../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../shared-styles';
import { SolutionsStyles } from './ts-solutions-css';
import { SolutionsTemplate } from './ts-solutions-template';

class TSSolutions extends PageViewElement {
  _render(props) {
    return html`
      ${ SharedStyles }
      ${ SolutionsStyles }
      ${ SolutionsTemplate }
    `;
  }
}
window.customElements.define('ts-solutions', TSSolutions);
