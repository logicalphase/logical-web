import { PageViewElement } from '../page-view-element.js';
import { html } from 'lit-html';
import { SharedStyles } from '../shared-styles.js';
import { HomeStyles } from './ts-home-css.js';
import { HomeTemplate } from './ts-home-template';

class TSHome extends PageViewElement {
  _render(props) {
    return html`
      ${ SharedStyles }
      ${ HomeStyles }
      ${ HomeTemplate }
    `;
  }
}
window.customElements.define('ts-home', TSHome);
