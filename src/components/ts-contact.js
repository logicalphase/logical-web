import { HP_HOST } from './config';

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './ts-style-shared';
import { TsTypographyStyle } from './ts-style-typography';
import { TsLayoutStyle } from './ts-style-layout';
import { TsGridStyle } from './ts-style-grid';
import { TsCard } from './ts-style-card';

class TsContact extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsTypographyStyle,
      TsLayoutStyle,
      TsGridStyle,
      TsCard,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */

        #contactForm, .gfiframe {
          margin-top: 35px;
        }

        h3 {
          padding-top: 20px;
        }

        ts-button > * {
          display: inline-block;
          box-sizing: border-box;
          border: 2px solid var(--app-secondary-color);
          background-color: var(--app-light-text-color);
          font-size: 1rem;
          font-weight: 500;
          color: var(--app-secondary-color);
          margin: 0;
          padding: 8px 44px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 0;
          outline: none;
          -webkit-appearance: none;
          margin-top: 14px;
          width: 100%;
        }

        ts-input,
        ts-select,
        ts-textarea {
          width: 100%;
        }

        @media (min-width: 460px) {
          section {
            margin: 2px 0 0 0;
          }

          .ts-hero .content-set {
            margin: 30px 0 30px 0;
          }

          paper-spinner-lite {
            position: fixed;
            top: calc(50% - 14px);
            left: calc(50% - 14px);
          }

          .hero {
            background: var(--app-reverse-text-color) url('/images/header/ts-care-header-opt.svg')
              no-repeat;
            background-size: 320px;
            background-position: 93% 10px;
          }

          .hero > div {
            min-height: 120px;
          }

          .ts-contact-body {
            margin-bottom: 24px;
          }

          .ts-contact-wrapper {
            background-color: var(--app-light-text-color);
            border-top: 1px solid var(--app-form-border-color);
          }

          .ts-contact-inner {
            max-width: 744px;
            margin: 0 auto;
            padding-top: 30px;
          }

          .ts-contact-body h2 {
            margin-bottom: 16px;
          }

          #ts-site .ts-pad-right-4 {
            padding-right: 32px;
          }

          .main-frame {
            transition: opacity 0.5s;
          }
          .main-frame.waiting {
            opacity: 0.1;
          }
          ts-input,
          ts-select,
          ts-textarea {
            font-size: 1.15rem;
          }
          .billing-address-picker {
            margin: 28px 0;
            height: 20px;
            display: flex;
          }
          .billing-address-picker > label {
            margin-left: 12px;
          }
          .grid {
            margin-top: 40px;
            display: flex;
          }
          .grid > section {
            flex: 1;
          }
          .grid > section:not(:first-child) {
            margin-left: 80px;
          }
          .row {
            display: flex;
            align-items: flex-end;
          }
          .column {
            display: flex;
            flex-direction: column;
          }
          .row > .flex,
          .input-row > * {
            flex: 1;
          }
          .input-row > *:not(:first-child) {
            margin-left: 8px;
          }
          label.ts-select-label {
            line-height: 20px;
            color: #ccc;
          }
          .order-summary-row {
            line-height: 24px;
          }
          .total-row {
            font-weight: 500;
            margin: 30px 0;
          }

          @media (max-width: 767px) {
            .grid {
              display: block;
              margin-top: 0;
            }
            .grid > section:not(:first-child) {
              margin-left: 0;
            }

            .ts-right {
              float: none !important;
              margin: 24px 30px 5px;
            }
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: `Contact a WordPress Expert`,
      description: `WordPress general inquiry form. Get in touch with a WordPress professional.`,
    });

    const requestip = location.hostname;

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-contact">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Contact us</h1>
                    <h2 class="ts-display3">Let's connect</h2>
                    <p class="ts-headline5 ts-why-hyperpress__intro-text">
                      Please fill out this form to discuss your needs. If you are a customer
                      and need technical support, please visit
                      <a id="ts-technical-support" href="https://${HP_HOST}/support/"
                        >Customer Support</a
                      >.
                    </p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <section class="ts-contact-wrapper delayed-fade-in">
            <div class="ts-grid--alternate ts-copy__inner ts-copy--two-column">
              <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                <div state="init">
                  <iframe
                    src="//api.logicalphase.com/gfembed/?f=1"
                    title="Contact form."
                    width="100%"
                    height="1300"
                    frameborder="0"
                    class="gfiframe"
                  >
                  </iframe>
                  <script
                    src="//api.logicalphase.com/wp-content/plugins/gravity-forms-iframe-master/assets/scripts/gfembed.min.js"
                    type="text/javascript"
                  ></script>
                </div>
              </div>
              <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                <h3 class="ts-headline4">Control your content</h3>
                <p>
                  Logical Phase doesn't capitalize on your content like other services. We don't
                  use paywalls or advertisements that's for you to decide. Moving your
                  content is as easy as moving any other self-hosted WordPress site.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    <!-- Show spinner when waiting for the server to repond -->
  `;
  }

  static get properties() {
    return {
      _waiting: { type: Boolean },
      _type: { type: String },
      _response: { type: Object },
    };
  }
}
window.customElements.define('ts-contact', TsContact);
