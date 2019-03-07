import { CDN_HOST_URL } from './ts-config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsTypographyStyle } from './ts-style-typography';

const cdnHost = unsafeCSS(CDN_HOST_URL);
class TSMigrations extends PageViewElement {
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
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-migrations-header.svg') no-repeat;
        background-size: 380px;
        background-position: center top;
      }

      figure.img-right:first-of-type {
        margin-top: -14px;
        margin-bottom: -24px;
      }

      @media (min-width: 460px) {
        .hero {
          background-position: 92% top;
        }
        figure.img-right:first-of-type {
          margin-top: 40px;
          margin-bottom: 0;
        }
      }

      @media (max-width: 800px) {
        .hero {
          background-position: 95% top !important; 
        }
      }    
    `
    ];
  } 
  
  render() {
    updateMetadata({
      title: 'WordPress Relocation - HyperPress',
      description: 'We\'re experts at relocating WordPress'
    });

    return html`
      <article id="ts-site" class="ts-migrations">
        <header class="hero">
          <div class="ts-header-wrapper fade-in">
            <h1 class="paper-font-display2 paper-font-light">WordPress Migrations</h1>
            <h2 class="paper-font-title paper-font-light">We're experts at relocating WordPress.</h2>
            <div class="center-button">
              <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact a WordPress Pro</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
        <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-migration-towp-200x200-opt.svg" alt="Migrating Existing Site to WordPress" />
                </figure> 
                <h3 class="text-headline">Moving WordPress seem overwhelming?</h3>
                <p>We've moved hundreds of WordPress sites to new hosting. We know exactly what needs to be done to eliminate downtime, protect your data, and complete all of other tasks needed to make your move a stress free one.</p>
                <ul class="body-checks">
                  <li>Full backup of current site</li>
                  <li>Transfer site files and data</li>
                  <li>Database updates if applicable</li>
                  <li>SSL certificate and site HTTPS (optional)</li>
                  <li>DNS host record changes</li>
                  <li>Monitor DNS propagation</li>
                  <li>Testing site on your new host</li>
                </ul>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/contact/">Move WordPress to New Hosting</a>
              </div>
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-migrations-van-200x200-opt.svg" alt="Migrating Existing Site to WordPress" />
                </figure> 
                <h3 class="text-headline">Migrating to WordPress</h3>
                <p>You've heard great things about WordPress, but your site was built using some other software or content mangement system (CMS). The idea of trying to move your site into WordPress seems impossibly complex. Well, don't let that stop you. We built tools that automate importing your content into a brand new WordPress instance, quickly, safely, and without error. So, if you're ready to move to WordPress, we'll make it happen.</p>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/contact/">Migrate My Site to WordPress</a>
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
window.customElements.define('ts-migrations', TSMigrations);