import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsGridStyle } from './ts-style-grid';
import { TsTypographyStyle } from './ts-style-typography';
import { TsProductStyle } from './ts-style-products';

class TSHeader extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      TsButtonStyle,
      TsElevationStyle,
      TsGridStyle,
      TsProductStyle,
      TsTypographyStyle,
      css`
        .ts-test {padding:0;}
      `
    ];
  } 
  
  render() {
    return html`
      <header class="ts-hero hero">
        <div class="ts-grid ts-grid__no-gap ts-hero__content">
          <div class="ts-grid__col is-12 ts-hero__1up-content is-1__large--offset is-8__large">
            <div class="fade-in content-set">
              <h1 class="ts-headline1">${this.headline}</h1>
              <p>${this.subtitle}</p>
              <div class="ts-button__set">
                <a href="/contact/" class="ts-button ts-button--primary" track-type="navigateTo" track-name="home"
                  track-metadata-position="banner">${this.headerButtonText}</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  static get properties() { return {
    headline: { type: String },
    subtitle: { type: String },
    headerButtonText: { type: String },
  };}

}
window.customElements.define('ts-header', TSHeader);