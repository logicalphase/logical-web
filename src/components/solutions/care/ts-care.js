import { PageViewElement } from '../../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../../shared-styles';
import { CareStyles } from './ts-care-css';
import { CareTemplate } from './ts-care-template';

class TSCare extends PageViewElement {
  _render(props) {
    return html `
      ${ SharedStyles }
      ${ CareStyles }
      ${ CareTemplate }
    `;
  }
}
window.customElements.define('ts-care', TSCare);