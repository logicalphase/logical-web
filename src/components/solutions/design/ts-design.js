import { PageViewElement } from '../../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../../shared-styles';
import { DesignStyles } from './ts-design-css';
import { DesignTemplate } from './ts-design-template';

class TSDesign extends PageViewElement {
  _render(props) {
    return html`
      ${ SharedStyles }
      ${ DesignStyles }
      ${ DesignTemplate }
    `;
  }
}
window.customElements.define('ts-design', TSDesign);
