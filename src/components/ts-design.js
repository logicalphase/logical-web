import { CDN_HOST_URL } from "./config";

import { html, css, unsafeCSS } from "lit-element";
import { PageViewElement } from "./page-view-element.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import "./ts-sidebar-nav";

import { TsLayoutStyle } from "./ts-style-layout";
import { TsButtonStyle } from "./ts-style-button";
import { TsGridStyle } from "./ts-style-grid";
import { TsCard } from "./ts-style-card";
import { SharedStyles } from "./ts-style-shared";
import { TsTypographyStyle } from "./ts-style-typography";

const cdnHost = unsafeCSS(CDN_HOST_URL);
class TSDesign extends PageViewElement {
  static get styles() {
    return [
      TsButtonStyle,
      TsGridStyle,
      TsLayoutStyle,
      TsCard,
      SharedStyles,
      TsTypographyStyle,
      css`
      :host {
        display: block;
        padding: 0px;
      }
      /* Smaller than 460 */

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-design-header-opt.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }
      @media (min-width: 460px) {
        h3 {
        padding-top: 20px; }

        .hero {
          background-position: 97% center;
        }
        .solution-body-image {
          max-width: 356px;
          height: auto;
        }
        section.ts-copy {
          margin: 0;
        }
      }

        @media (max-width: 800px) {
        .hero {
          background-position: 95% center !important;
        }
      }   
      `
    ];
  }

  render() {
    updateMetadata({
      title: "Progressive Web App Design - HyperPress",
      description:
        "We create high-quality Progressive Web Applications using the same tools Google uses"
    });

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid ts-grid__no-gap ts-hero__content fade-in">
              <div class="ts-grid__col is-12 ts-hero__1up-content is-1__large--offset is-8__large">
                <div class="content-set">
                  <h1 class="ts-headline1">Progressive Web Design for WordPress</h1>
                  <p>Amazing user experiences delivered by web browsers.</p>
                  <div class="ts-button__set">
                    <a href="/contact/" class="ts-button ts-button--primary">Contact Design Team</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid--vertical-center">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset" style="grid-row-start: 1;">
                    <img src="/images/content/ts-pwa-design-200x200-opt.svg" srcset="/images/content/ts-pwa-design-200x200-opt.svg 2x" alt="Containerize On Prem Applications" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large" style="grid-row-start: 1;">
                    <h3 class="ts-headline3" id="containerize-on-premises-applications-and-be-ts-ready">Engaging Experiences Regardless of Screen Size</h3>
                    <p>You've invested a great deal of time and money into creating products or services that amaze your customers. Finally, a WordPress web site worthy of your enterprise and your dreams. We leverage what's best about WordPress and combine it with a true progressive web application (PWA) frontend.</p>
                    <p class="center">Progressive Web Applications are:</p>
                    <ul class="body-checks">
                      <li><span>Reliable</span> - Load instantly even in spotty internet conditions</li>
                      <li><span>Smooth</span> - Quick smooth transitions and animations</li>
                      <li><span>Engaging</span> - A natural, inviting, immersive user experience</li>
                      <li><span>Secure</span> - Protected with SSL HTTPS encryption</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
            <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
            <h2 class="ts-headline3" id="features">Progressive Web Applications Features</h2>
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
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid--vertical-center">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset" style="grid-row-start: 1;">
                    <img src="/images/content/ts-pwa-design-200x200-opt.svg" srcset="/images/content/ts-pwa-design-200x200-opt.svg 2x" alt="Containerize On Prem Applications" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large" style="grid-row-start: 1;">
                    <h3 class="ts-headline3" id="containerize-on-premises-applications-and-be-ts-ready">Engaging Experiences Regardless of Screen Size</h3>
                    <p>You've invested a great deal of time and money into creating products or services that amaze your customers. Finally, a WordPress web site worthy of your enterprise and your dreams. We leverage what's best about WordPress and combine it with a true progressive web application (PWA) frontend.</p>
                    <p class="center">Progressive Web Applications are:</p>
                    <ul class="body-checks">
                      <li><span>Reliable</span> - Load instantly even in spotty internet conditions</li>
                      <li><span>Smooth</span> - Quick smooth transitions and animations</li>
                      <li><span>Engaging</span> - A natural, inviting, immersive user experience</li>
                      <li><span>Secure</span> - Protected with SSL HTTPS encryption</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define("ts-design", TSDesign);
