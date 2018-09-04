import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles.js';

class TSView404 extends LitElement {
  render(props) {
    return html `
      ${SharedStyles}
      <style>
      :host {
        display: block;
        padding: 30px;
      }
      h2 {
        font-weight: 300;
        margin-bottom: 20px;
      }
      </style>
      <section>
        <h2 class="title">Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again?</p>
    </section>
  `;
  }
}

window.customElements.define('ts-view404', TSView404);