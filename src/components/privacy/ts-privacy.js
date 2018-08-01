import { PageViewElement } from '../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../shared-styles';
import { PrivacyStyles } from './ts-privacy-css';
import { PrivacyTemplate } from './ts-privacy-template';

class TSPrivacy extends PageViewElement {
  _render(props) {
    return html `
      ${ SharedStyles }
      ${ PrivacyStyles }
      ${ PrivacyTemplate }
    `;
  }
}
window.customElements.define('ts-privacy', TSPrivacy);