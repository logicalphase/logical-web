import { html } from '@polymer/lit-element';
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
  Linkedin
} from './ts-icons.js';

import { SharedStyles } from './shared-styles.js';

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
  render() {
    const {
      isFetching,
      _data,
      _lastVisitedListPage,
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
    const thumbnail = item.dna_featured_image && item.dna_featured_image.media_details.file;
    const alt = item.dna_featured_image && item.dna_featured_image.alt_text;
    const slug = item.slug;
    const categories = item.categories_names || [];

    // @ts-ignore
    updateMetadata({
      title: `${title} - HyperPress Blog Article`,
      description: title,
      image: thumbnail
    });

  return html `
    ${SharedStyles}
    <style>
        :host {
          display: block;
          padding: 24px 16px;
        }

        h1, h2 {
          font-weight: 300;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 1.15rem;
        }

        h3 {
          margin: 24px 0;
        }

        ol li, ul li {
          font-size:1rem;
        }

        strong {
          font-weight: 500;
        }
        section {
          max-width: 748px;
          box-sizing: border-box;
          font-weight: 300;
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
          font-size: 24px;
          font-weight: 300;
          text-align: left;
        }
        .desc > ul {
          margin-bottom: 24px;
        }

        .desc > ol {
          padding-left: 20px;
        }

        .desc .wp-caption {
          border: 4px solid #efefef;
          padding: 5px;
          text-align: center;
          margin: 0 auto;
        }

        .desc .wp-caption-text {
          font-size:0.9rem;
          padding: 5px;
          margin-bottom:5px;
        }

        .desc img {
          padding: 1px;
        }

        .desc .alignleft {
          margin-bottom: 22px;
          float: none;
        }
        .desc .alignright {
          margin-bottom: 22px;
          float: none;
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
        .ts-read-more .social_container {
          float: right;
          padding: 0px;
          margin-top: -89px;
        }
        .social-icon {
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
        [hidden] {
          display: none !important;
        }
        /* desktop screen */
        @media (min-width: 648px) {
          :host {
            padding: 48px 24px 24px;
          }
          h2 {
            font-size: 1.5rem;
          }
          ol li, ul li {
            font-size:1.1rem;
          }
          section {
            margin: 0 auto;
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
          .desc .alignleft {
            margin: 0 24px 0 0;
            float: left;
          }
          .desc .alignright {
            margin: 4px 0 0 24px;
            float:right;
          }
        }
      </style>
      <section ?hidden="${_showOffline}">
        <div class="item">
          <div class="cover" hero>
            <article-image .src="https://tscdn-themesurgesonslt.netdna-ssl.com/wp-content/uploads/${thumbnail}" .alt="${title}" ></article-image>
            <h1 class="title">${title}</h1>
          <div class="item-item" ?hidden="${!author}">By ${author} - Published: ${date} ago.</div>
          </div>
        </div>
        <div class="desc">

          ${unsafeHTML(item.content && item.content.rendered || item.subtitle || 'None')}
        </div>
        <div class="desc ts-read-more" ?hidden="${categories.length === 0}">
          <h4>Category</h4>
          <ul>
            ${repeat(categories, (item) => html`
              <li>${item}</li>
            `)}
          </ul>
          <div class="social_container">
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
      </section>
      <ts-offline ?hidden="${!_showOffline}" @refresh="${() => store.dispatch(refreshPage())}"></ts-offline>
    `;
  }

  static get properties() {
    return {
      isFetching: Boolean,
      _data: { type: Array },
      _lastVisitedListPage: { type: Boolean },
      _showOffline:{ type: Boolean }
    };
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
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