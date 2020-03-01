import { CDN_HOST_URL, CDN_BUCKET_NAME } from './config';

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

class Security extends PageViewElement {
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
            background: var(--app-reverse-text-color) url('/images/header/security-header-opt.svg')
              no-repeat;
            background-size: 354px;
            background-position: 95% 90px;
          }

          h3 {
            padding-top: 20px;
          }
          img.content-grid-image,
          img.content-grid-image-lower {
            height: auto;
            max-width: 100%;
            width: 82%;
          }

          .content-set p {
            max-width: 580px;
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
        }
        @media (min-width: 1401px) {
          .hero {
            background: var(--app-reverse-text-color) url('/images/header/security-header-opt.svg')
              no-repeat;
            background-size: 354px;
            background-position: 95% 40px;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'WordPress PageSpeed Optimization Service - Logical Phase',
      description: 'We make slow WordPress lightning fast WordPress. Guaranteed',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="security">
          <header class="hero">
            <div class="grid">
              <div class="grid__column is-7 is-6__large is-1__large--offset">
                <header class="grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="section-header__eyebrow eyebrow">
                      Logical Security Solutions
                    </h1>
                    <h2 class="display3">Incident Response and Proactive Defense</h2>
                    <p class="headline4 why-google__intro-text">
                      Hacked site restoration and Defense in Depth security protection for your
                      WordPress site.
                    </p>
                    <div class="section-header__link">
                      <a
                        href="/contact/"
                        class="button button--primary"
                        track-type="navigateTo"
                        track-name="pageSpeed"
                        track-metadata-position="banner"
                        >Let's Talk Security</a
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
                      src="https://logicalphase.com/images/content/security-badguy-200x200-opt.svg"
                      alt="Understanding WordPress Security Threats"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3 element-align" id="security-challenges">
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
                      class="content-grid-image-lower extra-margin"
                      src="https://logicalphase.com/images/content/security-response-200x200-opt.svg"
                      alt="WordPress Security Incident Response"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3
                      class="headline3 element-align"
                      id="hyperpress-increases-traffic-conversions"
                    >
                     Think Your Site Has Been Hacked?
                    </h3>
                    <p>
                      Cyber attacks come in a variety of methods. They can be internal and external
                      in nature, and caused accidentally or purposely. A compromised WordPress site
                      is serious, and needs to be treated as such. But don't panic. I've helped
                      scores of site owners recover from security breaches. 
                    </p>
                    <p>Our <strong>Security Incident Response</strong></p>
                    <ul class="body-checks">
                      <li>Gather all available information</li>
                      <li>Identify the source of the breach and contains it</li>
                      <li>Uncover the extent of damages and loss</li>
                      <li>Clean and harden affected systems and restore services</li>
                      <li>Mitigate the impact to you and your customers</li>
                      <li>Act as your liaison with law enforcement as needed</li>
                      <li>Provide full documentation and proactive recommendations</li>
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
                      class="content-grid-image-lower extra-margin"
                      src="https://logicalphase.com/images/content/security-vaccinated-200x200-opt.svg"
                      alt="HyperDefense Security Protection for WordPress"
                    />
                  </div>
                  <div
                    class="grid__col is-1__large--offset copy__text is-7 is-6__large grid-row-start"
                  >
                    <h3 class="headline3 element-align" id="security-defense">
                      HyperDefense - Serious Security for WordPress
                    </h3>
                    <p>
                      I understand what motivates an attacker, and the strategies they use to launch their
                      attacks. Leveraging powerful tools that protect data against unauthorized
                      internal and external access and discovery resulted in PhasedDefense.
                    </p>
                    <p>
                      HyperDefense is a multi-tiered, proactive, Defense in Depth service. Using
                      artifical intelligence, it gathers and analyzes
                      tarabytes of threat data from hundreds of sources to develop organized threat
                      profiles. These profiles teach the firewall and other defense applications to
                      react faster, with fewer false positives. 
                    </p>
                    <p> You can rest easy knowing your site is being
                      closely monitored and protected. HyperDefense also includes:
                    </p>
                    <ul class="body-checks">
                      <li>A thorough security survey and threat assessment</li>
                      <li>HIPPA and FERPA compliance assessment</li>
                      <li>Web server and site security hardening</li>
                      <li>24 hour monitoring and log analysis</li>
                      <li>User access reviews and password strength testing</li>
                      <li>Installation of Wordfence premium for WordPress</li>
                      <li>Additional deep malware and virus scans</li>
                      <li>Intrusion detection and prevention</li>
                      <li>Fake account, spam bot, and comment spam prevention</li>
                      <li>Multifactor factor access control</li>
                    </ul>
                    <p>
                      Protect your organization against loss of revenue, reduce legal liability and
                      serious harm to your reputation. Contact me today for a no obligation
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
          <div class="section section--border"></div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-security', Security);
