// @ts-nocheck
import { LitElement, html } from '@polymer/lit-element';

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import { connect } from 'pwa-helpers/connect-mixin';
import { installRouter } from 'pwa-helpers/router';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { updateMetadata } from 'pwa-helpers/metadata';
import { menuIcon } from './ts-icons.js';
import './snack-bar.js';
import { store } from '../store.js';
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout
} from '../actions/app.js';

class TSApp extends connect(store)(LitElement) {
  _render({ appTitle, _page, _drawerOpened, _snackbarOpened, _offline }) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        display: block;

        --app-drawer-width: 326px;
        
        --app-primary-color: #a434b7;
        --app-secondary-color: #000;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: #ffffff;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: #ffffff;

        --app-header-background-color: #ffffff;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-light-text-color);
        --app-drawer-text-color: var(--app-secondary-color);
        --app-drawer-selected-color: var(--app-primary-color);

        --border-grey: #e0e0e0;

        --footer-background-grey: #303c42;
        --footer-background-secondary-grey: #37424b;
        --footer-text: #f7f7f7;
        --section-background-light-grey: #f5f5f5;
      }

      [hidden] {
        display: none !important; }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index:200;
        width: 100%;
        text-align: left;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee; }

      nav {
        height: 46px; }

      /* We need to make sure when drawer is open
      it covers our app header. Otherwise there's
      menu button that is disabled */
      #drawer {
        z-index: 200; }

      .masthead {
        background-color: #fff;
        padding: 0 14px 0 34px !important; }

      .ts-title {
        margin-left: 0px; }

      .paper-font-body2 {
        font-size: 14px;
        transform: uppercase; }

      .desktop-menu {
        height: 46px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #e0e0e0; }

      .main-navigation a {
        display: inline-block;
        margin: 0 20px;
        padding-top: 14px;
        height: 65%;
        font-weight: 400; }

      .main-navigation a, .main-navigation a:visited {
        text-decoration: none;
        font-size: 14px;
        color: rgba(0, 0, 0, .54); }

      .main-navigation a:hover {
        color: #a434b7; }

      .main-navigation a[selected] {
        color: rgba(0, 0, 0, .87);
        font-weight: 500;
        border-bottom: 2px solid var(--app-primary-color); }

      .button {
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .5px;
        line-height: 20px;
        min-width: 100px;
        padding: 0 20px;
        margin-left: 10px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        transition: box-shadow .3s, background-color .3s, color .3s, transform .3s;
        will-change: background-color; }

      .cta-header {
        font-size: 14px;
        margin-right: 24px; }

      .button-secondary-cta, .button-primary-cta {
        line-height: 30px;
        max-height: 30px; }

      .button.button-primary-cta {
        background: transparent;
        border: 2px solid #a434b7;
        color: #a434b7; }

      .button.button-secondary-cta {
        background: #a434b7;
        border: 2px solid #a434b7;
        color: #fff; }

      .button.button-primary-cta:hover, .button.button-primary-cta:active {
        background: #f9edfc; }

      .button.button-secondary-cta:hover, .button.button-secondary-cta:active {
        color: #ffffff;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

      .toolbar-top {
        background-color: var(--app-header-background-color); }

      [main-title] {
        font-family: 'Roboto';
        text-transform: lowercase;
        font-size: 24px;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px; }

      .sub-tagline {
        margin-left:5px;
      }

      .toolbar-list {
        display: none; }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 0px 18px; }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color); }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
        margin-left: -20px;
        margin-right: 10px; }

      .search-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
        margin-left: -20px;
        margin-right: 10px; }

      #drawer app-toolbar {
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 5px;
        background-color: #a434b7;
        color: #fff; }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative; }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 5px 14px; }

      .drawer-list .submenu {
        padding-left:34px; }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color); }

      .main-content {
        padding-top: 64px;
        min-height: 100vh; }

      .page {
        display: none; }

      .page[active] {
        display: block; }

      footer {
        padding: 24px;
        background: var(--app-header-text-color);
        color: var(--footer-text);
        text-align: center; }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block; }

        .menu-btn {
          display: none; }

        .toolbar-list > a {
          padding: 0px 18px; }

        .main-content {
          padding-top: 107px; }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px; }
      }
    </style>

    <app-header-layout id="ts-appheaderlayout" has-scrolling-region>
      <app-header slot="header" condenses reveals effects="waterfall">
        <app-toolbar class="masthead">
          <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
          <div class="ts-title" main-title>HyperPress
            <span class="paper-font-body2">by PRESS MEDICS</span>
          </div>
          <div class="cta-header toolbar-list">
            <a class="button button-primary-cta" data-customizer="global-nav-trial-button" href="">Login</a>
          </div>
        </app-toolbar>
        <app-toolbar class="desktop-menu toolbar-list" sticky>
          <nav class="main-navigation" role="navigation">
            <a selected?="${_page === 'home'}" href="/">Home</a>
            <a selected?="${_page === 'solutions'}" href="/solutions">Solutions</a>
            <a selected?="${_page === 'blog'}" href="/blog">Blog</a>
            <a style="float:right" selected?="${_page === 'support'}" href="/support">Support</a>
          </nav>
        </app-toolbar>
      </app-header>
    </app-header-layout>

    <!-- Drawer content -->
    <app-drawer id="drawer" opened="${_drawerOpened}"
        on-opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}">
      <app-toolbar>HyperPress <span class="sub-tagline paper-font-body2"> by PRESS MEDICS</span></app-toolbar>
      <nav class="drawer-list">
        <a selected?="${_page === 'home'}" href="/">Home</a>
        <a selected?="${_page === 'solutions'}" href="/solutions">Solutions</a>
        <a class="submenu" selected?="${_page === 'design'}" href="/design">Progressive Web Design</a>
        <a class="submenu" selected?="${_page === 'pagespeed'}" href="/pagespeed">PageSpeed Optimization</a>
        <a class="submenu" selected?="${_page === 'emergency'}" href="/emergency">WordPress 911</a>
        <a class="submenu" selected?="${_page === 'security'}" href="/security">HyperSecurity Services</a>
        <a class="submenu" selected?="${_page === 'care'}" href="/care">WordPress Preventive Care</a>
        <a class="submenu" selected?="${_page === 'migrations'}" href="/migrations">WordPress Migrations</a>
        <a selected?="${_page === 'blog'}" href="/blog">Blog</a>
        <a selected?="${_page === 'privacy'}" href="/privacy">Privacy</a>
        <a selected?="${_page === 'contact'}" href="/contact">Contact</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main class="main-content">
      <ts-home class="page" active?="${_page === 'home'}"></ts-home>
      <ts-solutions class="page" active?="${_page === 'solutions'}"></ts-solutions>
      <ts-care class="page" active?="${_page === 'care'}"></ts-care>
      <ts-design class="page" active?="${_page === 'design'}"></ts-design>
      <ts-emergency class="page" active?="${_page === 'emergency'}"></ts-emergency>
      <ts-migrations class="page" active?="${_page === 'migrations'}"></ts-migrations>
      <ts-pagespeed class="page" active?="${_page === 'pagespeed'}"></ts-pagespeed>
      <ts-privacy class="page" active?="${_page === 'privacy'}"></ts-privacy>
      <ts-security class="page" active?="${_page === 'security'}"></ts-security>
      <ts-blog class="page" active?="${_page === 'blog'}"></ts-blog>
      <ts-view404 class="page" active?="${_page === 'view404'}"></ts-view404>
    </main>
      
    <footer>
      <p>Made with \u2764\uFE0F by Pressmedics. Powered by Google</p>
    </footer>

    <snack-bar active?="${_snackbarOpened}">Site is currently ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    };
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter(location => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`, matches => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
      window.scrollTo(0, 0);
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('ts-app', TSApp);
