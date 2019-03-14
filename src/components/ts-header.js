import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsGridStyle } from './ts-style-grid';
import { TsTypographyStyle } from './ts-style-typography';

class TSHeader extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      TsButtonStyle,
      TsElevationStyle,
      TsGridStyle,
      TsTypographyStyle,
      css`
        .ts-test {padding:0;}
      `
    ];
  }

  static get properties() { return {
    headline: { type: String },
    subtitle: { type: String },
    headerButtonText: { type: String },
  };} 

  render() {
    const { headline, subtitle, headerButtonText } = this;
    return html`
        <header class="ts-hero hero">
          <div class="ts-grid ts-grid__no-gap ts-hero__content">
            <div class="ts-grid__col is-12 ts-hero__1up-content is-1__large--offset is-8__large">
              <div class="fade-in content-set">
                <h1 class="ts-headline1">${headline}</h1>
                <p>${subtitle}</p>
                <div class="ts-button__set">
                  <a href="/contact/" class="ts-button ts-button--primary" >${headerButtonText}</a>
                </div>
              </div>
            </div>
          </div>
        </header>
    `;
  }

}
window.customElements.define('ts-header', TSHeader);