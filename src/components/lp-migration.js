import { CDN_HOST_URL } from "./config";

import { html, css, unsafeCSS } from "lit-element";
import { PageViewElement } from "./page-view-element.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import { SharedStyles } from "./style-shared";
import { TypographyStyle } from "./style-typography";
import { LayoutStyle } from "./style-layout";
import { GridStyle } from "./style-grid";
import { Card } from "./style-card";
import { ButtonStyle } from "./style-button";

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Migrations extends PageViewElement {
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
        background: var(--app-reverse-text-color) url('/images/header/migrations-header-opt.svg') no-repeat;
        background-size: 410px;
        background-position: 90% 60px;
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

        .hero {
          padding-bottom: 24px;
        }

        h3 {
          padding-top: 20px;
        }

        .content-set p {
          max-width: 600px;
        }

        .content-button {
          margin-bottom: 0;
        }

        section.copy {
          margin: 0;
        }

        .section {
          padding-top: 44px;
        }

        .grid-row-start {
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
      title: 'WordPress Relocation - Logical Phase',
      description: 'We\'re experts at relocating WordPress'
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="migrations">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">WordPress Migrations</h1>
                    <h2 class="display3">Expert WordPress Relocation</h2>
                    <p class="headline4 why-hyperpress__intro-text">Fast, safe, no interruption WordPress migrations.</p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
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
          <div class="section section--border">
            <div class="section__spacer">
              <section class="copy">
                <div class="grid--alternate copy__inner copy--60-40 grid-row-start">
                  <div class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start">
                    <img class="content-grid-image-lower" src="/images/content/migrations-van-200x200-opt.svg" alt="Moving Existing Site to WordPress" />
                  </div>
                  <div class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start">
                    <h3 class="headline3 element-align" id="engaging-experiences-regardless-screen-size">Moving WordPress?</h3>
                    <p>We've moved hundreds of WordPress sites to new hosting and know exactly what needs to be done to eliminate downtime, protect your data, and complete all of other tasks needed to make your move a stress free one.</p>
                    <ul class="body-checks">
                      <li>Full backup of current site</li>
                      <li>Transfer site files and data</li>
                      <li>Database updates if applicable</li>
                      <li>SSL certificate and site HTTPS (optional)</li>
                      <li>DNS host record changes</li>
                      <li>Monitor DNS propagation</li>
                      <li>Testing site on your new host</li>
                    </ul>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="siteMigration"
                        track-metadata-position="banner">Let's get a move on!</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="section section--border">
            <div class="section__spacer">
              <section class="copy">
                <div class="grid--alternate copy__inner copy--60-40 grid-row-start">
                  <div class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start">
                    <img class="content-grid-image" src="/images/content/migrations-towp-200x200-opt.svg" alt="Safe, fast, no interruption WordPress migrations" />
                  </div>
                  <div class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start">
                    <h3 class="headline3 element-align" id="site-migrations">Migrating to WordPress</h3>
                    <p>You've heard great things about WordPress, but your site was built using some other software or content management system (CMS), and the idea of trying to move your site into WordPress seems impossibly complex. Don't let that stop you. We've built migration tools that automate importing your content into a brand new WordPress instance, quickly, safely and without error. So, if you're ready to move to WordPress, we can make it happen.</p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="design"
                        track-metadata-position="banner">Migrate to WordPress CMS</a>
                    </div>
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
window.customElements.define("lp-migration", Migrations);
