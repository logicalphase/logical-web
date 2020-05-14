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

class Design extends PageViewElement {
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
          background: var(--app-reverse-text-color) url('/images/header/design-header-opt.svg')
            no-repeat;
          background-size: 380px;
          background-position: 93% 80px;
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
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'Progressive Web App Design - Logical Phase',
      description:
        'We create high-quality Progressive Web Applications using the same tools Google uses',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="design">
          <header class="hero hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      Progressive Web Application (PWA)
                    </h1>
                    <h2 class="display3">LitPress: Frontends Created With Web Components</h2>
                    <p class="headline4 why-hyperpress__intro-text">
                      Keep your visitors engaged with attractive, fast loading, inviting page and article views
                      specifically designed around your brand.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="home"
                        track-metadata-position="banner"
                        >Let's build your dream site</a
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
                <div class="grid--alternate copy__inner copy--60-40 grid--vertical-center">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image"
                      src="/images/content/pwa-design-200x200-opt.svg"
                      alt="Containerize On Prem Applications"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3" id="engaging-experiences-regardless-screen-size">
                      Engaging Regardless of Screen Size
                    </h3>
                    <p>
                      You've invested a great deal of time and money into creating products or
                      services that amaze your customers. Finally, a WordPress web site worthy of
                      your enterprise and your dreams. LitPress leverages what's best about
                      WordPress, the editing workflow, and combines it with a beautiful progressive
                      web application (PWA) frontend.
                    </p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="design"
                        track-metadata-position="banner"
                        >Let's talk about design</a
                      >
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="section section--border">
            <div class="section__spacer">
              <section class="copy">
                <div class="grid--alternate copy__inner copy--60-40 grid--vertical-center">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image"
                      src="/images/content/pwa-conversions-200x200-opt.svg"
                      alt="Increased site traffic and conversions"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3" id="hyperpress-increases-traffic-conversions">
                      Increase Traffic and Revenue
                    </h3>
                    <p>
                      Breath life into your online vision. We create high-quality Progressive Web
                      Applications using the same exact tools Google uses to build theirs, including
                      <a href="https://www.polymer-project.org/">Polymer</a>,
                      <a href="https://material.io/">Material Design</a>, and Golang. We leverage
                      <a href="https://wordpress.org">WordPress</a> REST API to build remarkable,
                      reliable, and secure web experiences.
                    </p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="design"
                        track-metadata-position="banner"
                        >Let's build your dream site</a
                      >
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="section">
            <div class="section__header text-center grid">
              <div class="grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="headline3" id="features">LitPress Features</h2>
              </div>
            </div>
            <section class="copy">
              <div class="grid--alternate copy__inner copy--two-column">
                <div class="grid__col is-1__large--offset copy__text is-6 is-5__large">
                  <h3 class="headline4">WordPress Gutenberg goodness</h3>
                  <p>
                    The latest WordPress backend dashboard streamlined for productive editing and
                    publishing. Focus on great writing using familiar writing and content management
                    tools.
                  </p>
                </div>
                <div class="grid__col copy__text is-6 is-5__large">
                  <h3 class="headline4">Control your content</h3>
                  <p>
                    Logical Phase doesn't capitalize on your content like other services. We don't
                    use paywalls or advertisements. That's for you to decide. Moving your content is
                    as easy as moving any other self-hosted WordPress site.
                  </p>
                </div>
                <div class="grid__col is-1__large--offset copy__text is-6 is-5__large">
                  <h3 class="headline4">Progressive Web Application</h3>
                  <p>
                    No more theme mess. Just our beautiful PWA frontend, built with Google
                    LitElement, Material Design, and web components fully decoupled from WordPress.
                  </p>
                </div>
                <div class="grid__col copy__text is-6 is-5__large">
                  <h3 class="headline4">Smooth and natural</h3>
                  <p>
                    Quick smooth transitions and animations are baked right in to make for a more
                    natural, pleasing application look and feel. No more janking, confusing view
                    changes
                  </p>
                </div>
                <div class="grid__col is-1__large--offset copy__text is-6 is-5__large">
                  <h3 class="headline4">Installable and always up-to-date</h3>
                  <p>
                    Users can optionally install your Logical Phase PWA just like any native
                    application. Best of all, PWAs don't take up any storage memory and they're
                    updated to the latest version without any user effort.
                  </p>
                </div>
                <div class="grid__col copy__text is-6 is-5__large">
                  <h3 class="headline4">Fast loading and reliable</h3>
                  <p>
                    Logical Phase PWAs load instantly even in spotty internet conditions. Your
                    readers can continue to read your posts offline uninterrupted.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-design', Design);
