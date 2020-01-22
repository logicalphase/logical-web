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

class Emergency extends PageViewElement {
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
          background: var(--app-reverse-text-color)
            url('/images/header/emergency-header-opt.svg') no-repeat;
          background-size: 464px;
          background-position: 93% 10px;
        }
        .section {
          padding-top: 0px;
        }
        img.content-grid-image,
        img.content-grid-image-lower {
          height: auto;
          max-width: 70%;
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
      title: 'Site Emergency Response Team - Logical Phase',
      description: 'We fix WordPress. Guaranteed.',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="design">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      WordPress repair and restoration
                    </h1>
                    <h2 class="display3">WP Emergency Response Desk</h2>
                    <p class="headline4 why-google__intro-text">
                      When something goes wrong we make it right.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >Let's get it fixed</a
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
                      src="/images/content/emergency-tools-200x200-opt.svg"
                      alt="WordPress Emergency Repair and Restoration Services"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      If it's WordPress we can repair it.
                    </h3>
                    <p>
                      Even the best WordPress sites can suffer unexpected errors and outages. Our
                      <strong>Site Emergency Response Team (S.E.R.T.)</strong> knows how to diagnose
                      and restore your site quickly, and protect it with right solutions. We’ve
                      repaired and restored hundreds of WordPress sites like yours, and we’ll have
                      you back up and running in no time. Best of all, We guarantee our work. Our
                      emergency response services include:
                    </p>
                    <ul class="body-checks">
                      <li>Gathering diagnostic information</li>
                      <li>Identifying the cause of the problem</li>
                      <li>Plan of action, including cost</li>
                      <li>Repairing the problem and testing results</li>
                      <li>Post-op report with recommendations</li>
                      <li>Follow up examination</li>
                      <li>All work guaranteed</li>
                    </ul>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >Contact a WordPress expert</a
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
window.customElements.define('lp-emergency', Emergency);
