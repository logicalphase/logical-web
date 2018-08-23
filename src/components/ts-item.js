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
import { unsafeHTML } from 'lit-html/lib/unsafe-html.js';
import { formatDistance } from 'date-fns/esm';
import { Calendar } from './ts-icons.js';

import { SharedStyles } from './shared-styles.js';

class TSItem extends LitElement {
  _render({ item }) {
    const info = item.data;
    const id = item ? item.id : '';
    const title = info ? info.title : '';
    //const slug = info ? info.slug : '';
    const category = info ? info.category[0] : '';
    const timestamp = info ? info.timestamp : '';
    const excerpt = info ? unsafeHTML(info.excerpt || '<i>No descriptions.</i>') : '';

    return html`
      ${ SharedStyles }
      <style>
        :host {
          display: block;
        }
        .inner {
          padding: 20px 28px 0;
          min-height:165px;
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
  
        .category-vertical-lr {
          float: right;
          min-height:185px;
          position:relative;
          width: 20px;
          padding:0 3px 0 4px;
          font-size: 14px;
          letter-spacing: .08em;
          text-align:center;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          background-color:rgba(192,192,192,0.8);
          color: #fff;
        }
  
        .category-vertical-lr a {
          color: #fff;
        }

        [hidden] {
          display: none !important;
        }

        @media (min-width: 460px) {
 
          #ts-site .ts-pad-right-4 {
            padding-right: 32px;
          }

          .small-print {
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 14px !important;
            padding-left: 0px;
            line-height: 14px;
          }
        }
        /* Wide layout */
        @media (max-width: 800px) {
          .category-vertical-lr {
            height: auto;
            width: 20px;
            float: right;
            writing-mode: vertical-rl;
          }

          .small-print {
            font-size: 14px !important; }

       }
      </style>
      <div class="ts-blog-list-item">
      <div class="flex-hover-card">
        <a id="${item.id}" href="/article/${item.id}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">
          <div class="category-vertical-lr">${item.category}</div>
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

  static get properties() { return {
    item: Object
  };}
}

window.customElements.define('ts-item', TSItem);