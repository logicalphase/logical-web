import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';

class TSContact extends LitElement {
  render(props) {
    return html `
    ${ SharedStyles }
    <style>
    </style>
  `;
  }
}
window.customElements.define('ts-contact', TSContact);