import { HP_HOST } from './config';

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

import './ts-home.js';
import './snack-bar.js';

import { connect } from 'pwa-helpers/connect-mixin';
import { installRouter } from 'pwa-helpers/router';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { updateMetadata } from 'pwa-helpers/metadata';

import { menuIcon } from './ts-icons.js';
import { store } from '../store.js';

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';

import { navigate, updateOffline, updateDrawerState, updateLayout } from '../actions/app';
import { TsTheme } from './ts-style-theme';
import { MenuStyles } from './ts-style-menu';

class TSApp extends connect(store)(LitElement) {
  static get styles() {
    return [
      TsTheme,
      MenuStyles,
      css`
        /*--------------------------------------------------------------
      # Accessibility
      --------------------------------------------------------------*/
        /* Text meant only for screen readers. */
        .screen-reader-text {
          clip: rect(1px, 1px, 1px, 1px);
          position: absolute !important;
          height: 1px;
          width: 1px;
          overflow: hidden;
          word-wrap: normal !important;
          /* Many screen reader and browser combinations announce broken words as they would appear visually. */
        }

        .screen-reader-text:focus {
          background-color: #f1f1f1;
          border-radius: 3px;
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
          clip: auto !important;
          color: #21759b;
          display: block;
          font-size: 14px;
          font-size: 0.875rem;
          font-weight: bold;
          height: auto;
          left: 5px;
          line-height: normal;
          padding: 15px 23px 14px;
          text-decoration: none;
          top: 5px;
          width: auto;
          z-index: 100000;
          /* Above WP toolbar. */
        }

        /* Do not show the outline on the skip link target. */
        #primary[tabindex='-1']:focus {
          outline: 0;
        }

        [hidden] {
          display: none !important;
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 200;
          width: 100%;
          text-align: left;
          background-color: var(--app-header-background-color);
          color: var(--app-header-text-color);
          border-bottom: 1px solid var(--app-primary-border-color);
        }

        nav {
          height: 46px;
        }

        .masthead {
          background-color: var(--app-primary-background-color);
          padding: 12px 8px;
          height: inherit;
          align-items: center;
        }

        .ts-title {
          margin-left: 0px;
          font-weight: 300;
          color: var(--app-secondary-color);
        }

        .paper-font-body2 {
          font-size: 14px;
          transform: uppercase;
        }

        .cta-header {
          font-size: 14px;
          margin-right: 24px;
        }

        .toolbar-top {
          background-color: var(--app-header-background-color);
        }

        [main-title] {
          font-family: 'Roboto';
          text-transform: lowercase;
          font-size: 24px;
          /* 
          In the narrow layout, the toolbar is offset by the width of the
          drawer button, and the text looks not centered. Add a padding to
          match that button 
        */
          padding-right: 44px;
        }

        .sub-tagline {
          margin-left: 5px;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 0px 18px;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        .search-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          width: 44px;
          margin-left: -20px;
          margin-right: 10px;
        }

        /* 
        We need to make sure when drawer is open
        it covers our app header. Otherwise there's
        menu button that is disabled 
      */
        #drawer {
          z-index: 200;
        }

        #drawer app-toolbar {
          border-bottom: 1px solid var(--app-primary-border-color);
          margin-bottom: 5px;
          background-color: var(--app-primary-color);
          color: var(--app-reverse-text-color);
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 10px 24px;
          background: var(--app-drawer-background-color);
          position: relative;
          text-align: left;
          overflow-y: auto;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          font: 400 16px/24px Roboto, sans-serif;
          color: var(--app-drawer-text-color);
          letter-spacing: 0.25px;
          padding: 0.6rem 8px 0.6rem 0px;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        .main-content {
          padding-top: 59px;
          min-height: 100vh;
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        .hypersite-footer-linkboxes-all-backup,
        .hypersite-footer-linkbox-cloud {
          background-color: var(--app-footer-primary-background-color);
        }
        .hypersite-footer-linkboxes-all-backup {
          background: var(--app-footer-primary-background-color);
        }

        .hypersite-footer-linkboxes > nav::before {
          background: var(--app-footer-primary-background-color);
          border-bottom: solid 1px var(--app-form-border-color);
          color: var(--app-footer-primary-background-color);
          content: 'Logical Phase';
          display: block;
          height: 73px;
          margin: 0 24px;
        }

        *,
        *:before,
        *:after {
          -webkit-box-sizing: inherit;
          box-sizing: inherit;
        }
        .hypersite-nav {
          font-size: 13px;
        }

        .hypersite-site-name {
          display: none;
        }

        .hypersite-utility-footer-nav {
          color: var(--app-reverse-text-color);
          overflow: auto;
          padding: 10px 24px;
        }

        .hypersite-full-site-width,
        .hypersite-toast-fill {
          margin: 0 auto;
          max-width: 1400px;
          color: var(--app-footer-text-color);
        }

        .hypersite-footer-linkboxes-all-backup,
        .hypersite-footer-linkbox-cloud {
          background-color: var(--app-footer-primary-background-color) !important;
        }

        .hypersite-footer-linkboxes-all-backup {
          background: var(--app-footer-primary-background-color);
        }

        .hypersite-footer-linkboxes {
          background: #263238;
          font: 14px/16px Roboto, sans-serif;
        }

        .hypersite-utility-footer {
          background: var(--app-footer-secondary-background-color);
          color: var(--app-footer-text-color);
          text-align: center;
        }

        .hypersite-utility-footer-nav-left {
          float: left;
        }

        .hypersite-utility-footer-link + .hypersite-utility-footer-link::before {
          content: '|';
          padding-left: 6px;
          padding-right: 8px;
        }
        footer nav {
          height: inherit;
        }

        .hypersite-utility-footer-link {
          color: var(--app-reverse-text-color);
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
        }

        .hypersite-utility-footer-links,
        .hypersite-utility-footer-newsletter-signup-text {
          font-weight: 500;
          margin-right: 16px;
        }

        input[type='search'] {
          outline: none;
        }

        input[type='search'] {
          box-sizing: content-box;
          -moz-box-sizing: content-box;
          -webkit-appearance: textfield;
          -webkit-box-sizing: content-box;
          font-family: inherit;
          font-size: 1rem;
        }

        input::-webkit-search-decoration,
        input::-webkit-search-cancel-button {
          display: none;
        }

        .search-icon {
          fill: var(--app-primary-icon-color);
        }

        input[type='search'] {
          background: var(--app-secondary-background-color) url('/images/bg/icon-search.svg')
            no-repeat 7px right;
          border: solid 1px var(--app-form-border-color);
          padding: 7px 34px 7px 34px;
          width: 230px;
          margin-top: 6px;
          margin-bottom: 14px;
          -webkit-border-radius: 10em;
          -moz-border-radius: 10em;
          border-radius: 10em;
        }

        input[type='search']:focus {
          width: 230px;
          background-color: var(--app-reverse-text-color);
          border-color: var(--app-primary-color);
          -webkit-box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
          -moz-box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
          box-shadow: 0 0 5px rgba(164, 52, 183, 0.5);
        }

        input:-moz-placeholder,
        input::-webkit-input-placeholder {
          color: var(--app-footer-secondary-background-color);
        }

        input:-moz-placeholder:focus,
        input::-webkit-input-placeholder:focus {
          color: var(--app-form-text-color);
        }

        .ts-brand-site-logo {
          display: block;
          height: auto;
          width: 141px;
          text-align: left;
          margin-left: 12px;
        }

        img {
          border: 0;
          max-width: 100%;
        }

        /* 
        Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout. 
      */
        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          input[type='search'] {
            background: var(--app-secondary-background-color) url('/images/bg/icon-search.svg')
              no-repeat right 7px;
            border: solid 1px var(--app-form-border-color);
            padding: 7px 40px 7px 18px;
            width: 140px;
            margin-top: 0;
            margin-bottom: 0;
            -webkit-border-radius: 10em;
            -moz-border-radius: 10em;
            border-radius: 10em;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
          }
          input[type='search']:focus {
            width: 330px;
          }

          .masthead {
            padding: 5px 8px 5px 36px;
          }

          .ts-brand-site-logo {
            display: block;
            height: auto;
            width: 161px;
            margin-left: 0px;
          }

          .menu-btn {
            display: none;
          }

          .toolbar-list > a {
            padding: 0px 18px;
          }

          .main-content {
            padding-top: 96px;
          }

          /* The drawer button isn't shown in the wide layout, so we don't
      need to offset the title */
          [main-title] {
            padding-right: 0px;
          }
        }
      `,
    ];
  }
  
