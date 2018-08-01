import { PageViewElement } from '../page-view-element.js';
import { html } from 'lit-html';
import { repeat } from 'lit-html/lib/repeat';
import { until } from 'lit-html/lib/until';
import { formatDistance } from 'date-fns/esm';
import {
  Calendar, 
  GooglePlus,
  Twitter,
  Facebook,
  Linkedin
} from '../ts-icons.js';
import { SharedStyles } from '../shared-styles.js';
import { BlogStyles } from './ts-blog-css.js';
class TSBlog extends PageViewElement {

  _getDataHref(e) {
    let link = e.currentTarget.link;
    // Pop a new window for specific social media platform
    window.open(
      link, 
      "_blank", 
      "scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500"
    );
  }

  _render(props) {
    
    let url = new Request('http://localhost:8080/api/contents?type=Article');
  
    return html `
      ${SharedStyles}
      ${BlogStyles}

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
                    fetch(url)
                      .then(res => res.json())
                      .then(items => {
                        return html`
                          ${repeat(
                            items.data,
                            item => item.data,
                            item => {
                              return html`
                                <div class="ts-blog-list-item">
                                  <div class="flex-hover-card">
                                    <a id="${item.id}" href="/${item.slug}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">
                                    <div class="category-vertical-lr">${item.category[0]}</div>
                                      <div class="inner">
                                        <h3 class="paper-font-headline">${item.title}</h3>
                                        <p>${item.excerpt}</p>
                                        <p class="small-print"><i class="ts-blog-meta-calendar social-icon">${Calendar}</i> Published&nbsp; ${formatDistance(new Date(item.timestamp), new Date())} ago.</p>
                                      </div>
                                      </a>
                                      <div class="ts-read-more"><a id="${item.id}" href="/${item.slug}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">Read Article</a>
                                        <div class="social_container">
                                          <div class="social_share">
                                            <div class="slide-icons slide-left">
                                              <span class="social-icon gplus-icon" .link=${ `http://plus.google.com/share?url=https://themesurgeons.com/${item.slug}/` } @click=${(e)=> this._getDataHref(e)}>${GooglePlus}</span>
                                              <span class="social-icon twitter-icon" .link=${ `http://twitter.com/share?url=https://themesurgeons.com/${item.slug}/` } @click=${(e)=> this._getDataHref(e)}>${Twitter}</span>
                                              <span class="social-icon linkedin-icon" .link=${ `http://www.linkedin.com/cws/share?url=https://themesurgeons.com/${ item.slug }/` } @click=${(e)=> this._getDataHref(e)}>${Linkedin}</span>
                                              <span class="social-icon facebook-icon" .link=${ `http://www.facebook.com/sharer.php?u=https://themesurgeons.com/${ item.slug }/` } @click=${(e)=> this._getDataHref(e)}>${Facebook}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              `;
                            }
                          )}
                        `;
                      }),
                    html`
                      <span>💁‍ Getting some posts...</span>
                    `
                  )}
                </div>
              </main>
              <aside class="sidebar">
                <div class="nav">
                  <div class="sticky">
                    <ul class="right-side-nav l-space-bottom-5">
                      <li>
                        <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Blog Categories</h3>
                      </li>
                      <li>
                        <a id="pagespeed" track-type="categoryPageSpeed" track-name="blog-page" track-metadata-position="body" href="#">PageSpeed Optimization</a>
                      </li>
                      <li>
                        <a id="security" track-type="categoryWordPress" track-name="blog-page" track-metadata-position="body" href="#">Securing WordPress</a>
                      </li>
                      <li>
                        <a id="hosting" track-type="categoryHosting" track-name="blog-page" track-metadata-position="body" href="#">Hosting WordPress</a>
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
}
window.customElements.define('ts-blog', TSBlog);