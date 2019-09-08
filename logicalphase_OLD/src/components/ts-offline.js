import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from './ts-style-shared';
import { TsTypographyStyle } from './ts-style-typography';

class TSOffline extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      TsTypographyStyle,
      css`
      :host {
        padding: 16px;
        text-align: center;
        line-height: 1.5;
      }
      `
    ];
  }
  render() {
    return html `
      <section>
        <h3>Uh oh! You are offline and the request resource is unavailable.</h3>
        <button class="article-button" @click="${() => this._refresh()}">Try Again...</button>
      </section>
    `;
  }

  _refresh() {
    this.dispatchEvent(new CustomEvent('refresh', { composed: true }));
  }
}

window.customElements.define('ts-offline', TSOffline);