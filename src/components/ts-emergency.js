import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { SharedStyles } from './shared-styles';

class TSEmergency extends PageViewElement {
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
          background: var(--app-light-text-color) url(/images/header/ts-emergency-header.svg) no-repeat;
          background-size: cover;
          background-position: center center;
      }

      @media (min-width: 460px) {
        .hero {
          background: var(--app-light-text-color) url(/images/header/ts-emergency-header.svg) no-repeat;
          background-size: contain;
          background-position: 92% center;
        }
        .ts-right {
          margin-bottom: 24px;
        }
      }

      @media (max-width: 800px) {
        .ts-header-wrapper {
          background-position: 95% center !important; }
        .ts-right {
          float: none !important;
          margin: 24px 30px 5px;
        }
      } 
    `
    ];
  }

  render() {
    updateMetadata({
      title: 'WordPress Emergency Response Team - HyperPress',
      description: 'When your site breaks down, we\'ve got you covered'
    });

    return html`
    <article id="ts-site" class="ts-emergency">
      <header class="hero">
        <div class="ts-header-wrapper fade-in">
          <h1 class="paper-font-display2 paper-font-light">WordPress 911</h1>
          <h2 class="paper-font-title paper-font-light">When your site breaks down, we've got you covered</h2>
          <div class="center-button">
            <a href="https://themesurgeons.com/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home"
              track-metadata-position="banner">Contact a WordPress Pro</a>
          </div>
        </div>
      </header>
      <div class="ts-content-wrapper">
        <section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure>
                  <svg class="ts-right" title="Emergency Response for WordPress" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="200" height="200"><defs><path d="M320 0.5C143.54 0.5 0.5 143.54 0.5 320C0.5 496.46 143.54 639.5 320 639.5C496.46 639.5 639.5 496.46 639.5 320C639.5 143.54 496.46 0.5 320 0.5Z" id="hhEA9r9YJ"></path><path d="M521.68 536.66L563.62 489.73C603.16 489.73 625.12 489.73 629.52 489.73C613.54 462.78 583.59 443.81 549.64 443.81C510.7 443.81 476.75 467.77 463.77 502.71C435.02 502.71 204.98 502.71 176.22 502.71C162.25 468.77 129.3 443.81 90.36 443.81C56.41 443.81 26.46 461.78 10.48 489.73C14.88 489.73 36.84 489.73 76.38 489.73L118.32 536.66L76.38 583.59C36.84 583.59 14.88 583.59 10.48 583.59C26.46 610.55 56.41 629.52 90.36 629.52C129.3 629.52 163.24 605.55 176.22 570.61C204.98 570.61 435.02 570.61 463.77 570.61C477.75 604.56 510.7 629.52 549.64 629.52C583.59 629.52 613.54 611.55 629.52 583.59C625.12 583.59 603.16 583.59 563.62 583.59L521.68 536.66Z" id="cUZ4AA7NF"></path><path d="M176.22 502.71C162.25 468.77 129.3 443.81 90.36 443.81C56.41 443.81 26.46 461.78 10.48 489.73C14.88 489.73 36.84 489.73 76.38 489.73L118.32 536.66L76.38 583.59C36.84 583.59 14.88 583.59 10.48 583.59C26.46 610.55 56.41 629.52 90.36 629.52C129.3 629.52 163.25 605.55 176.22 570.61" id="a4iTUzF6zX"></path><path d="M463.78 570.61C477.75 604.56 510.7 629.52 549.64 629.52C583.59 629.52 613.54 611.54 629.52 583.59C625.12 583.59 603.16 583.59 563.62 583.59L521.68 536.66L563.62 489.73C603.16 489.73 625.12 489.73 629.52 489.73C613.54 462.77 583.59 443.8 549.64 443.8C510.7 443.8 476.75 467.77 463.78 502.71" id="b3IoUy6Ade"></path><path d="M234.13 341.97C232.94 318 232.27 304.69 232.14 302.03C244.12 297.04 255.1 290.05 265.09 281.06C267.42 282.32 279.06 288.65 300.03 300.03L330.98 256.1C313.01 239.92 303.03 230.94 301.03 229.14C306.02 217.16 309.02 204.18 310.01 191.2C312.54 190.47 325.19 186.81 347.96 180.22L338.97 127.3C315.01 128.5 301.69 129.16 299.03 129.3C295.04 116.32 288.05 105.33 279.06 95.35C280.33 93.02 286.65 81.37 298.03 60.4L254.1 29.45C237.93 47.43 228.94 57.41 227.14 59.41C215.16 54.42 202.18 51.42 189.2 50.42C188.47 47.89 184.81 35.25 178.22 12.48L125.3 21.47C126.5 45.43 127.17 58.74 127.3 61.41C115.32 66.4 104.34 73.39 94.35 81.37C91.96 80.11 79.97 73.79 58.41 62.4L27.46 106.33C45.43 122.51 55.41 131.49 57.41 133.29C52.42 145.27 49.42 158.25 48.43 171.23C45.9 171.96 33.25 175.63 10.49 182.22L19.47 235.13C43.43 233.94 56.75 233.27 59.41 233.14C64.4 245.12 71.39 256.1 80.38 266.09C79.11 268.42 72.79 280.06 61.41 301.03L105.34 331.98C121.51 314.01 130.5 304.02 132.3 302.03C144.28 307.02 157.26 310.02 170.24 311.01C170.97 313.68 174.63 326.99 181.22 350.95L234.13 341.97Z" id="blrE6gv6P"></path><path d="M180.22 78.38C123.42 78.38 77.38 124.42 77.38 181.22C77.38 238.01 123.42 284.06 180.22 284.06C237.01 284.06 283.06 238.01 283.06 181.22C283.06 124.42 237.01 78.38 180.22 78.38Z" id="a8g1ExqFyR"></path><path d="M180.22 134.29C154.3 134.29 133.29 155.3 133.29 181.22C133.29 207.13 154.3 228.14 180.22 228.14C206.13 228.14 227.14 207.13 227.14 181.22C227.14 155.3 206.13 134.29 180.22 134.29Z" id="bNH8YFMYR"></path><path d="M485.74 390.89C492.33 372.92 495.99 362.93 496.72 360.94C507.71 360.94 517.69 358.94 527.67 355.94C529.01 357.61 535.66 365.93 547.64 380.91L583.59 358.94C575.8 341.57 571.47 331.92 570.61 329.99C577.6 323 583.59 314.01 588.58 305.02C590.64 305.29 600.96 306.62 619.53 309.02L629.51 268.08C611.54 261.49 601.56 257.83 599.56 257.1C599.56 246.12 597.56 236.13 594.57 226.15C596.23 224.82 604.55 218.16 619.53 206.18L597.56 170.24C580.19 178.02 570.54 182.35 568.61 183.22C561.62 176.23 552.64 170.24 543.65 165.24C543.92 163.18 545.25 152.86 547.64 134.29L506.71 124.31C500.12 142.28 496.46 152.27 495.72 154.26C484.74 154.26 474.76 156.26 464.77 159.25C463.44 157.59 456.79 149.27 444.8 134.29L408.86 156.26C416.65 173.63 420.98 183.28 421.84 185.21C414.85 192.2 408.86 201.19 403.87 210.17C401.81 209.91 391.49 208.58 372.92 206.18L362.93 247.12C380.91 253.71 390.89 257.37 392.89 258.1C392.89 269.08 394.88 279.07 397.88 289.05C396.21 290.38 387.89 297.04 372.92 309.02L394.88 344.96C412.26 337.17 421.91 332.85 423.84 331.98C430.83 338.97 439.81 344.96 448.8 349.95C448.53 352.02 447.2 362.33 444.8 380.91L485.74 390.89Z" id="e2gMrbTBdM"></path><path d="M496.22 182.21C454.32 182.21 420.34 216.19 420.34 258.1C420.34 300 454.32 333.98 496.22 333.98C538.13 333.98 572.11 300 572.11 258.1C572.11 216.19 538.13 182.21 496.22 182.21Z" id="a1sjqjQcqC"></path><path d="M495.72 221.15C475.32 221.15 458.78 237.69 458.78 258.1C458.78 278.5 475.32 295.04 495.72 295.04C516.13 295.04 532.67 278.5 532.67 258.1C532.67 237.69 516.13 221.15 495.72 221.15Z" id="a5EEQHE4qH"></path></defs><g><g><g><use xlink:href="#hhEA9r9YJ" opacity="1" fill="#ffca28" fill-opacity="1"></use><g><use xlink:href="#hhEA9r9YJ" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#cUZ4AA7NF" opacity="1" fill="#e1e6e7" fill-opacity="1"></use><g><use xlink:href="#cUZ4AA7NF" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="4" stroke-opacity="1"></use></g></g><g><use xlink:href="#a4iTUzF6zX" opacity="1" fill="#e1e6e7" fill-opacity="1"></use><g><use xlink:href="#a4iTUzF6zX" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="4" stroke-opacity="1"></use></g></g><g><use xlink:href="#b3IoUy6Ade" opacity="1" fill="#e1e6e7" fill-opacity="1"></use><g><use xlink:href="#b3IoUy6Ade" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="4" stroke-opacity="1"></use></g></g><g><use xlink:href="#blrE6gv6P" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#blrE6gv6P" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="5" stroke-opacity="1"></use></g></g><g><use xlink:href="#a8g1ExqFyR" opacity="1" fill="var(--app-primary-color)" fill-opacity="1"></use><g><use xlink:href="#a8g1ExqFyR" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="5" stroke-opacity="1"></use></g></g><g><use xlink:href="#bNH8YFMYR" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#bNH8YFMYR" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="3" stroke-opacity="1"></use></g></g><g><use xlink:href="#e2gMrbTBdM" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#e2gMrbTBdM" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="5" stroke-opacity="1"></use></g></g><g><use xlink:href="#a1sjqjQcqC" opacity="1" fill="#4285f4" fill-opacity="1"></use><g><use xlink:href="#a1sjqjQcqC" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="5" stroke-opacity="1"></use></g></g><g><use xlink:href="#a5EEQHE4qH" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#a5EEQHE4qH" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="3" stroke-opacity="1"></use></g></g></g></g></svg>
                </figure>
                <h3 class="text-headline">A Broken WordPress Site Will Ruin Your Day </h3>
                <p>Errors, bugs, and plugin conflicts can break your site, ruin data, and make life miserable. But we know what makes WordPress tick. We’ve diagnosed and repaired hundreds of WordPress sites like yours, and we’ll have you back up and running in no time. Best of all, We guarantee our work. Our emergency response services include:</p>
                  <ul class="body-checks">
                    <li>Gathering diagnostic information</li>
                    <li>Identifying the cause of the problem</li>
                    <li>Plan of action, including cost</li>
                    <li>Repairing the problem and testing results</li>
                    <li>Post-op report with recommendations</li>
                    <li>Follow up examination</li>
                    <li>All work guaranteed</li>
                  </ul>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/pagespeed-order-form">Contact WordPress 911</a>
              </div>
            </main>
            <aside class="sidebar">
              <div class="nav">
                <div class="sticky">
                  <ul class="right-side-nav l-space-bottom-5">
                    <li>
                      <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Solutions Menu</h3>
                    </li>
                    <li>
                      <a class="pagespeed" track-type="pagespeedOptimization" track-name="web-page" track-metadata-position="sidebar" href="/pagespeed">Pagespeed Optimization</a>
                    </li>
                    <li>
                      <a class="design" track-type="detailResponse" track-name="web-page" track-metadata-position="sidebar" href="/design">Mobile First Design</a>
                    </li>
                    <li>
                      <a style="background:#edf0f2;color:var(--app-primary-color);text-decoration:none;" track-type="emergencyResponse" track-name="web-page" track-metadata-position="sidebar" href="/emergency">Emergency Response</a>
                    </li>
                    <li>
                      <a class="security" track-type="security" track-name="web-page" track-metadata-position="sidebar" href="/security">WordPress Security</a>
                    </li>
                    <li>
                      <a class="migrations" track-type="migrations" track-name="web-page" track-metadata-position="sidebar" href="/migrations">WordPress Migrations</a>
                    </li>
                    <li>
                      <a class="care" track-type="preventiveCare" track-name="web-page" track-metadata-position="sidebar" href="/care">Preventive Care</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>     
          </div>
        </section>
      </div>
    </article>
  `;
  }
}
window.customElements.define('ts-emergency', TSEmergency);