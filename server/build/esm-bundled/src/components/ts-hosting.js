import{CDN_HOST_URL,unsafeCSS,css,html,PageViewElement,updateMetadata,SharedStyles,TsTypographyStyle,TsLayoutStyle,TsGridStyle,TsCard,TsButtonStyle}from"./ts-app.js";const cdnHost=unsafeCSS(CDN_HOST_URL);class TSHosting extends PageViewElement{static get styles(){return[SharedStyles,TsTypographyStyle,TsLayoutStyle,TsGridStyle,TsCard,TsButtonStyle,css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */
      .hero {
        background: none;
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
        .hero {
          background: var(--app-reverse-text-color) url('/images/header/home-page-mobile-opt.svg') no-repeat;
          background-size: 394px;
          background-position: 95% 114px;
        }

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
      }

      @media (min-width: 800px) {

        .ts-content-grid-image-lower {
          margin-top: 46px;
          margin-bottom: 36px;
        }
      }   
      `]}render(){updateMetadata({title:"Security Solutions - Logical Phase",description:"Defense in depth security that protect data and reputations"});return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-hosting">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Managed Hosting for WordPress</h1>
                    <h2 class="ts-display3">Highly available, instantly scalable hosting for WordPress</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">Built on Google Cloud Platform and fully managed by WordPress experts. </p>
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="security"
                        track-metadata-position="banner">Let's Get Started</a>
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
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="/images/content/ts-security-badguy-200x200-opt.svg" alt="Understanding WordPress Security Threats" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3 ts-element-align" id="understanding-sescurity-threats">Understanding Security Threats</h3>
                    <p>What makes WordPress so popular also makes WordPress sites tempting targets for cybercriminals. In fact, WordPress is constantly under assault, from the largest corporate sites to the smallest blogs. The sophistication, number, and range of attacks are rising exponentially, while the purpetrators require less and less knowledge to launch attacks. Common threats include:</p>
                    <ul class="body-checks">
                      <li>Malware and Ransomware Attacks</li>
                      <li>Data Modification Attacks</li>
                      <li>Denial of Service (DDoS)</li>
                      <li>Brute Force Password Attacks</li>
                      <li>Eavesdropping and Theft of Trade Secrets</li>
                      <li>Industrial Sabotage (domestic and international)</li>
                      <li>Hacktivisim</li>
                    </ul> 
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="Pagespeed"
                        track-metadata-position="banner">Get expert security advice</a>
                    </div>                  
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40" >
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image-lower" src="/images/content/ts-security-response-200x200-opt.svg" alt="WordPress Security Incident Response Team" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3 ts-element-align" id="hyperpress-increases-traffic-conversions">Has Your Site Has Been Hacked?</h3>
                    <p>Cyber attacks come in a variety of methods. They can be internal and external in nature, and caused accidentally or purposely. A compromised WordPress site is serious, and needs to be treated as such, but don't panic. We've helped hundreds of site owners who've experienced a security breach and we know how to respond and resolve the situation quickly and professionally.</p>
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
                      <div class="ts-content-header__link ts-element-align">
                        <a 
                          href="/contact/" 
                          class="ts-button ts-button--primary ts-content-button ts-element-display" 
                          track-type="navigateTo" 
                          track-name="security"
                          track-metadata-position="banner">Security Incident Response</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40" >
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image-lower" src="/images/content/ts-security-vaccinated-200x200-opt.svg" alt="HyperDefense Security Protection for WordPress" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3 ts-element-align" id="hyperpress-increases-traffic-conversions">Serious Security for WordPress</h3>
                    <p>We know what motivates an attacker and the strategies they use. We leverage powerful tools in to protect your data and your customers from attacks. Our HyperDefense security program is designed to discover where and how to protect your site, data, and network. We uncover potential security vulnerabilities and investigate threats. You can rest easy knowing our security specialists are monitoring and protecting your applications and data. Our HyperDefense security program is a multi-tiered, proactive, defense in depth service that includes:</p>
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
                    <p>Protect your organization against loss of revenue, reduce legal liability and serious harm to your reputation. Contact us today for a no obligation consultation.</p>
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="security"
                        track-metadata-position="banner">Security Consultation</a>
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
    `}}window.customElements.define("ts-hosting",TSHosting);