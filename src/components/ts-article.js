import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { formatDistance } from 'date-fns/esm';
import {
  GooglePlus,
  Twitter,
  Facebook,
  Linkedin,
  SubTitleIcon
} from './ts-icons.js';

import { SharedStyles } from './ts-style-shared';
import { TsElevationStyle } from './ts-style-elevation';
import { TsTypographyStyle } from './ts-style-typography';
import { TsTableStyles } from './ts-style-table';
import { TsWordPressStyles } from './ts-style-wp';

import './ts-offline.js';
import './ts-image.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { refreshPage } from '../actions/app.js';
import { fetchArticle } from '../actions/article.js';
import { article, articleSelector } from '../reducers/article.js';

// We are lazy loading its reducer.
store.addReducers({
  article
});

class TSDetail extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      SharedStyles,
      TsTableStyles,
      TsElevationStyle,
      TsTypographyStyle,
      TsWordPressStyles,
      css`

      :host {
        display: block;
        padding: 0px;
      }

      h1, h2 {
        font-weight: 400;
        margin: 14px 0px 14px 0px
      }

      h2 {
        font-size: 1.15rem;
      }

      h3 {
        padding: 0; 
      }

      p {
          font-weight: 300;
      }
      
      ol {
        margin-left: 0px;
        padding-left: 0px;
      }
      ul{
        margin-left: 0px;
        padding-left: 24px;
      }

      ol li, ul li {
        font-size:1rem;
        margin-right: 10px
      }

      li ul {
        margin-left: 0px;
      }

      table {
        margin: 0px;
      }

      blockquote {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 40px;
        margin-inline-end: 40px;
        font-size: 1.5rem;
      }

      blockquote p {
        quotes: "“" "”";
      }

      blockquote p::before {
        content: open-quote;
        font-family: 'Times New Roman', Times, serif;
        font-size: 62px;
        color: var(--app-primary-color);
        margin-left: -28px;
        margin-bottom: -20px;
      }
      blockquote p::after {
        display:none;
        content: open-quote;
        font-family: 'Times New Roman', Times, serif;
        font-size: 62px;
      }

      section {
        max-width: 748px;
        box-sizing: border-box;
      }
      .content-wrapper {
        padding: 10px 24px;
      }
      .item {
        display: flex;
        padding-bottom: 16px;
        border-bottom: 1px solid #c5c5c5;
      }
      .cover {
        position: relative;
      }

      .cover > article-image {
        display: block;
        margin: 0 auto;
      }
      .item-desc {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 16px;
        font-size: 14px;
      }
      .flex {
        flex: 1;
      }
      .title {
        margin: 14px 0 4px;
        font-size: 1.45rem;
        font-weight: 300;
        line-height: 1.2;
        text-align: center;
      }
      .item-item {
        padding-top: 8px;
        padding-bottom: 14px;
        font-size: 0.9rem;
        text-align: center;
      }
      .desc {
        padding: 8px 0 22px 0;
      }
      .desc > h3 {
        font-size: 22px;
        font-weight: 400;
        text-align: left;
      }
      .desc > ul {
        margin-bottom: 24px;
      }

      .desc > ol {
        padding-left: 20px;
      }

      .article-button {
        display: inline-block;
        margin-right: 8px;
        padding: 8px 44px;
        border: 2px solid var(--app-primary-text-color);
        box-sizing: border-box;
        background-color: transparent;
        color: var(--app-primary-text-color);
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-bottom: none;
      }
      .article-button:active {
        background-color: var(--app-primary-text-color);
        color: var(--app-reverse-text-color);
        border-bottom: none;
      }

      article-rating {
        margin-right: 6px;
      }
      .rating-container {
        display: flex;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid #c5c5c5;
        font-size: 14px;
      }
      .fav-btn-container,
      .preview-btn-container {
        padding-top: 16px;
      }
      .fav-btn-container {
        height: 32px;
      }
      .fav-button {
        display: flex;
        align-items: center;
        width: 156px;
        margin: 0 8px 0 0;
        padding: 0;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        font-size: 12px;
        cursor: pointer;
      }
      .fav-button > svg {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }

      .ts-read-more {
        display: grid;
      }
      .article-footer {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
      }
      .meta-container {
        grid-column: 1;
        text-align: left;
      }
      .social-container {
        grid-column: 2;
        text-align: right;
      }
      .social-container h4 {
        margin-right: 48px;
      }
      .article-footer ul {
        margin:0;
        padding:0;
      }
      .article-footer .meta-list-item {
        padding-left: 0px;
        list-style:none;
        fill:  #888;
      }
      .article-footer .meta-list-item span {
        vertical-align: text-bottom;
        padding-left: 5px;
      }
      .social-icon {
        fill:  #888;
        cursor: pointer;
        margin-right: 5px;
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
      [hidden] {
        display: none !important;
      }
      /* desktop screen */
      @media (min-width: 648px) {
        :host {
          padding: 48px 24px 24px;
        }
        p {
          font-weight: 300;
        }
        h2, h3 {
          margin: 20px 0px 25px 0px;
          padding: 0;
        }

        h2 {
          font-size: 1.5rem;
        }
        blockquote {
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 80px;
          margin-inline-end: 80px;
        }
        blockquote p {
          margin-bottom: 0px;
        }
        small {
          margin-bottom: -24px;
        }
        section {
          margin: 0 auto;
        }
        .content-wrapper {
          padding: 0px;
        }
        .item {
          padding-bottom: 8px;
        }
        .item-item {
          text-align: left;
        }
        .item-desc {
          margin-left: 24px;
        }
        .title {
          margin-bottom: 8px;
          font-size: 2rem;
          line-height: 1.3;
          text-align: left;
        }
        .fav-btn-container,
        .preview-btn-container {
          display: flex;
          justify-content: flex-end;
        }
        .preview-btn-container {
          padding-bottom: 24px;
        }
        .rating-container {
          padding: 24px 0;
        }
        .desc {
          padding: 16px 0;
        }
      }
    `
    ];
  }

  render() {
    const {
      _data,
      _showOffline
    } = this;
    
    // Don't render if there is no item.
    if (!_data) {
      return html `<p class="ts-loader">Loading. . .</p>`;
    }

    const item = _data;
    const title = item.title && item.title.rendered;
    const author = 'John Teague';
    const date = formatDistance(new Date(item.date), new Date());
    const thumbnail = item.tsapi_featured_image && item.tsapi_featured_image.source_url;
    const alt = item.tsapi_featured_image && item.tsapi_featured_image.alt_text;
    const slug = item.slug;
    const categories = item.categories_names || [];

    // @ts-ignore
    updateMetadata({
      title: `${title} - HyperPress Blog Article`,
      description: title,
      image: thumbnail
    });

    return html `
      <section ?hidden="${_showOffline}">
        <div class="item">
          <div class="cover">
            <article-image .src="${thumbnail}" .alt="${alt}"></article-image>
            <h1 class="fade-in title">${title}</h1>
          <div class=" fade-in item-item" ?hidden="${!author}">By ${author} - Updated: ${date} ago.</div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="delayed-fade-in desc">
            ${unsafeHTML(item.content && item.content.rendered || item.subtitle || 'None')}
          </div>
          <div class="ts-read-more" ?hidden="${categories.length === 0}">
            <div class="meta-container">
              <div class="article-footer">  
                <h4>Category</h4>
                <ul>
                  ${repeat(categories, (item) => html`
                    <li class="meta-list-item">${SubTitleIcon}<span>${item}</span></li>
                  `)}
                </ul>
              </div>
            </div>
            <div class="social-container">
              <div class="article-footer">
                <h4>Share me!</h4>
                <div class="social_share">
                  <div class="slide-icons slide-left">
                    <span class="social-icon gplus-icon" .link=${ `https://plus.google.com/share?url=https://themesurgeons.com/article/${slug}/`} @click=${(e) => this._getDataHref(e)}>${GooglePlus}</span>
                    <span class="social-icon twitter-icon" .link=${ `https://twitter.com/share?url=https://themesurgeons.com/article/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Twitter}</span>
                    <span class="social-icon linkedin-icon" .link=${ `https://www.linkedin.com/cws/share?url=https://themesurgeons.com/article/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Linkedin}</span>
                    <span class="social-icon facebook-icon" .link=${ `https://www.facebook.com/sharer.php?u=https://themesurgeons.com/article/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Facebook}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ts-offline ?hidden="${!_showOffline}" @refresh="${() => store.dispatch(refreshPage())}"></ts-offline>
    `;
  }

  static get properties() {
    return {
      _isFetching: { type: Boolean },
      _data: { type: Array },
      _lastVisitedListPage: { type: Boolean },
      _showOffline:{ type: Boolean }
    };
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._data = articleSelector(state);
    this._lastVisitedListPage = state.app.lastVisitedListPage;
    this._showOffline = state.app.offline && state.article.failure;
  }

  _getDataHref(e) {
    let link = e.currentTarget.link;
    // Pop a new window for specific social media platform
    window.open(
      link,
      "_blank",
      "scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500"
    );
  }
}

window.customElements.define('ts-article', TSDetail);

export { fetchArticle };