import { CDN_HOST_URL } from "./config";

import { html, css, unsafeCSS } from "lit-element";
import { PageViewElement } from "./page-view-element.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import "./ts-sidebar-nav";

import { SharedStyles } from "./ts-style-shared";
import { TsTypographyStyle } from "./ts-style-typography";
import { TsLayoutStyle } from "./ts-style-layout";
import { TsGridStyle } from "./ts-style-grid";
import { TsCard } from "./ts-style-card";
import { TsButtonStyle } from "./ts-style-button";

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSEmergency extends PageViewElement {
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
        background: var(--app-reverse-text-color) url('/images/header/ts-emergency-header-opt.svg') no-repeat;
        background-size: 480px;
        background-position: 93% 34px;
      }


      @media (min-width: 460px) {

        h3 {
          padding-top: 20px; 
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
      
        path {
        stroke-width: 2;
        }

        .first-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 3s linear infinite;
          animation-direction: linear;
        }

        .second-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 5s linear infinite;
        }

        .third-line {
          stroke-dasharray: 1200 30;
          stroke-dashoffset: 2700;
          animation: draw 7s linear infinite;
        }

        @keyframes draw {
          from {
            stroke-dashoffset: 0
          }
        }
      }

      @media (max-width: 800px) {
        .hero {
          background: none;
        }
      }   
      `
    ];
  }

  render() {
    updateMetadata({
      title: "Site Emergency Response Team - Logical Phase",
      description:
        "We fix WordPress. Guaranteed."
    });

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">WordPress repair and restoration</h1>
                    <h2 class="ts-display3">WP Emergency Response Desk</h2>
                    <p class="ts-headline4 ts-why-hyperpress__intro-text">When something goes wrong we make it right.</p>
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="emergency"
                        track-metadata-position="header">Let's get it fixed</a>
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
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="/images/content/ts-emergency-tools-200x200-opt.svg" alt="Containerize On Prem Applications" />
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="emergency"
                        track-metadata-position="content">Contact a WordPress expert</a>
                    </div>
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ">
                    <h3 class="ts-headline3" id="engaging-experiences-regardless-screen-size">If it's WordPress we can fix it.</h3>
                    <p>Even the best WordPress sites can suffer unexpected errors and outages. Our <strong>Site Emergency Response Team (S.E.R.T.)</strong> knows how to diagnose and restore your site quickly, and protect it with right solutions. We’ve repaired and restored hundreds of WordPress sites like yours, and we’ll have you back up and running in no time. Best of all, We guarantee our work. Our emergency response services include:</p>
                    <ul class="body-checks">
                    <li>Gathering diagnostic information</li>
                    <li>Identifying the cause of the problem</li>
                    <li>Plan of action, including cost</li>
                    <li>Repairing the problem and testing results</li>
                    <li>Post-op report with recommendations</li>
                    <li>Follow up examination</li>
                    <li>All work guaranteed</li>
                  </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
              <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="ts-headline3" id="features">HyperPress Features</h2>
              </div>
            </div>
            <section class="ts-copy">
              <div class="ts-grid--alternate ts-copy__inner ts-copy--two-column">
                <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Fast loading and reliable</h4>
                  <p>PWAs load instantly even in spotty internet conditions. Users are notified if they lose internet connection while continuing to browse your site with confidence while avoiding lost sales!</p>
                </div>
                <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Smooth and natural</h4>
                  <p>Quick smooth transitions and animations are baked right in to make for a more natural, pleaseing application look and feel. No more janking, confusing view changes </p>
                </div>
                <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Inviting and engaging</h4>
                  <p>A natural, inviting, immersive user experience where users can quickly find what they need and convert interest to action.</p>
                </div>
                <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Installable and always updated</h4>
                  <p>.</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define("ts-emergency", TSEmergency);
