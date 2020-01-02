import { CDN_HOST_URL } from './config';
import { html, css, unsafeCSS, LitElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

import { until } from 'lit-html/directives/until.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { repeat } from 'lit-html/directives/repeat.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import './ts-item.js';
import './ts-offline.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { fetchArticles } from '../actions/articles.js';
import { refreshPage } from '../actions/app.js';
import { articles, itemListSelector } from '../reducers/articles.js';

// We are lazy loading its reducer.
store.addReducers({
  articles,
});

import { SharedStyles } from './ts-style-shared';
import { TsButtonStyle } from './ts-style-button';
import { TsElevationStyle } from './ts-style-elevation';
import { TsTypographyStyle } from './ts-style-typography';
import { TsGridStyle } from './ts-style-grid';
import { TsLayoutStyle } from './ts-style-layout';
import { TsTheme } from './ts-style-theme';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class TSBlog extends connect(store)(LitElement) {
  static get styles() {
    return [
      TsButtonStyle,
      TsGridStyle,
      TsTypographyStyle,
      TsLayoutStyle,
      TsTheme,
      TsElevationStyle,
      SharedStyles,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        [hidden] {
          display: none !important;
        }

        /* Smaller than 460 */

        .hero {
          background: none;
        }

        .ts-content-wrapper {
          padding: 0px;
          background: var(--app-reverse-text-color);
        }

        .columns {
          max-width: 987px;
          margin: 0 auto;
          padding-top: 34px;
          background: var(--app-reverse-text-color);
        }

        .sticky {
          display: none;
        }

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

        .flex-hover-card .inner > p {
          padding-top: 0px;
        }

        #resource_loader {
          margin-top: -80px;
        }

        .loader-wrapper {
          text-align: center;
        }

        .sidebar {
          display: none;
        }

        .nav li h3 {
          color: var(--app-primary-text-color);
          font-size: 18px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px 0px 5px;
          padding: 20px 0 20px 20px;
        }

        .nav li {
          margin-right: 0px;
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

        @keyframes FadeIn {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }

          85% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .ts-blog-list-item .flex-hover-card:nth-child(0) {
          animation-delay: 0s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .ts-blog-list-item .flex-hover-card:nth-child(1) {
          animation-delay: 1.6s;
          animation: FadeIn 0.5s ease;
          animation-fill-mode: both;
        }

        .ts-blog-list-item .flex-hover-card:nth-child(3) {
          animation-delay: 1.8s;
        }
        .ts-blog-list-item .flex-hover-card:nth-child(4) {
          animation-delay: 2.6s;
        }

        @media (min-width: 460px) {
          .hero {
            background: var(--app-reverse-text-color) url('/images/header/ts-design-header-opt.svg')
              no-repeat;
            background-size: 280px;
            background-position: 90% 60px;
          }
          .ts-content-wrapper {
            padding: 0;
            background: var(--app-primary-section-background-color);
          }
          .sidebar {
            display: block;
            width: 160px;
            margin-left: 34px;
            margin-top: 0;
          }
          .background-grey {
            background: white;
          }
          .text-uppercase {
            border-top: 0px;
          }
          .ts-pad-bottom-12 {
            padding-bottom: 96px;
            border-top: 1px solid var(--app-primary-hover-color);
          }
          #ts-site .ts-headline4 {
            padding-right: 0;
          }
          .sticky {
            display: block;
          }
        }
      `,
    ];
  }

  render() {
    const { _query, _data, _showOffline } = this;

    // Don't render if there is no item.
    if (_data) {
      until(
        _data,
        html`
          <p class="ts-loader" style="padding-left: 34px;">Loading. . .</p>
        `,
      );
    } else {
      return html`
        <p class="ts-loader" style="padding-left: 34px;">
          An error occurred while retrieving blog list. Please reload.
        </p>
      `;
    }
    updateMetadata({
      title: `Logical Phase Articles`,
      description: `WordPress How to's, tutorials, and pro tips to get the most from your site`,
    });

    return html`
      <div class="hypersite-main-content clearfix">
        <article id="ts-site" class="ts-blog">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Resources for WordPress</h1>
                    <h2 class="ts-display3">Logical Phase Blog</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">
                      Articles written by WordPress professionals for site owners, developers, and
                      designers.
                    </p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5"></div>
            </div>
          </header>
          <div class="ts-content-wrapper">
            <section
              class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home"
            >
              <div class="columns">
                <main class="main">
                  <div class="ts-content-grid-box" ?hidden="${!_query}">
                    ${repeat(
                      _data,
                      item => html`
                        <div class="ts-blog-list-item">
                          <div class="flex-hover-card mdc-elevation--z3">
                            <ts-item .item="${item}"></ts-item>
                          </div>
                        </div>
                      `,
                    )}
                  </div>
                </main>
                <aside class="sidebar mdc-elevation--z3">
                  <div class="nav">
                    <div class="sticky">
                      <ul class="fade-in right-side-nav l-space-bottom-5">
                        <li>
                          <h3
                            class="l-pad-right-2 l-pad-left-2 text-uppercase"
                            id="more-about-serverless"
                          >
                            Blog Categories
                          </h3>
                        </li>
                        ${repeat(
                          _data,
                          item => html`
                            <li>
                              <a
                                id="${item.id}"
                                track-type="category${item.categories_names}"
                                track-name="blog-page"
                                track-metadata-position="body"
                                href="https://logicalphase.com/category/${item.categories}"
                                >${item.categories_names}</a
                              >
                            </li>
                          `,
                        )}
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </section>
            <ts-offline
              ?hidden="${!_showOffline}"
              @refresh="${() => store.dispatch(refreshPage())}"
            ></ts-offline>
          </div>
        </article>
      </div>
    `;
  }
  static get properties() {
    return {
      _query: { type: String },
      _data: { type: Array },
      _showOffline: { type: Boolean },
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
