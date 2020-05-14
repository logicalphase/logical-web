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
import { ElevationStyle } from './style-elevation';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class About extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      ElevationStyle,
      ButtonStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */
        .hero {
          background: var(--app-reverse-text-color)
            url('/images/header/lp-512x512px.svg') no-repeat;
          background-size: 300px;
          background-position: 90% 80px;
        }
        .section {
          padding-top: 0px;
        }
        .section--border {
          margin-top: 0px;
        }
        .copy {
          margin-top: 64px;
        }
        img.content-grid-image,
        img.content-grid-image-lower {
          height: auto;
          width: 53%;
          margin-top: 123px;
          margin-left: 30px;
          padding: 0;
          margin: 0 auto;

        }
        .grid__col--horizontal-center {
          justify-self: normal;
        }
        .element-align {
          margin-top: 40px;
        }
        @media (min-width: 460px) {
          h3 {
            padding-top: 20px;
          }

          img.content-grid-image,
          img.content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 53%;
            margin-top: 123px;
            margin-left: 30px;
            padding: 0;
            transform: rotate(10deg);
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
          .headline4 {
            margin-right: 56px;
          }
          .section--border {
            margin-top: 62px;
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
      title: 'About John Teague - Logical Phase',
      description: 'I use considerable experience and skill sets to create and protect extraordinary WordPress sites.',
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
                      Mission Critical WordPress Services
                    </h1>
                    <h2 class="display3">About Logical Phase</h2>
                    <p class="headline4 why-google__intro-text">
                      Helping a customer achieve success is a great feeling. Building a friendship is even better.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >How can we help?</a
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
                      class="content-grid-image mdc-elevation--z14"
                      src="/images/content/jt-headshot-about-opt.jpg"
                      height="344"
                      width="276"
                      alt="About John and Logical Phase"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      Your On-Call WordPress Engineer.
                    </h3>
                    <p>
                      We've been involved with WordPress and managed hosting for over fourteen years. During that period, we've assembled a lot of knowledge about delivering web pages generated using WordPress. I founded what one client called the "Ferrari of managed WordPress hosting" services. We've created more than three dozen web sites and web applications, the latest you're looking at right now.
                    </p>
                    <p>
                      We get the most joy from solving technical challenges by creating superior solutions that help site owners succeed. From designing attractive, inviting, easy to navigate pages ending with the desired action to creating and managing the fastest, most secure, most reliable hosting services possible .
                    </p>
                    <p>
                      Being the biggest doesn't inspire us. Being the very best does. So, let me show you how we can help you achieve your online goals. We'll make you glad you did.
                    </p>
                    <p>Very best,<br>John</p>
                    <p>John Teague<br>Founder and CTO</p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="emergency"
                        track-metadata-position="banner"
                        >Let's talk about your needs</a
                      >
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
window.customElements.define('lp-about', About);
