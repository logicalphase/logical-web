import { html,render } from 'lit-html/lit-html.js';
import { repeat } from 'lit-html/lib/repeat.js';
import { until } from 'lit-html/lib/until.js';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';
import { formatDistance } from 'date-fns/esm';
import {
  Calendar, 
  GooglePlus,
  Twitter,
  Facebook,
  Linkedin
 } from './ts-icons.js';

class TSBlog extends PageViewElement {
  
  _render(props) {
    return html `
      ${SharedStyles}
        <style>
        :host {
          display: block;
          padding: 0px;
          h1 {
            margin: 0 0 5px -3px;
            color: #77909c;
          }
          h2 {
            margin-bottom: 40px;
          }
          ul {
            margin-bottom:24px;
          }
        }
        
        /* Smaller than 460 */

        .ts-blog .hero {
          background: none; 
          padding: 34px;
          text-align: center; }

        h1.paper-font-display2 {
          font-size: 42px;
          line-height: 44px;
          padding-right: 0px; }
            
        h2.paper-font-title {
          font-size: 22px;
          white-space: normal;
          padding-right: 0px; }

        h3 {
          padding-top: 20px; }

        .columns {
          max-width: 987px;
          margin: 0 auto;
          padding-top: 34px; }

        .ts-content-grid-box {
          max-width: 100%;
        }

        .ts-content-grid-box p {
          max-width: 620px;
        }

        .ts-read-more {
          padding: 13px 28px;
          background-color: #fff;
        }

        .ts-read-more .social_container {
          float: right;
          padding: 0px;
        }

        .social-icon {
          margin-left:5px;
          fill:  #888;
        }

        .gplus-icon:hover {
          fill:  #db4437;
        }
        .blogger-icon:hover {
          fill: #fb8f3d;
        }
        .twitter-icon:hover {
          fill: #1da1f2;
        }
        .facebook-icon:hover {
          fill: #3b5998;
        }
        .linkedin-icon:hover {
          fill:  #007bb5;
        }

        .ts-blog-meta-calendar svg{
          vertical-align: middle;
        }

        #axis:hover .slide-left {
          transform: translate(-350px, 0);
          -webkit-transform: translate(-350px, 0);
          /** Safari & Chrome **/
          -o-transform: translate(-350px, 0);
          /** Opera **/
          -moz-transform: translate(-350px, 0);
          /** Firefox **/
        }

        .text-uppercase {
          border-top: 1px solid #e4e4e4;
          display: block;
          padding: 16px 28px;
        }

        #ts-site.ts-blog {
          background: #ffffff url('/images/bg/wordpress-logo.svg') no-repeat;
          background-size: 50%;
          background-position: 110% -80px;
          background-attachment: scroll;
        }

        #ts-site.ts-blog .hero {
          padding: 14px;
        }

        #ts-site.ts-blog .hero>div {
          padding: 44px 20px 0 24px;
        }

        #ts-site.home .hero {
          padding: 20px 64px 30px 96px;
        }

        .ts-grid-wrapper-auto-fill {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          justify-items: left;
        }

        .ts-blog-list-item {
          margin-bottom: 24px;
        }

        .flex-hover-card {
          width: 100%;
        }
        
        .inner {
          padding: 20px 28px 0;
          min-height:10px;
          border-bottom: 1px solid #e4e4e4;
        }

        .small-print {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 14px !important;
          font-weight: 400 !important;
          padding-left: 0px;
          line-height: 14px;
        }

        .sidebar {
          background-color: #fff;
          width: 210px;
          margin-left: 34px;
          margin-top: 5px;
        }

        #ts-site .nav li h3 {
          color: #4a5960;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0 16px;
          padding-bottom: 0;
          padding-left: 20px;
        }

        #ts-site .nav li {
          margin-right: 17px;
        }

        ul.right-side-nav {
          list-style: none;
          padding-left: 0px;
        }

        #ts-site .nav li a {
          padding-left: 20px;
        }

        #resource_loader {
          margin-top: -80px;
        }

        .loader-wrapper {
          text-align: center;
        }

        .collapse-content {
          padding: 15px;
          border: 1px solid #dedede;
        }

        paper-radio-group {
          margin: 0px 0px 0px 24px;
        }

        paper-checkbox {
          display: block;
          margin-bottom: 4px;
          --paper-checkbox-label-color: white;
          --paper-checkbox-unchecked-color: white;
        }

        paper-icon-button {
          color: var(--paper-grey-600);
        }

        paper-icon-button.white {
          color: white !important;
        }

        paper-spinner {
          margin-right: 10px;
          height: 20px;
          width: 20px;
          /* Make the spinner align vertically with the loading text. */
          top: 4px;
        }

        paper-fab.label {
          font-size: 20px;
        }

        paper-fab.purple {
          --paper-fab-background: var(--paper-purple-300);
          --paper-fab-keyboard-focus-background: var(--paper-purple-500);
          float: right;
        }

        @media (min-width: 460px) {
          #ts-site.ts-blog {
            background: #fff url(/images/header/ts-design-header.svg) no-repeat;
            background-size: 35%;
            background-position: 100% 90px;
            background-attachment: fixed;
          }

          #ts-site.ts-blog .hero {
            min-height: 270px;
            padding: 14px;
            position: relative;
          }

          .solutions-section-height {
            min-height:350px;
          }

          .ts-content-body {
            margin-bottom: 24px
          }

          .ts-content-body h2 {
            margin-bottom: 16px;
          }

          #ts-site .ts-pad-right-4 {
            padding-right: 32px;
          }

          #ts-site.ts-showcase.is-split-left .ts-showcase-image {
            right: 0;
          }

          #ts-site .ts-pad-left-38+.ts-showcase-image,
          #ts-site .ts-pad-right-38+.ts-showcase-image {
            max-width: 304px;
          }

          #ts-site.ts-showcase-image {
            position: relative;
            text-align: center;
            top: 0;
            z-index: 1;
          }

          .small-print {
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 14px !important;
            padding-left: 0px;
            line-height: 14px;
          }
          
        }
        @media (max-width: 800px) {

          #ts-site.ts-blog {
            background-size: 40% !important;
            background-position: 100% 120px !important; }

          .ts-right {
            float: none !important;
            margin: 24px 30px 5px; 
          }

          .small-print {
            font-size: 14px !important; }
        }
        </style>
        <article id="ts-site" class="ts-blog">
        <header class="hero">
          <div class="ts-max-width-standard">
            <h1 class="paper-font-display2 paper-font-light">WordPress Blog</h1>
            <h2 class="paper-font-title paper-font-light">Pro tips for making the most of your WordPress site</h2>
            <div class="center-button">
              <a href="https://themesurgeons.com/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home"
                track-metadata-position="banner">Contact a WordPress Pro</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
          <section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main">
                <div class="ts-content-grid-box">
                  ${until(
                    fetch('http://localhost:8080/api/contents?type=Article')
                      .then(res => res.json())
                      .then(items => {
                        return html`
                          ${repeat(
                            items.data,
                            item => item.data,
                            item => {
                              return html`
                                <div class="ts-blog-list-item">
                                <a id="${item.id}" href="/${item.slug}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">
                                  <div class="flex-hover-card">
                                    <div class="inner">
                                      <h3 class="paper-font-headline">${item.title}</h3>
                                      <p>${item.excerpt}</p>
                                      <p class="small-print"><i class="ts-blog-meta-calendar">${Calendar}</i> Published&nbsp; ${formatDistance(new Date(item.timestamp), new Date())} ago.</p>
                                    </div>
                                    <div class="ts-read-more">Read Article
                                      <div class="social_container">
                                        <div class="social_share">
                                          <div class="slide-icons slide-left">
                                            <span class="social-icon gplus-icon" .data-href="http://plus.google.com/share?url=https://themesurgeons.com/${item.slug}/" onclick="${(e) => this._getDataHref(e)}">${GooglePlus}</span>
                                            <span class="social-icon twitter-icon" .data-href="http://twitter.com/share?url=https://themesurgeons.com/${item.slug}/" on-click="getDataHref">${Twitter}</span>
                                            <span class="social-icon linkedin-icon" .data-href="http://www.linkedin.com/cws/share?url=https://themesurgeons.com/${item.slug}/" on-click="getDataHref">${Linkedin}</span>
                                            <span class="social-icon facebook-icon" .data-href="http://www.facebook.com/sharer.php?u=https://themesurgeons.com/${item.slug}/" on-click="getDataHref">${Facebook}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                </div>`;
                                }
                              )}
                              </ul>
                            `;
                          }),
                        html`
                          <span>💁‍ Getting some users...</span>
                        `
                      )}
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
                        <a track-type="pagespeedOptimization" track-name="web-page" track-metadata-position="body" href="/solutions/pagespeed/">Pagespeed Optimization</a>
                      </li>
                      <li>
                        <a track-type="mobileFirst" track-name="web-page" track-metadata-position="body" href="/solutions/design/">Mobile First Design</a>
                      </li>
                      <li>
                        <a track-type="emergencyResponse" track-name="web-page" track-metadata-position="body" href="/solutions/emergency/">Emergency Response</a>
                      </li>
                      <li>
                        <a track-type="security" track-name="web-page" track-metadata-position="body" href="/solutions/security/">WordPress Security</a>
                      </li>
                      <li>
                        <a track-type="migrations" track-name="web-page" track-metadata-position="body" href="/solutions/migrations/">WordPress Migrations</a>
                      </li>
                      <li>
                        <a track-type="preventiveCare" track-name="web-page" track-metadata-position="body" href="/solutions/care/">Preventive Care</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </article>
    `;    
  }
  _getDataHref(e) {
    const tssocialurl = e.currentTarget.dataset.href;
    alert("response is:  " + tssocialurl);
    return false;
    window.open(
      tssocialurl, 
      "_blank", 
      "scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500");
  }
}
window.customElements.define('ts-blog', TSBlog);