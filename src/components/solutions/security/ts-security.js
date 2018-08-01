import { PageViewElement } from '../../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../../shared-styles';
import { SecurityStyles } from './ts-security-css';
import { SecurityTemplate } from './ts-security-template';

class TSSecurity extends PageViewElement {
  _render(props) {
    return html `
      ${ SharedStyles }
      ${ SecurityStyles }
      ${ SecurityTemplate }
    `;
  }
}
window.customElements.define('ts-security', TSSecurity);