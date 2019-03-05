import { CDN_HOST_URL } from './ts-config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-sidebar-nav';

import { SharedStyles } from './shared-styles';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSDesign extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
      :host {
        display: block;
        padding: 0px;
      }
      /* Smaller than 460 */

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-design-header-opt.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }
      @media (min-width: 460px) {
        h3 {
        padding-top: 20px; }

        .hero {
          background-position: 97% center;
        }
      }

        @media (max-width: 800px) {
        .hero {
          background-position: 95% center !important;
        }
      }   
      `
    ];
  } 
  
  render() {
    updateMetadata({
      title: 'Progressive Web App Design - HyperPress',
      description: 'We create high-quality Progressive Web Applications using the same tools Google uses'
    });

    return html`  
    <article id="ts-site" class="ts-design">
      <header class="hero">
        <div class="ts-header-wrapper fade-in">
          <h1 class="paper-font-display2 paper-font-light">Progressive Web Application</h1>
          <h2 class="paper-font-title paper-font-light">Amazing user experiences delivered by web browsers.</h2>
          <div class="center-button">
            <a href="/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact our Design Team</a>
          </div>
        </div>
      </header>
      <div class="ts-content-wrapper">
        <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-pwa-design-200x200-opt.svg" alt="Progressive Web Experience" />
                </figure> 
                <h3 class="text-headline">Engaging Experiences Regardless of Screen Size</h3>
                <p class="center">Progressive Web Applications are:</p>
                <ul class="body-checks">
                  <li><span>Reliable</span> - Load instantly even in spotty internet conditions</li>
                  <li><span>Smooth</span> - Quick smooth transitions and animations</li>
                  <li><span>Engaging</span> - A natural, inviting, immersive user experience</li>
                  <li><span>Secure</span> - Protected with SSL HTTPS encryption</li>
                </ul>
              </div>
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-pwa-conversions-200x200-opt.svg" alt="WordPress Progressive Web App Increase Traffic and Conversions" />
                </figure>
                <h3 class="text-headline">HyperPress Increases Traffic and Conversions</h3>
                <p>We breath life into your online vision. We create high-quality Progressive Web Applications using the same tools Google uses to build theirs, including <a href="https://www.polymer-project.org/">Polymer</a>, <a href="https://material.io/">Material Design</a>, and Golang. We also leverage <a href="https://wordpress.org">WordPress</a> REST API to build remarkable, reliable, and secure web experiences.</p>
              </div>
              <div class="ts-content-grid-box">
                <figure class="img-right">
                  <img src="https://${cdnHost}/images/content/ts-design-collaborate-200x200-opt.svg" alt="Collaborative Site Design Process" />
                </figure>
                <h3 class="text-headline">Collaboration: Getting to Know You and Your Goals</h3>
                <p>Before we write a single line of code, we spend as much time as possible getting to know you and your customers. Understanding your products and services, your target market, and your goals provide us with the insights we need to create a unique and extraordinary experience for your users.</p>
                <p>We're fully committed to creating a long term partnership with your success in mind. If you're ready to leave your competition behind, let's talk.</p>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="design-inquiry-form" href="/contact/">Contact our Design Team</a>
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
window.customElements.define('ts-design', TSDesign);