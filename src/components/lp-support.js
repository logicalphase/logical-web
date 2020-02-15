import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './style-shared';
import { TypographyStyle } from './style-typography';
import { LayoutStyle } from './style-layout';
import { GridStyle } from './style-grid';
import { Card } from './style-card';

class Support extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      Card,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */

        .gfiframe {
          margin-top: 35px;
          height: 1040px !important;
        }

        h3 {
          padding-top: 20px;
        }

        lp-button > * {
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

        lp-input,
        lp-select,
        lp-textarea {
          width: 100%;
        }

        .hero .content-set {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        h3.heading4 {
          margin-top: 0;
          padding-top: 0;
        }

        @media (min-width: 460px) {
          section {
            margin: 2px 0 0 0;
          }

          .hero .content-set {
            margin: 30px 0 30px 0;
          }

          paper-spinner-lite {
            position: fixed;
            top: calc(50% - 14px);
            left: calc(50% - 14px);
          }

          .hero {
            background: var(--app-reverse-text-color) url('/images/header/care-header-opt.svg')
              no-repeat;
            background-size: 320px;
            background-position: 93% 10px;
          }

          .hero > div {
            min-height: 120px;
          }

          .support-body {
            margin-bottom: 24px;
          }

          .support-wrapper {
            background-color: var(--app-light-text-color);
            border-top: 1px solid var(--app-form-border-color);
          }

          .support-inner {
            max-width: 744px;
            margin: 0 auto;
            padding-top: 30px;
          }

          .support-body h2 {
            margin-bottom: 16px;
          }
          .pad-right-4 {
            padding-right: 32px;
          }

          .main-frame {
            transition: opacity 0.5s;
          }
          .main-frame.waiting {
            opacity: 0.1;
          }
          lp-input,
          lp-select,
          lp-textarea {
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
          .grid--alternate {
            grid-column-gap: 38px;
            grid-template-columns: repeat(12,1fr);
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
          label.select-label {
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
            .grid .is-5__large, .grid--alternate .is-5__large {
              grid-column: span 5 / span 5;
              grid-auto-rows: auto;
            }
            .grid {
              display: block;
              margin-top: 0;
            }
            .grid > section:not(:first-child) {
              margin-left: 0;
            }

            .right {
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
      title: `Logical Phase Customer Support Form`,
      description: `Customer support request form. Get in touch with a WordPress professional.`,
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="support">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">Customer Support</h1>
                    <h2 class="display3">Let's solve the issue</h2>
                    <p class="headline5 why-hyperpress__intro-text">
                      Please fill out this form to discuss your needs with our customer support team. 
                    </p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <section class="support-wrapper delayed-fade-in">
            <div class="grid--alternate copy__inner copy--two-column">
              <div class="grid__col is-1__large--offset copy__text is-6 is-5__large">
                <div state="init">
                  <iframe
                    src="//api.logicalphase.com/gfembed/?f=5"
                    title="Contact form."
                    width="100%"
                    height="1000"
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
              <div class="grid__col copy__text is-6 is-5__large">
                <h3 class="headline4">Control your content</h3>
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
window.customElements.define('lp-support', Support);
