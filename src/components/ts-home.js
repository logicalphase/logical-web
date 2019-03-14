import { HP_HOST, CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { TsLayoutStyle } from './ts-style-layout';
import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsGridStyle } from './ts-style-grid';
import { TsTypographyStyle } from './ts-style-typography';
import { TsProductStyle } from './ts-style-products';
import { TsHomePageStyle } from './ts-style-homepage';
import { TsCard } from './ts-style-card';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSHome extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsButtonStyle,
      TsElevationStyle,
      TsGridStyle,
      TsProductStyle,
      TsTypographyStyle,
      TsLayoutStyle,
      TsHomePageStyle,
      TsCard,
      css`
      :host {
        display: block;
        padding: 0px;
      }
      /* Smaller than 460 */

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/bg/wordpress-logo.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }

      h3 {
        padding-top: 20px; }

      a.ts-card-link {
        color: var(--app-primary-color);
        margin-bottom: 4px;
      }

      .ts-card-link span {
          padding: 14px 5px 14px 14px;
          text-align: center;
      }

      .text-uppercase:hover {
        border-bottom: 4px solid var(--app-link-color);
      }

      .text-uppercase {
        border-bottom: 4px solid var(--app-light-text-color);
      }

      @keyframes FadeIn { 
        0% {
          opacity: 0;
          transform: scale(.1);
        }

        85% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      @media (min-width: 460px) {
        .hero {
          background-size: 23%;
          background-position: 82% center;
        }
        .ts-card-link span {
          padding: 14px 5px 14px 14px;
          text-align: left;
      }
        .ts-card-link span {
          padding: 14px 5px 14px 26px;
        }
        a.ts-card-link:hover {
          border-bottom: 3px solid var(--app-link-color);
        }
      }


    `
    ];
  } 
  
  render() {
    updateMetadata({
      title: 'Home - HyperPress',
      description: 'Home page'
    });

    return html`
    <div class="hypersite-main-content clearfix">
      <article id="ts-site" class="ts-home">
        <header class="ts-hero hero">
          <div class="ts-grid ts-grid__no-gap ts-hero__content">
            <div class="ts-grid__col is-12 ts-hero__1up-content is-1__large--offset is-8__large">
              <div class="fade-in content-set">
                <h1 class="ts-headline1">Making a Better WordPress</h1>
                <p>Engaging, instant loading, functionally superior, masters of self-defense.</p>
                <div class="ts-button__set">
                  <a href="/contact/" class="ts-button ts-button--primary" track-type="navigateTo" track-name="home"
                    track-metadata-position="banner">Contact a WordPress Pro</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="ts-home-sections ts-home-v">
          <section class="ts-full-bleed--bg ts-section-customers__container">
              <div class="ts-section-customers ts-section--reversed ts-section--centered">
                <header class="ts-section-header">

                </header>
              </div>
            </section>
            <section>
              <iron-selector selected="[[page]]" attr-for-selected="name" class="main-navigation" role="navigation">
                <div class="ts-grid ts-grid__no-gap">
                  <header class="ts-grid__col is-6 is-4__large ts-section-header ts-section-header--solutions">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Smart Solutions</h1>
                    <h2 class="ts-section-header__heading ts-headline3" id="wordpress-you-need-solutions-you-deserve">Smarter online solutions</h2>
                    <div class="ts-section-header__link">
                      <a href="https://${HP_HOST}/solutions/" class="ts-button ts-button--primary" track-type="navigateTo" track-name="smarterSolutions" track-metadata-eventdetail="body" track-metadata-position="body">Explore all solutions</a>
                    </div>
                  </header>
                  <div class="ts-grid__col is-6 is-4__large">
                    <section class="ts-card ts-card--solution">
                      <header>
                        <h1 class="ts-card__eyebrow ts-eyebrow">PWA Design</h1>
                        <img class="ts-card__icon" src="/images/icons/ts-icon-pwa-62x-62.svg" alt="Progressive web application design">
                        <a class="ts-link ts-card__link ts-card__link-text" href="https://${HP_HOST}/design/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="progressiveWebDesign" track-metadata-position="body">
                          <h2 class="ts-card__heading ts-headline4" id="progressive-design">Progressive Design</h2>
                        </a>
                      </header>
                      <p class="ts-card__body">Transform WordPress into a responsive, instant loading, progressive web application.</p>
                        <div class="ts-card__arrow">
                          <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <title>Arrow</title>
                            <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                            <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          </svg>
                        </div>
                    </section>
                  </div>
                  <div class="ts-grid__col is-6 is-4__large">
                    <section class="ts-card ts-card--solution">
                      <header>
                        <h1 class="ts-card__eyebrow ts-eyebrow">Performance</h1>
                        <img class="ts-card__icon" src="/images/icons/ts-icon-pagespeed-62x62.svg" alt="Pagespeed optimization service">
                        <a class="ts-link ts-card__link ts-card__link-text" href="https://${HP_HOST}/pagespeed/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="workloadMigration" track-metadata-position="body">
                          <h2 class="ts-card__heading ts-headline4" id="pagespeed-optimization">PageSpeed Optimization</h2>
                        </a>
                      </header>
                      <p class="ts-card__body">We supercharge WordPress sites to deliver lightning fast, secure, content to any screen.</p>
                        <div class="ts-card__arrow">
                          <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <title>Arrow</title>
                            <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                            <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          </svg>
                        </div>
                    </section>
                  </div>
                  <div class="ts-grid__col is-6 is-4__large">
                    <section class="ts-card ts-card--solution">
                      <header>
                        <h1 class="ts-card__eyebrow ts-eyebrow">Repairs and Restoration</h1>
                        <img class="ts-card__icon" src="/images/icons/ts-icon-ambulance-62x62.svg" alt="WordPress repair and restoration">
                        <a class="ts-link ts-card__link ts-card__link-text" href="https://${HP_HOST}/emergency/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="emergencyResponse" track-metadata-position="body">
                          <h2 class="ts-card__heading ts-headline4" id="repairs-restoration">Emergency Response</h2>
                        </a>
                      </header>
                      <p class="ts-card__body">Site emergency? Our WordPress experts will have you back up and running in no time.</p>
                        <div class="ts-card__arrow">
                          <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <title>Arrow</title>
                            <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                            <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          </svg>
                        </div>
                    </section>
                  </div>
                  <div class="ts-grid__col is-6 is-4__large">
                    <section class="ts-card ts-card--solution">
                      <header>
                        <h1 class="ts-card__eyebrow ts-eyebrow">Security</h1>
                        <img class="ts-card__icon" src="/images/icons/ts-icon-security-62x62.svg" alt="In depth security program">
                        <a class="ts-link ts-card__link ts-card__link-text" href="https://${HP_HOST}/security/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="securityResponse" track-metadata-position="body">
                          <h2 class="ts-card__heading ts-headline4" id="security-response">Security Response Team</h2>
                        </a>
                      </header>
                      <p class="ts-card__body">We investigate, audit, restore compromised sites, mitigate loss, and prevent attacks.</p>
                        <div class="ts-card__arrow">
                          <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <title>Arrow</title>
                            <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                            <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          </svg>
                        </div>
                    </section>
                  </div>
                  <div class="ts-grid__col is-6 is-4__large">
                    <section class="ts-card ts-card--solution">
                      <header>
                        <h1 class="ts-card__eyebrow ts-eyebrow">Migration Services</h1>
                        <img class="ts-card__icon" src="/images/icons/ts-icon-migrations-62x62.svg" alt="WordPress migration">
                        <a class="ts-link ts-card__link ts-card__link-text" href="https://${HP_HOST}/migrations/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="wordpressRelocation" track-metadata-position="body">
                          <h2 class="ts-card__heading ts-headline4" id="wordpress-relocation">WordPress Relocation</h2>
                        </a>
                      </header>
                      <p class="ts-card__body">Regardless of size, we'll safely and quickly move your WordPress site to it's new home.</p>
                        <div class="ts-card__arrow">
                          <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <title>Arrow</title>
                            <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                            <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          </svg>
                        </div>
                    </section>
                  </div>
              </iron-selector>
            </section>
          </div>
        </div>
      </div>
    </article>
    `;
  }
}
window.customElements.define("ts-home", TSHome);
