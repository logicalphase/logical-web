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

class Hosting extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      ButtonStyle,
      ElevationStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */
        .hero {
          background: none;
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
            background: var(--app-reverse-text-color) url('/images/header/hosting-world-map.svg')
              no-repeat;
            background-size: 494px;
            background-position: 95% 84px;
            padding-bottom: 40px;
          }

          h3 {
            padding-top: 0px;
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
        }

        @media (min-width: 800px) {
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
      title: 'Security Solutions - Logical Phase',
      description: 'Defense in depth security that protect data and reputations',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="hosting">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      Mission critical hosting solutions
                    </h1>
                    <h2 class="display3">
                      Great Brands Thrive With Agile Hosting Solutions.
                    </h2>
                    <p class="headline4 why-google__intro-text">
                      Custom built solutions atop Google Cloud Platform meticulously managed by a
                      dedicated Site Reliability Engineer.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="security"
                        track-metadata-position="banner"
                        >Let's Get Started</a
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
                      src="/images/header/home-page-mobile-opt.svg"
                      alt="Understanding WordPress Security Threats"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3 element-align" id="when-cheap-hosting-fails">
                      I've crafted custom hosting solutions for WordPress site owners for more than
                      a decade.
                    </h3>
                    <p>
                      One of the most critical decisions you have to make is
                      <a
                        href="https://logicalphase.com/article/choosing-best-wordpress-hosting-plan/"
                        >who will host your web site</a
                      >. Choose poorly and you'll end up wasting all that time and money you spent
                      building your site. I understand precisely what you'll need to get the most
                      out of your site and how to reach and grow your audience. I thrive on creating
                      and fully managing mission critical hosting that instantly scales when you
                      need it to.
                    </p>
                    <p></p>

                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="Pagespeed"
                        track-metadata-position="banner"
                        >Let's talk hosting</a
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
                <div class="grid--alternate copy__inner copy--60-40">
                  <div
                    class="grid__col copy--flipped grid__col--horizontal-center copy__img is-4 is-8--offset is-7__large--offset grid-row-start"
                  >
                    <img
                      class="content-grid-image-lower"
                      src="/images/content/desktop-cubes-stacked.png"
                      alt="WordPress Security Incident Response Team"
                      height="440"
                      width="299"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3 element-align" id="lp-managed-hosting">
                      Let me help you choose the right hosting for your target audience.
                    </h3>
                    <p>
                      From delivering web pages lightning fast to ultra-secure storage across
                      multiple regions, partnering with Google Cloud Platform opens up access to the
                      same hyperfast, hyperscale, and environmentally responsible services Google
                      itself uses.
                    </p>
                    <ul class="body-checks">
                      <li>
                        Datacenters located across 134 Locations in 200+ Countries and Territories
                      </li>
                      <li>
                        Assigned Site Reliability Engineers who manage every detail of your hosting
                      </li>
                      <li>
                        Artifical intelligence based security and reliability drives our 99.97% SLA
                      </li>
                      <li>
                        Leader in environmental responsibility with 100% renewable energy powered
                        facilities
                      </li>
                    </ul>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="security"
                        track-metadata-position="banner"
                        >Get your free hosting evaluation</a
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
                <h2 class="headline3" id="features"></h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-hosting', Hosting);
