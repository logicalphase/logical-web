import { HP_HOST } from './ts-config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { SharedStyles } from './shared-styles';

const cdnHost = unsafeCSS(HP_HOST);

class TSSecurity extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      h3 {
        padding-top: 20px; }

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-security-header.svg') no-repeat;
        background-size: 370px;
        background-position: center top;
      }

      @media (min-width: 460px) {
        h3 {
          padding-top: 20px; 
        }

        .hero {
          background-position: 93%;
        }
      }

      @media (max-width: 800px) {
        .hero {
          background-position: 93% !important;
        }
      }   
    `
    ];
  }  

  render() {
    updateMetadata({
      title: 'Security Solutions - HyperPress',
      description: 'Defense in depth security that protect data and reputations'
    });

    return html`
      <article id="ts-site" class="ts-security">
        <header class="hero">
          <div class="ts-header-wrapper fade-in">
            <h1 class="paper-font-display2 paper-font-light">Security Solutions</h1>
            <h2 class="paper-font-title paper-font-light">Defense in depth security that protect data and reputations.</h2>
            <div class="center-button">
              <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact Security Team</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
          <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main delayed-fade-in">
                <div class="ts-content-grid-box">
                  <figure class="img-right">
                    <img src="https://${cdnHost}/images/content/ts-security-badguy-200x200-opt.svg" alt="Understanding WordPress Security Threats" />
                  </figure>
                  <h3 class="text-headline">Understanding Security Threats</h3>
                  <p>What makes WordPress so popular also makes WordPress sites tempting targets for cybercriminals. In fact, WordPress is constantly under assault, from the largest corporate sites to the smallest blogs. The sophistication, number, and range of attacks are rising exponentially, while the purpetrators require less and less knowledge to launch attacks. Common threats include:</p>
                  <ul class="body-checks">
                    <li>Malware and Ransomware Attacks</li>
                    <li>Data Modification Attacks</li>
                    <li>Denial of Service (DDoS)</li>
                    <li>Brute Force Password Attacks</li>
                    <li>Denial of Service (DDoS) Attacks</li>
                    <li>Eavesdropping and Theft of Trade Secrets</li>
                    <li>Industrial Sabotage (domestic and international)</li>
                    <li>Hacktivisim</li>
                  </ul>
                </div>
                <div class="ts-content-grid-box">
                  <figure class="img-right">
                    <img src="https://${cdnHost}/images/content/ts-security-response-200x200-opt.svg" alt="WordPress Security Incident Response Team" />
                  </figure>
                  <h3 class="text-headline">If You Believe Your WordPress Site Has Been Hacked</h3>
                  <p>Cyber attacks come in a variety of methods. They can be internal and external in nature, and caused accidentally or purposely. A compromised WordPress site is serious, and needs to be treated as such. However, don't panic. We've helped scores of site owners who've been through a security breach, and we know how to respond and resolve the situation quickly and professionally.</p>
                  <p>Our Security Incident Response Team (SIRT):</p>
                  <ul class="body-checks">
                    <li>Gathers all available information</li>
                    <li>Identifies the source of the breach and contains it</li>
                    <li>Uncovers the extent of damages and loss</li>
                    <li>Cleans and hardens affected systems and restores services</li>
                    <li>Mitigates the impact to you and your customers</li>
                    <li>Acts as your liaison with law enforcement as needed</li>
                    <li>Provides full documentation and proactive recommendations</li>
                  </ul>
                  <p>If you think you've suffered a security breach, don't wait. Contact us right away.</p>
                  <a class="button button-secondary-cta shadow-4dp" data-customizer="site-inquiry-form" href="/contact/">Security Incident Response</a>
                </div>
                <div class="ts-content-grid-box">
                  <figure class="img-right">
                    <img src="https://${cdnHost}/images/content/ts-security-vaccinated-200x200-opt.svg" alt="HyperDefense Security Protection for WordPress" />
                  </figure>
                  <h3 class="text-headline">HyperDefense In Depth Security Program</h3>
                  <p>We know what motivates an attacker and the strategies they use. We leverage powerful tools in to protect your data and your customers from attacks. Our HyperDefense security program is designed to discover where and how to protect your site, data, and network. We uncover potential security vulnerabilities and investigate threats. You can rest easy knowing our security specialists are monitoring and protecting your applications and data. Our HyperDefense security program is a multi-tiered, proactive, defense in depth service that includes:</p>
                  <ul class="body-checks">
                    <li>A thorough security survey and threat assessment</li>
                    <li>HIPPA and FERPA compliance assessment</li>
                    <li>Server and site security hardening</li>
                    <li>24 hour monitoring and log analysis</li>
                    <li>User access reviews and password strength testing</li>
                    <li>Installation of Wordfence premium for WordPress</li>
                    <li>Additional deep malware and virus scans</li>
                    <li>Intrusion detection and prevention</li>
                    <li>Fake account, spam bot, and comment spam prevention</li>
                  </ul>
                  <p>Protect your organization against loss of revenue, limit legal liability, and serious harm to your reputation. Contact us today for a no obligation consultation.</p>
                  <a class="button button-secondary-cta shadow-4dp" data-customizer="hyperdefense-inquiry-form" href="/contact/">HyperDefense Security Services</a>
                </div>
              </main>
              <aside class="sidebar">
                <ts-sidebar-nav></ts-sidebar-nav>
              </aside>     
            </div>
          </section>
        </div>
      </article>
    `;
  }
}
window.customElements.define('ts-security', TSSecurity);