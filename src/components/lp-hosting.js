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

class Hosting extends PageViewElement {
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
            background: var(--app-reverse-text-color) url('/images/header/home-page-mobile-opt.svg')
              no-repeat;
            background-size: 394px;
            background-position: 95% 114px;
          }

          h3 {
            padding-top: 20px;
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
                      Managed Hosting for WordPress
                    </h1>
                    <h2 class="display3">
                      Highly available, instantly scalable, secure hosting for WordPress
                    </h2>
                    <p class="headline4 why-google__intro-text">
                      Built on Google Cloud Platform and fully managed by WordPress experts.
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
                      src="/images/content/security-badguy-200x200-opt.svg"
                      alt="Understanding WordPress Security Threats"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3 element-align" id="understanding-sescurity-threats">
                      Understanding Security Threats
                    </h3>
                    <p>
                      What makes WordPress so popular also makes WordPress sites tempting targets
                      for cybercriminals. In fact, WordPress is constantly under assault, from the
                      largest corporate sites to the smallest blogs. The sophistication, number, and
                      range of attacks are rising exponentially, while the purpetrators require less
                      and less knowledge to launch attacks. Common threats include:
                    </p>
                    <ul class="body-checks">
                      <li>Malware and Ransomware Attacks</li>
                      <li>Data Modification Attacks</li>
                      <li>Denial of Service (DDoS)</li>
                      <li>Brute Force Password Attacks</li>
                      <li>Eavesdropping and Theft of Trade Secrets</li>
                      <li>Industrial Sabotage (domestic and international)</li>
                      <li>Hacktivisim</li>
                    </ul>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="Pagespeed"
                        track-metadata-position="banner"
                        >Get expert security advice</a
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
                      src="/images/content/security-response-200x200-opt.svg"
                      alt="WordPress Security Incident Response Team"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="lp-managed-hosting"
                    >
                      Has Your Site Has Been Hacked?
                    </h3>
                    <p>
                      Cyber attacks come in a variety of methods. They can be internal and external
                      in nature, and caused accidentally or purposely. A compromised WordPress site
                      is serious, and needs to be treated as such, but don't panic. We've helped
                      hundreds of site owners who've experienced a security breach and we know how
                      to respond and resolve the situation quickly and professionally.
                    </p>
                    <p>Our <strong>Security Incident Response Team (SIRT)</strong></p>
                    <ul class="body-checks">
                      <li>Gathers all available information</li>
                      <li>Identifies the source of the breach and contains it</li>
                      <li>Uncovers the extent of damages and loss</li>
                      <li>Cleans and hardens affected systems and restores services</li>
                      <li>Mitigates the impact to you and your customers</li>
                      <li>Acts as your liaison with law enforcement as needed</li>
                      <li>Provides full documentation and proactive recommendations</li>
                    </ul>
                    <p>If you think your site's been hacked, don't wait.</p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="security"
                        track-metadata-position="banner"
                        >Security Incident Response</a
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
                      src="/images/content/security-vaccinated-200x200-opt.svg"
                      alt="HyperDefense Security Protection for WordPress"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="lp-highly-available-hosting"
                    >
                      Serious Security for WordPress
                    </h3>
                    <p>
                      We know what motivates an attacker and the strategies they use. We leverage
                      powerful tools in to protect your data and your customers from attacks. Our
                      HyperDefense security program is designed to discover where and how to protect
                      your site, data, and network. We uncover potential security vulnerabilities
                      and investigate threats. You can rest easy knowing our security specialists
                      are monitoring and protecting your applications and data. Our HyperDefense
                      security program is a multi-tiered, proactive, defense in depth service that
                      includes:
                    </p>
                    <ul class="body-checks">
                      <li>A thorough security survey and threat assessment</li>
                      <li>HIPPA and FERPA compliance assessment</li>
                      <li>Web sServer and site security hardening</li>
                      <li>24 hour monitoring and log analysis</li>
                      <li>User access reviews and password strength testing</li>
                      <li>Installation of Wordfence premium for WordPress</li>
                      <li>Additional deep malware and virus scans</li>
                      <li>Intrusion detection and prevention</li>
                      <li>Fake account, spam bot, and comment spam prevention</li>
                    </ul>
                    <p>
                      Protect your organization against loss of revenue, reduce legal liability and
                      serious harm to your reputation. Contact us today for a no obligation
                      consultation.
                    </p>
                    <div class="content-header__link element-align">
                      <a
                        href="/contact/"
                        class="button button--primary content-button element-display"
                        track-type="navigateTo"
                        track-name="security"
                        track-metadata-position="banner"
                        >Security Consultation</a
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
                <h2 class="headline3" id="features">Logical Phase Features</h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-hosting', Hosting);