  render() {
    const { appTitle, _page, _offline, _drawerOpened, _snackbarOpened } = this;

    return html`
      <!-- Header -->
      <app-header-layout id="ts-appheaderlayout" has-scrolling-region>
        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar class="masthead">
            <a href="/" alt="${appTitle} home">
              <img
                rel="dns-prefetch"
                class="ts-brand-site-logo"
                src="/images/hyperpress-logo-254x46.png"
                alt="${appTitle}"
              />
            </a>
            <div class="ts-title" main-title>
              <span class="hypersite-site-name">${appTitle}</span>
            </div>
            <div class="cta-header toolbar-list">
              <form style="float:right" action="${HP_HOST}">
                <input type="search" aria-label="Search box" placeholder="Search" />
              </form>
            </div>
            <button
              class="menu-btn"
              title="Menu"
              @click="${() => store.dispatch(updateDrawerState(true))}"
            >
              ${menuIcon}
            </button>
          </app-toolbar>
          <app-toolbar class="desktop-menu toolbar-list" sticky>
            <nav role="navigation" aria-label="Header Navigation Menu">
              <ul class="main-navigation">
                <li><a ?selected="${_page === 'home'}" href="/">Home</a></li>
                <li><button id="dropdownMenuButton" class="toolbar-platform-chooser__button" @click="${this._toggleDropdownMenu}">
                  <span class="toolbar-platform-chooser__label">Solutions</span>
                  <svg class="triangle dropdown__arrow closed" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <title>Open drop down menu</title>
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                </button>
                <div id="dropdownListElement" class="dropdown-menu hide" data-target="slide-content" aria-hidden="true" tabindex="-1">
                  <a class="dropdown-item submenu" ?selected="${_page === 'hosting'}" href="/hosting" tabindex="-1">Hosting</a>
                  <a class="dropdown-item submenu" ?selected="${_page === 'pagespeed'}" href="/pagespeed" tabindex="-1">Site Performance</a>
                  <a class="dropdown-item submenu" ?selected="${_page === 'emergency'}" href="/emergency" tabindex="-1">Emergency Response</a>
                  <a class="dropdown-item submenu" ?selected="${_page === 'care'}" href="/care" tabindex="-1">Preventive Care</a>
                  <a class="dropdown-item submenu" ?selected="${_page === 'migrations'}" href="/migrations" tabindex="-1">Site Migrations</a>
                </div>
                </li>
                <li><a ?selected="${_page === 'blog'}" href="/blog">Learn</a></li>
                <a ?selected="${_page === 'support'}" href="/contact" style="float:right">Contact</a>
              </ul>
            </nav>
          </app-toolbar>
        </app-header>
      </app-header-layout>

      <!-- Drawer content -->
      <app-drawer
        id="drawer"
        .opened="${_drawerOpened}"
        @opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}"
        swipe-open
      >
        <app-toolbar>
          ${appTitle}
        </app-toolbar>
        <nav class="drawer-list">
          <form>
            <input type="search" tabindex="-1" placeholder="Search" />
          </form>
          <a ?selected="${_page === 'home'}" href="/">Home</a>
          <a class="submenu" ?selected="${_page === 'hosting'}" href="/hosting">Hosting</a>
          <a class="submenu" ?selected="${_page === 'pagespeed'}" href="/pagespeed">Performance</a>
          <a class="submenu" ?selected="${_page === 'emergency'}" href="/emergency">Emergency</a>
          <a class="submenu" ?selected="${_page === 'care'}" href="/care">Care</a>
          <a class="submenu" ?selected="${_page === 'migrations'}" href="/migrations">Site Migrations</a>
          <a ?selected="${_page === 'blog'}" href="/blog">Learn</a>
          <a ?selected="${_page === 'contact'}" href="/contact">Contact</a>
          <a ?selected="${_page === 'support'}" href="/support">Support</a>
          <a ?selected="${_page === 'privacy'}" href="/privacy">Privacy</a>
        </nav>
      </app-drawer>
      <!-- Main content -->
      <main class="main-content">
        <ts-home class="page" ?active="${_page === 'home'}"></ts-home>
        <ts-care class="page" ?active="${_page === 'care'}"></ts-care>
        <ts-design class="page" ?active="${_page === 'design'}"></ts-design>
        <ts-hosting class="page" ?active="${_page === 'hosting'}"></ts-hosting>
        <ts-emergency class="page" ?active="${_page === 'emergency'}"></ts-emergency>
        <ts-migrations class="page" ?active="${_page === 'migrations'}"></ts-migrations>
        <ts-pagespeed class="page" ?active="${_page === 'pagespeed'}"></ts-pagespeed>
        <ts-privacy class="page" ?active="${_page === 'privacy'}"></ts-privacy>
        <ts-terms class="page" ?active="${_page === 'terms'}"></ts-terms>
        <ts-security class="page" ?active="${_page === 'security'}"></ts-security>
        <ts-blog class="page" ?active="${_page === 'blog'}"></ts-blog>
        <ts-category class="page" ?active="${_page === 'category'}"></ts-category>
        <ts-article class="page" ?active="${_page === 'article'}"></ts-article>
        <ts-contact class="page" ?active="${_page === 'contact'}"></ts-contact>
        <ts-support class="page" ?active="${_page === 'support'}"></ts-support>
        <ts-view404 class="page" ?active="${_page === '404'}"></ts-view404>
      </main>

      <!-- Footer content -->
      <footer title="footer-links" class="hypersite-footer-linkboxes nocontent hypersite-footer-linkboxes-all-backup">
        <nav role="navigation" class="hypersite-full-site-width"></nav>
      </footer>
      <footer title="footer-navigation" class="hypersite-utility-footer">
        <nav role="navigation" class="hypersite-utility-footer-nav hypersite-nav hypersite-full-site-width">
          <div class="hypersite-utility-footer-nav-left">
            <span class="hypersite-footer-links">
              <a class="hypersite-utility-footer-link gc-analytics-event" href="/terms"
                >Site Terms</a
              >
              <a class="hypersite-utility-footer-link gc-analytics-event" href="/privacy"
                >Privacy</a
              >
            </span>
          </div>
        </nav>
      </footer>

      <snack-bar ?active="${_snackbarOpened}">
        You are currently ${_offline ? 'offline' : 'online'}.</snack-bar
      >
    `;
  }

