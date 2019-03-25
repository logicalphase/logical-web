import { CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsTypographyStyle } from './ts-style-typography';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSEmergency extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsButtonStyle,
      TsElevationStyle,
      TsTypographyStyle,
      css`
      :host {
        display: block;
        padding: 0px;
      }
      /* Smaller than 460 */

      h3 {
        padding-top: 20px; }

      .hero {
        background: var(--app-reverse-text-color) url('https://${cdnHost}/images/header/ts-emergency-header-opt.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }
      @media (min-width: 460px) {
        h3 {
          padding-top: 20px; 
        }

        .hero {
          background-position: 93% center;
        }
      }

      @media (max-width: 800px) {
        .hero {
          background-position: 93% center !important;
        }
      } 
    `
    ];
  }

  render() {
    updateMetadata({
      title: 'WordPress Emergency Response Team - HyperPress',
      description: 'When your site breaks down, we\'ve got you covered'
    });

    return html`
    <article id="ts-site" class="ts-emergency">
      <header class="hero">
        <div class="ts-header-wrapper fade-in">
          <h1 class="paper-font-display2 paper-font-light">WordPress 911</h1>
          <h2 class="paper-font-title paper-font-light">When your site breaks down, we've got you covered</h2>
          <div class="center-button">
            <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home"
              track-metadata-position="banner">Contact a WordPress Pro</a>
          </div>
        </div>
      </header>
      <div class="ts-content-wrapper">
        <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-emergency-tools-200x200-opt.svg" alt="WordPress Repairs and Recovery" />
                </figure>
                <h3 class="text-headline">A Broken WordPress Site Will Ruin Your Day </h3>
                <p>Errors, bugs, and plugin conflicts can break your site, ruin data, and make life miserable. But we know what makes WordPress tick. We’ve diagnosed and repaired hundreds of WordPress sites like yours, and we’ll have you back up and running in no time. Best of all, We guarantee our work. Our emergency response services include:</p>
                  <ul class="body-checks">
                    <li>Gathering diagnostic information</li>
                    <li>Identifying the cause of the problem</li>
                    <li>Plan of action, including cost</li>
                    <li>Repairing the problem and testing results</li>
                    <li>Post-op report with recommendations</li>
                    <li>Follow up examination</li>
                    <li>All work guaranteed</li>
                  </ul>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/contact/">Contact WordPress 911</a>
              </div>
            </main>
            <aside class="sidebar">
              <ts-sidebar-nav></ts-sidebar-nav>
            </aside>     
          </div>
        </section>
      </div>
    </article>
  `;
  }
}
window.customElements.define('ts-emergency', TSEmergency);