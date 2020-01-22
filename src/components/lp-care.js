import { CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './style-shared';
import { TypographyStyle } from './style-typography';
import { LayoutStyle } from './style-layout';
import { GridStyle } from './style-grid';
import { Card } from './style-card';
import { ButtonStyle } from './style-button';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Care extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      ButtonStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */
        .hero {
          background: var(--app-reverse-text-color) url('/images/header/care-header-opt.svg')
            no-repeat;
          background-size: 424px;
          background-position: 93% 110px;
        }
        .section {
          padding-top: 0px;
        }
        img.content-grid-image,
        img.content-grid-image-lower {
          height: auto;
          max-width: 80%;
          width: 100%;
          margin: 0 auto;
        }
        .grid__col--horizontal-center {
          justify-self: normal;
        }
        @media (min-width: 460px) {
          h3 {
            padding-top: 20px;
          }
          img.content-grid-image,
          img.content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 82%;
            margin-top: 36px;
            margin-bottom: 54px;
          }

          .content-set p {
            max-width: 600px;
          }

          section.copy {
            margin: 0;
          }

          .grid-row-start {
            grid-row-start: 1;
          }
          .section {
            padding-top: 40px;
          }
          #site .headline4 {
            margin-right: 56px;
          }
        }

        @media (max-width: 800px) {
          .hero {
            background: none;
          }
          .content-grid-image-lower {
            margin-top: 46px;
            margin-bottom: 36px;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'WordPress Preventive Care Program - Logical Phase',
      description: 'Complete protection and monitoring for WordPress',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="design">
          <header class="hero hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">WordPress Preventive Care</h1>
                    <h2 class="display3">Meticulous Care for WordPress</h2>
                    <p class="headline4 why-google__intro-text">
                      We take care of maintaining your site so you can focus on your customers.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="preventiveCare"
                        track-metadata-position="banner"
                        >Let's maintain your site</a
                      >
                    </div>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <div class="section section--border">
            <div class="section__spacer">
              <section class="copy">
                <div class="grid--alternate copy__inner copy--60-40 grid-row-start">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image"
                      src="/images/content/care-updates-200x200-opt.svg"
                      alt="WordPress Backups, Updates, Security, Monitoring"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      Security, Updates, Backups and more
                    </h3>
                    <p>
                      Keeping WordPress, themes, and plugins up-to-date can make anyone anxious. But
                      not updating can open up security vulnerabilities and cause malfunctions.
                    </p>
                    <p>
                      With our WordPress Preventive Care program you'll rest easy knowing your site
                      is maticulously maintained and monitored 24-7 by WordPress experts. Our
                      <strong>WordPress Preventive Care Program</strong> includes 12 months of:
                    </p>
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
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="preventiveCare"
                        track-metadata-position="banner"
                        >Let's get started</a
                      >
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="section section--border">
            <div class="section__header text-center grid">
              <div class="grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="headline3" id="features">Logical Phase Features</h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-care', Care);