  static get properties() {
    return {
      appTitle: {
        type: String,
      },
      _query: {
        type: String,
      },
      _categoryId: {
        type: String,
      },
      _page: {
        type: String,
      },
      _lazyResourcesLoaded: {
        type: Boolean,
      },
      _lastVisitedListPage: {
        type: Boolean,
      },
      _offline: {
        type: Boolean,
      },
      _drawerOpened: {
        type: Boolean,
      },
      _snackbarOpened: {
        type: Boolean,
      },
      _updateOffline: {
        type: Boolean,
      },
      _data: {
        type: Object,
      },
      _item: {
        type: Object,
      },
      _articleSlug: {
        type: String,
      },
      dropdownList: {
        type: String,
      }
    };
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter(location => store.dispatch(navigate(location)));
    installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 648px) and (min-height: 648px)`, matches =>
      store.dispatch(updateLayout(matches)),
    );
    this.removeAttribute('unresolved');
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle,
        // This object also takes an image property, that points to an img src.
      });
      // Maybe move this into a store, but for now I need a quick and dirty way
      // to make sure the dropdown menu element closes after a menu selection 
      // and to properly update aria attributes.
      this._hideDropdownButtonBlur();
 
      window.scrollTo(0, 0);
    }
  }

  _toggleDropdownMenu(e) {
    const dropdownButton = this.shadowRoot.getElementById('dropdownMenuButton');
    const dropdownList = this.shadowRoot.getElementById("dropdownListElement");
    const dropdownArrow = this.shadowRoot.querySelector('.dropdown__arrow');
    if (dropdownList.classList.contains('hide')) {
      dropdownList.classList.replace('hide','show');
      dropdownArrow.classList.replace('closed','open');
      dropdownButton.setAttribute("aria-expanded", 'true');
      dropdownList.setAttribute("aria-hidden", 'false');
      console.log(dropdownList.classList);
    } else {
      dropdownList.classList.replace('show','hide');
      dropdownArrow.classList.replace('open','closed');
      dropdownButton.setAttribute("aria-expanded", 'false');
      dropdownList.setAttribute("aria-hidden", 'true');
      console.log(dropdownList.classList);
    }  
  }

  _hideDropdownButtonBlur(e) {
    const dropdownButton = this.shadowRoot.getElementById('dropdownMenuButton');
    const dropdownList = this.shadowRoot.getElementById("dropdownListElement");
    const dropdownArrow = this.shadowRoot.querySelector('.dropdown__arrow');
    dropdownList.classList.replace('show','hide');
    dropdownArrow.classList.replace('open','closed');
    dropdownButton.setAttribute("aria-expanded", 'false');
    dropdownList.setAttribute("aria-hidden", 'true');
  }

  stateChanged(state) {
    this.appTitle = state.app.appTitle;
    this._page = state.app.page;
    this._lastVisitedListPage = state.app.lastVisitedListPage;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
    this._data = state.article && state.article.data;
    this._item = state.article && state.article.item;
    this._query = state.articles && state.articles.query;
    this._categoryId = state.categories && state.categories.categoryId;
    this._articleSlug = state.article && state.article.slug;
  }
}
window.customElements.define('ts-app', TSApp);
