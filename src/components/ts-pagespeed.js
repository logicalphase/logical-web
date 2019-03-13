import { HP_HOST } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsTypographyStyle } from './ts-style-typography';

const cdnHost = unsafeCSS(HP_HOST);
class TSPageSpeed extends PageViewElement {
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
        padding-top: 20px; 
      }

      .hero {
        background: var(--app-light-text-color) url('/images/header/ts-pagespeed-header-opt.svg') no-repeat;
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
      title: 'PageSpeed Optimizations - HyperPress',
      description: 'About page'
    });

    return html`
      <article id="ts-site" class="ts-pagespeed">
        <header class="hero">
          <div class="ts-header-wrapper fade-in">
            <h1 class="paper-font-display2 paper-font-light">PageSpeed Optimization</h1>
            <p class="paper-font-title paper-font-light">Lightning fast, functionally superior, masters of self-defense</p>
            <div class="center-button">
              <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact a PageSpeed Pro</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
          <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main delayed-fade-in">
                <div class="ts-content-grid-box">
                  <h3 class="text-headline">Milliseconds Cost Money</h3>
                  <figure class="img-right">
                    <img src="https://hyperpress.app/images/content/ts-pagespeed-ms-to-dollars-200x200-opt.svg" alt="WordPress PageSpeed Optimizations" />
                  </figure>
                  <p>You've spent time and money building a WordPress site you can be proud of, but a slow site can undo all that hard work and hurt more than it helps. We've optimized hundreds of WordPress sites of all sizes and stripes. We know what slows WordPress down and how to make it lightning fast across all devices.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h3 class="text-headline">Lightning Fast WordPress</h3>
                  <figure class="img-right">
                    <img src="/images/content/ts-pagespeed-screen-200x200-optimized.svg" alt="When it comes to page loading, time really is money!" />
                  </figure>
                  <p>We identify performance bottlenecks, create a prioritized plan of action, and fix what's slowing your site down. We provide a complete post-optimization site report that explains all changes we make and tips on how to keep your site super fast and Google Search friendly.</p>
                  <h3 class="paper-font-subhead">Optimization Service includes:</h3>
                  <ul class="body-checks">
                    <li class="ts-icon">Multiple diagnostic tests</li>
                    <li>Image compression</li>
                    <li>Optimized server and client caching</li>
                    <li>Script and CSS minification</li>
                    <li>Defer order of script loading</li>            
                    <li>Connect site to CDN of your choice (optional)</li>
                    <li>7 day follow up exam with adjustments</li>
                    <li>Bi-annual check-up and site health check</li>
                  </ul>
                </div>
                <div class="ts-content-grid-box">
                  <h4 class="paper-font-subhead">But wait, there's more!</h4>
                  <p>We'll monitor your site and periodically stop by and make adjustments for one year after we optimize it. No other service offers that.</p>
                  <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/contact/">Order Optimization</a>
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
window.customElements.define('ts-pagespeed', TSPageSpeed);