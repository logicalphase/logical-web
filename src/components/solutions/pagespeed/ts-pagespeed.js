import { PageViewElement } from '../../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../../shared-styles';
import { PageSpeedStyles } from './ts-pagespeed-css';
import { PageSpeedTemplate } from './ts-pagespeed-template';

class TSPageSpeed extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      ${PageSpeedStyles}
      ${ PageSpeedTemplate }
    `;
  }
}
window.customElements.define('ts-pagespeed', TSPageSpeed);
