import {
  CDN_HOST_URL,
  unsafeCSS,
  css,
  html,
  PageViewElement,
  updateMetadata,
  SharedStyles,
  TsTypographyStyle,
  TsLayoutStyle,
  TsGridStyle,
  TsCard,
  TsButtonStyle,
} from './ts-app.js';
const cdnHost = unsafeCSS(CDN_HOST_URL);
class TSCare extends PageViewElement {
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
          background: var(--app-reverse-text-color) url('/images/header/ts-care-header-opt.svg')
            no-repeat;
          background-size: 424px;
          background-position: 93% 110px;
        }
        .ts-section {
          padding-top: 0px;
        }
        img.ts-content-grid-image,
        img.ts-content-grid-image-lower {
          height: auto;
          max-width: 100%;
          width: 100%;
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
      title: 'WordPress Preventive Care Program - Logical Phase',
      description: 'Complete protection and monitoring for WordPress',
    });
    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">WordPress Preventive Care</h1>
                    <h2 class="ts-display3">Meticulous Care for WordPress</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">
                      We take care of maintaining your site so you can focus on your customers.
                    </p>
                    <div class="ts-section-header__link">
                      <a
                        href="/contact/"
                        class="ts-button ts-button--primary"
                        track-type="navigateTo"
                        track-name="preventiveCare"
                        track-metadata-position="banner"
                        >Let's maintain your site</a
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
                      src="/images/content/ts-care-updates-200x200-opt.svg"
                      alt="WordPress Backups, Updates, Security, Monitoring"
                    />
                  </div>
                  <div
                    class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start"
                  >
                    <h3
                      class="ts-headline3 ts-element-align"
                      id="engaging-experiences-regardless-screen-size"
                    >
                      Security, Updates, Backups and more
                    </h3>
                    <p>
                      Keeping WordPress, themes, and plugins up-to-date can make anyone anxious. But
                      not updating can open up security vulnerabilities and cause malfunctions.
                    </p>
                    <p>
                      With our WordPress Preventive Care program you'll rest easy knowing your site
                      is maticulously maintained and monitored 24-7 by WordPress experts. Our
                      <strong>WordPress Preventive Care Program</strong> includes 12 months of:
                    </p>
                    <ul class="body-checks">
                      <li>Daily encrypted backups of site files and data</li>
                      <li>Backup stored on our encrypted storage</li>
                      <li>Backup stored on your cloud provider*</li>
                      <li>Pretested updates for WordPress core</li>
                      <li>Pretested updates for installed plugins</li>
                      <li>Pretested updates for installed themes</li>
                      <li>Updates for premium themes and plugins**</li>
                      <li>24 hour site health and security monitoring</li>
                      <li>Advanced security and spam protection</li>
                      <li>No contract, optional annual renewal</li>
                    </ul>
                    <div class="ts-content-header__link ts-element-align">
                      <a
                        href="/contact/"
                        class="ts-button ts-button--primary ts-content-button ts-element-display"
                        track-type="navigateTo"
                        track-name="preventiveCare"
                        track-metadata-position="banner"
                        >Let's get started</a
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
window.customElements.define('ts-care', TSCare);
