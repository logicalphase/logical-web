import { LitElement, html, css } from "lit-element";
import { formatDistance } from "date-fns/esm";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import {
  Calendar,
  GooglePlus,
  Twitter,
  Facebook,
  Linkedin
} from "./ts-icons.js";

class TSItem extends LitElement {
  static get styles() {
    return [
      css`
      h3.paper-font-headline {
        font-size: 1.14rem;
        font-weight: 400;
        margin: 10px 0;
      }

      p {
        word-spacing: 0.1rem;
      }

      .ts-read-more {
        padding: 13px 24px;
        background-color: var(--app-light-text-color);
      }
      .ts-read-more a {
        color: var(--app-primary-color);
        text-decoration: none;
      }
      .ts-read-more .social_container {
        float: right;
        padding: 0px;
      }

      .small-print .social-icon {
        padding-left: 0px;
      }

      .social-icon {
        fill: #888;
        padding-left: 7px;
      }
      .gplus-icon:hover {
        fill: #db4437;
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
        fill: #007bb5;
      }

      .ts-blog-meta-calendar svg {
        vertical-align: bottom;
      }

      .text-uppercase {
        border-top: 1px solid var(--app-light-text-color);
        display: block;
        padding: 16px 28px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      .inner {
        padding: 20px 55px 10px 24px;
        border-bottom: 1px solid #e4e4e4;
      }

      .inner .category {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 40px;
        text-align: center;
        writing-mode: tb-rl;
        margin: 12px;
        font-size: 16px;
        color: var(--app-primary-color);
        font-weight: 500;
        letter-spacing: .25px;
        text-transform: uppercase;
      }

      .small-print {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 14px;
        padding-left: 0px;
        line-height: 14px;
      }



      .category-vertical-lr a {
        color: var(--app-light-text-color);
      }

      @media (min-width: 460px) {
        .inner {
          margin-right: 0px;
        }

        h3.paper-font-headline {
          font-size: 1.5rem;
          font-weight: 300;
          margin: 10px 0;
        }

        .inner p {
          padding: 4px 0px 0px 0px;
          max-width: 570px;
        }

        .flex-hover-card .inner > p {
          padding-top: 10px;
        }

        .flex-hover-card .inner > h3 {
          margin: 0 0 14px;
        }



        .small-print {
          margin-top: 14px;
          margin-bottom: 4px;
          font-size: 14px !important;
          padding-left: 0px;
          line-height: 14px;
        }
      }

      `
    ];
  } 
  render() {
    const { item } = this;
    const id = item.id;
    const title = item.title && item.title.rendered;
    const date = formatDistance(new Date(item.date), new Date());
    const slug = item.slug;
    const category = item.categories_names;
    const excerpt = unsafeHTML(item.excerpt && item.excerpt.rendered);

    const date_prefix = "Updated ";
    const date_postfix = " ago.";

    return html`
    
    <div class="inner">
      <span class="category">${category}</span>
      <a href="/article/${slug}/" aria_label="Read ${title}" track-type="navigateTo" track-name="/solutions/headlessWordPress" ><h3 class="paper-font-headline">${title}</h3></a> 
      ${excerpt}
      <p class="small-print"><i class="ts-blog-meta-calendar social-icon">${Calendar}</i> ${ date_prefix + date + date_postfix }</p>
    </div>
    
    <div class="ts-read-more"><a id="${id}" href="/article/${slug}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">Read Article</a>
      <div class="social_container">
        <div class="social_share">
          <div class="slide-icons slide-left">
            <span class="social-icon gplus-icon" .link=${ `https://plus.google.com/share?url=https://themesurgeons.com/${slug}/` } @click=${e => this._getDataHref(e)}>${GooglePlus}</span>
            <span class="social-icon twitter-icon" .link=${ `https://twitter.com/share?url=https://themesurgeons.com/${slug}/` } @click=${e => this._getDataHref(e)}>${Twitter}</span>
            <span class="social-icon linkedin-icon" .link=${ `https://www.linkedin.com/cws/share?url=https://themesurgeons.com/${slug}/` } @click=${e => this._getDataHref(e)}>${Linkedin}</span>
            <span class="social-icon facebook-icon" .link=${ `https://www.facebook.com/sharer.php?u=https://themesurgeons.com/${slug}/` } @click=${e => this._getDataHref(e)}>${Facebook}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  }
  static get properties() {
    return {
      item: { type: Object }
    };
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
window.customElements.define("ts-item", TSItem);
