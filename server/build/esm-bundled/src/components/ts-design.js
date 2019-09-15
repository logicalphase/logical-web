import{CDN_HOST_URL,unsafeCSS,css,html,PageViewElement,updateMetadata,SharedStyles,TsTypographyStyle,TsLayoutStyle,TsGridStyle,TsCard,TsButtonStyle}from"./ts-app.js";const cdnHost=unsafeCSS(CDN_HOST_URL);class TSDesign extends PageViewElement{static get styles(){return[SharedStyles,TsTypographyStyle,TsLayoutStyle,TsGridStyle,TsCard,TsButtonStyle,css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      .hero {
        background: var(--app-reverse-text-color) url('/images/header/ts-design-header-opt.svg') no-repeat;
        background-size: 380px;
        background-position: 93% 80px;
      }

      @media (min-width: 460px) {

        h3 {
          padding-top: 20px; 
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

      }

      @media (max-width: 800px) {
        .hero {
          background: none;
        }
      }   
      `]}render(){updateMetadata({title:"Progressive Web App Design - HyperPress",description:"We create high-quality Progressive Web Applications using the same tools Google uses"});return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-design">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Progressive Web Application (PWA)</h1>
                    <h2 class="ts-display3">From accessibility to typography</h2>
                    <p class="ts-headline4 ts-why-hyperpress__intro-text">Keep your visitors engaged with attractive, inviting page and article views specifically designed around your brand.</p>
                    <div class="ts-section-header__link">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary" 
                        track-type="navigateTo" 
                        track-name="home"
                        track-metadata-position="banner">Let's build your dream site</a>
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
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid--vertical-center">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="/images/content/ts-pwa-design-200x200-opt.svg" alt="Containerize On Prem Applications" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3" id="engaging-experiences-regardless-screen-size">Engaging Regardless of Screen Size</h3>
                    <p>You've invested a great deal of time and money into creating products or services that amaze your customers. Finally, a WordPress web site worthy of your enterprise and your dreams. HyperPress leverages what's best about WordPress, the editing workflow, and combines it with a beautiful progressive web application (PWA) frontend.</p>
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="design"
                        track-metadata-position="banner">Contact our design team</a>
                    </div> 
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__spacer">
              <section class="ts-copy">
                <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid--vertical-center">
                  <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                    <img class="ts-content-grid-image" src="/images/content/ts-pwa-conversions-200x200-opt.svg" alt="Increased site traffic and conversions" />
                  </div>
                  <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                    <h3 class="ts-headline3" id="hyperpress-increases-traffic-conversions">Increase Traffic and Revenue</h3>
                    <p>We breath life into online vision. We create high-quality Progressive Web Applications using the same tools Google uses to build theirs, including <a href="https://www.polymer-project.org/">Polymer</a>, <a href="https://material.io/">Material Design</a>, and Golang. We leverage <a href="https://wordpress.org">WordPress</a> REST API to build remarkable, reliable, and secure web experiences.</p>
                    <div class="ts-content-header__link ts-element-align">
                      <a 
                        href="/contact/" 
                        class="ts-button ts-button--primary ts-content-button ts-element-display" 
                        track-type="navigateTo" 
                        track-name="design"
                        track-metadata-position="banner">Let's build your dream site</a>
                    </div> 
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="ts-section ts-section--border">
            <div class="ts-section__header ts-text-center ts-grid">
              <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
                <h2 class="ts-headline3" id="features">HyperPress Features</h2>
              </div>
            </div>
            <section class="ts-copy">
              <div class="ts-grid--alternate ts-copy__inner ts-copy--two-column">
                <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Fast loading and reliable</h4>
                  <p>PWAs load instantly even in spotty internet conditions. Users are notified if they lose internet connection while continuing to browse your site with confidence while avoiding lost sales!</p>
                </div>
                <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Smooth and natural</h4>
                  <p>Quick smooth transitions and animations are baked right in to make for a more natural, pleaseing application look and feel. No more janking, confusing view changes </p>
                </div>
                <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Inviting and engaging</h4>
                  <p>A natural, inviting, immersive user experience where users can quickly find what they need and convert interest to action.</p>
                </div>
                <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                  <h4 class="ts-headline4">Installable and always updated</h4>
                  <p>.</p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    `}}window.customElements.define("ts-design",TSDesign);