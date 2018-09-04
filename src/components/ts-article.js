/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { formatDistance } from 'date-fns/esm';
//import { Calendar } from './ts-icons.js';

import { SharedStyles } from './shared-styles.js';

import './ts-offline.js';

// This element is connected to the redux store.
import { store } from '../store.js';

import { refreshPage } from '../actions/app.js';
import { fetchArticle } from '../actions/article.js';
import { article, articleSelector } from '../reducers/article.js';

// We are lazy loading its reducer.
store.addReducers({
    article
});

class TSDetail extends connect(store)(LitElement) {
  render() {
    const {
      _data,
      _lastVisitedListPage,
      _showOffline
    } = this;
    
    // Don't render if there is no item.
    //if (!_data) {
    //  return;
    //}

    const item = _data;
    const title = item.title;
    const author = 'John Teague';
    const date = formatDistance(new Date(item.timestamp), new Date());
    const thumbnail = item.photo;
    const slug = item.slug;
    const categories = item.category || [];

    // @ts-ignore
    updateMetadata({
      title: `${title} - Articles`,
      description: item.excerpt,
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
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
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
          font-size: 24px;
          font-weight: 300;
          line-height: 1.2;
        }
        .item-item {
          padding-top: 8px;
        }
        .desc {
          padding: 8px 0;
          font-size: 15px;
          line-height: 1.8;
        }
        .desc > h3 {
          font-size: 15px;
          font-weight: 300;
        }
        .desc > ul {
          margin-bottom: 0;
        }
        .desc .alignleft {
          padding: 0 24px 0 0;
        }
        .desc .alignright {
          padding: 0 0 0 24px;
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
        [hidden] {
          display: none !important;
        }
        /* desktop screen */
        @media (min-width: 648px) {
          :host {
            padding: 48px 24px 24px;
          }
          section {
            margin: 0 auto;
          }
          .item {
            padding-bottom: 24px;
          }
          .item-desc {
            margin-left: 24px;
          }
          .title {
            margin-bottom: 8px;
            font-size: 24px;
            line-height: 1.3;
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
      </style>
      <section ?hidden="${_showOffline}">
        <div class="item">
          <div class="cover" hero>
            <img .src="${thumbnail}" .alt="${title}" />
            <h1 class="title">${title}</h1>
            <div class="item-item" ?hidden="${!author}">By ${author} - Published: ${date} agos.</div>
          </div>
        </div>
        <div class="desc">
          ${unsafeHTML(item.body || item.subtitle || 'None')}
        </div>
        <div class="desc" ?hidden="${categories.length === 0}">
          <h3>Categories</h3>
          <ul>
            ${repeat(categories, (item) => html`
              <li>${item}</li>
            `)}
          </ul>
        </div>
      </section>
      <ts-offline ?hidden="${!_showOffline}" @refresh="${() => store.dispatch(refreshPage())}"></ts-offline>
    `;
  }

  static get properties() {
    return {
      _data: { type: Array },
      _lastVisitedListPage: { type: Boolean },
      _showOffline:{ type: Boolean }
    }
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._data = articleSelector(state);
    this._lastVisitedListPage = state.app.lastVisitedListPage;
    this._showOffline = state.app.offline && state.article.failure;
  }
}

window.customElements.define('ts-article', TSDetail);

export { fetchArticle };