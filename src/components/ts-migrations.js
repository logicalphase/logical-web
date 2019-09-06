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

class TSMigrations extends PageViewElement {
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
        background: var(--app-reverse-text-color) url('/images/header/ts-migrations-header-opt.svg') no-repeat;
        background-size: 380px;
        background-position: 93% 80px;
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
      title: 'WordPress Relocation - HyperPress',
      description: 'We\'re experts at relocating WordPress'
    });

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-migrations">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">WordPress Migrations</h1>
                    <h2 class="ts-display3">Expert WordPress Relocation</h2>
                    <p class="ts-headline4 ts-why-hyperpress__intro-text">Fast, safe, no interruption WordPress migrations.</p>
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="siteMigration"
                        track-metadata-position="banner">Contact a WordPress Pro</a>
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
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image-lower" src="/images/content/ts-migrations-van-200x200-opt.svg" alt="Moving Existing Site to WordPress" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3 ts-element-align" id="engaging-experiences-regardless-screen-size">Moving WordPress?</h3>
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
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="siteMigration"
                        track-metadata-position="banner">Let's get moving</a>
                    </div> 
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid-row-start">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="/images/content/ts-migrations-towp-200x200-opt.svg" alt="Safe, fast, no interruption WordPress migrations" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3 ts-element-align" id="hyperpress-increases-traffic-conversions">Migrating to WordPress</h3>
                    <p>You've heard great things about WordPress, but your site was built using some other software or content mangement system (CMS), and he idea of trying to move your site into WordPress seems impossibly complex. Don't let that stop you. We built migration tools that automate importing your content into a brand new WordPress instance, quickly, safely, and without error. So, if you're ready to move to WordPress, we can make it happen.</p>
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="design"
                        track-metadata-position="banner">Migrate to WordPress CMS</a>
                    </div> 
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
              <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="ts-headline3 ts-element-align" id="features">HyperPress Features</h2>
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
window.customElements.define("ts-migrations", TSMigrations);
