import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import { until } from 'lit-html/directives/until.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { repeat } from 'lit-html/directives/repeat.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-item.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { fetchArticles } from '../actions/articles.js';
import { refreshPage } from '../actions/app.js';
import { articles, itemListSelector } from '../reducers/articles.js';

// We are lazy loading its reducer.
store.addReducers({
    articles
});

import { SharedStyles } from './shared-styles.js';

class TSBlog extends connect(store)(PageViewElement) {
  render() {
    const { _query, _data, _showOffline } = this;

    // Don't render if there is no item.
    if (_data) {
      until(_data, html `<p class="ts-loader" style="padding-left: 34px;">Loading. . .</p>`);
    } else {
      return html `<p class="ts-loader" style="padding-left: 34px;">An error occurred while retrieving blog list. Please reload.</p>`;
    }

    // @ts-ignore
    updateMetadata({
      title: `HyperPress Articles`,
      description: 'WordPress How to\'s, tutorials, and pro tips to get the most from your site'
    });
    
    return html `
    ${SharedStyles}
    <style>
    :host {
      display: block;
      padding: 0px;
    }

    [hidden] {
      display: none !important;
    }

    /* Smaller than 460 */

    .ts-header-wrapper {
      background: var(--app-light-text-color) url(/images/header/ts-design-header.svg) no-repeat;
      background-size: contain;
      background-position: center center;
    }

    .ts-content-wrapper {
      padding: 0 24px 0 5px; }

    .columns {
      max-width: 987px;
      margin: 0 auto;
      padding-top: 34px; }

    .ts-content-grid-box {
      max-width: 100%;
    }

    .ts-content-grid-box p {
      max-width: 580px;
    }

    .ts-grid-wrapper-auto-fill {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      justify-items: left;
    }

    .ts-blog-list-item {
      margin-bottom: 24px;
    }

    .flex-hover-card {
      min-width: 100%;
    }

    .flex-hover-card .inner>p {
      padding-top: 0px;
    }

    #resource_loader {
      margin-top: -80px;
    }

    .loader-wrapper {
      text-align: center;
    }

    .sidebar {
      background-color: var(--app-light-text-color);
      width: 210px;
      margin-left: 34px;
      margin-top: 5px;
    }

    .nav li h3 {
      color: #4a5960;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0px 0px 16px;
      padding-bottom: 0;
      padding-left: 20px;
    }

    .nav li {
      margin-right: 17px;
    }

    ul.right-side-nav {
      list-style: none;
      padding-left: 0px;
      margin-top: 0;
    }

    .nav li a {
      padding-left: 20px;
    }

    #resource_loader {
      margin-top: -80px;
    }

    .loader-wrapper {
      text-align: center;
    }

    @media (min-width: 460px) {
      .ts-header-wrapper {
        background: var(--app-light-text-color) url(/images/header/ts-design-header.svg) no-repeat;
        background-size: contain;
        background-position: 94% center;
      }
    }

    </style>

    <article id="ts-site" class="ts-blog">
      <header class="hero">
        <div class="ts-header-wrapper">
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
              <div class="ts-content-grid-box" ?hidden="${!_query}">
                ${repeat(_data, (item) => html`
                  <div class="ts-blog-list-item">
                    <div class="flex-hover-card">
                      <ts-item .item="${item}"></ts-item>
                    </div>
                  </div>
                `)}
              </div>
            </main>
            <aside class="sidebar">
              <div class="nav">
                <div class="sticky">
                  <ul class="right-side-nav l-space-bottom-5">
                    <li>
                      <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Blog Categories</h3>
                    </li>
                    ${repeat(_data, (item) => html`  
                      <li>
                        <a id="${item.categories_names}" track-type="category${item.categories_names}" track-name="blog-page" track-metadata-position="body" href="#">${item.categories_names}</a>
                      </li>
                    `)}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </article>
    `;
  }
  static get properties() {
    return {
      _query: { type: String },
      _data: { type: Array },
      _showOffline: { type: Boolean }
    };
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._query = state.articles.query;
    this._data = itemListSelector(state);
    this._showOffline = state.app.offline && state.articles.failure;
  }
}
window.customElements.define('ts-blog', TSBlog);

export { fetchArticles, refreshPage };