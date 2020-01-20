import { CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './ts-style-shared';
import { TsTypographyStyle } from './ts-style-typography';
import { TsLayoutStyle } from './ts-style-layout';
import { TsGridStyle } from './ts-style-grid';
import { TsCard } from './ts-style-card';
import { TsButtonStyle } from './ts-style-button';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TsEmergency extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsTypographyStyle,
      TsLayoutStyle,
      TsGridStyle,
      TsCard,
      TsButtonStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */
        .hero {
          background: var(--app-reverse-text-color)
            url('/images/header/ts-emergency-header-opt.svg') no-repeat;
          background-size: 464px;
          background-position: 93% 10px;
        }
        .ts-section {
          padding-top: 0px;
        }
        img.ts-content-grid-image,
        img.ts-content-grid-image-lower {
          height: auto;
          max-width: 70%;
          width: 100%;
          margin: 0 auto;
        }
        .ts-grid__col--horizontal-center {
          justify-self: normal;
        }
        @media (min-width: 460px) {
          h3 {
            padding-top: 20px;
          }
          img.ts-content-grid-image,
          img.ts-content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 82%;
            margin-top: 36px;
            margin-bottom: 54px;
          }

          .content-set p {
            max-width: 600px;
          }

          section.ts-copy {
            margin: 0;
          }

          .ts-grid-row-start {
            grid-row-start: 1;
          }
          .ts-section {
            padding-top: 40px;
          }
          #ts-site .ts-headline4 {
            margin-right: 56px;
          }
        }

        @media (max-width: 800px) {
          .hero {
            background: none;
          }
          .ts-content-grid-image-lower {
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
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">
                      WordPress repair and restoration
                    </h1>
                    <h2 class="ts-display3">WP Emergency Response Desk</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">
                      When something goes wrong we make it right.
                    </p>
                    <div class="ts-section-header__link">
                      <a
                        href="/contact/"
                        class="ts-button ts-button--primary"
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
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid-row-start">
                  <div
                    class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start"
                  >
                    <img
                      class="ts-content-grid-image"
                      src="/images/content/ts-emergency-tools-200x200-opt.svg"
                      alt="WordPress Emergency Repair and Restoration Services"
                    />
                  </div>
                  <div
                    class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start"
                  >
                    <h3
                      class="ts-headline3 ts-element-align"
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
                    <div class="ts-content-header__link ts-element-align">
                      <a
                        href="/contact/"
                        class="ts-button ts-button--primary ts-content-button ts-element-display"
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
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
              <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="ts-headline3" id="features">Logical Phase Features</h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('ts-emergency', TsEmergency);
