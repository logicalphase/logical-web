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

class TSCare extends PageViewElement {
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

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-care-header-opt.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }

      figure.img-right {
        margin: 44px 0px 44px 0;
      }

      @media (min-width: 460px) {

        h3 {
        padding-top: 20px; }

        figure.img-right {
          margin-top: 64px;
          margin-right: 60px;
        }

        .hero {
          background-position: 90% center;
        }
      }

      @media (max-width: 800px) {
        .hero {
          background-position: 90% center !important;
        }
      }   
    `
    ];
  } 

  render() {
    updateMetadata({
      title: 'WordPress Preventive Care Program - HyperPress',
      description: 'omplete protection and monitoring for WordPress'
    });

    return html`
    <article id="ts-site" class="ts-care">
      <header class="hero">
        <div class="ts-header-wrapper fade-in">
          <h1 class="paper-font-display2 paper-font-light">WordPress Preventive Care</h1>
          <h2 class="paper-font-title paper-font-light">Complete protection and monitoring for WordPress</h2>
          <div class="center-button">
            <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact a WordPress Pro</a>
          </div>
        </div>
      </header>
      <div class="ts-content-wrapper">
        <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-care-updates-200x200-opt.svg" alt="WordPress Backups, Updates, Security, Monitoring" />
                </figure>
                <h3 class="text-headline">Security, Updates, Backups, and Monitoring, Oh my!</h3>
                <p>Keeping WordPress, themes, and plugins up-to-date can make anyone anxious. But not updating can open up security vulnerabilities and cause malfunctions. We can take care of the entire process for you, so you can focus on your customers.</p>
                <p>With our WordPress Preventive Care program you'll rest easy knowing that your site is maticulously maintained and always monitored. Our WordPress Preventive Care Program includes 12 months of:</p>
                <ul class="body-checks">
                  <li>Daily encrypted backups of site files and data</li>
                  <li>Backup stored on our encrypted storage</li>
                  <li>Backup stored on your cloud provider*</li>
                  <li>Pretested updates for WordPress core</li>
                  <li>Pretested updates for installed plugins</li>
                  <li>Pretested updates for installed themes</li>
                  <li>Updates for premium themes and plugins**</li>
                  <li>24 hour site health and security monitoring</li>
                  <li>Advanced security and spam protection</li>
                  <li>No contract, optional annual renewal</li>
                </ul>
                <a class="button button-secondary-cta" data-customizer="pagespeed-order-form" href="/contact/">Order WordPress Preventive Care</a>
                <p class="fine-print"> * Dropbox, Google Cloud, Google Drive, Amazon S3, Microsoft Azure</p>
                <p class="fine-print">** Some Premium themes and plugins not eligible for auto-updating not included.</p>
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
window.customElements.define('ts-care', TSCare);