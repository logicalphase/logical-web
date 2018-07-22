import {PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-ajax/iron-ajax';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-collapse/iron-collapse';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-icon-button/paper-icon-button';
import "@polymer/paper-input/paper-input";
import "@polymer/paper-radio-button/paper-radio-button";
import "@polymer/paper-radio-group/paper-radio-group";
import "@polymer/paper-spinner/paper-spinner";

import * as moment from 'moment';

import view from './blog.template.html';
import style from './blog.style.scss';
import '../shared-styles';
import '../icons';

export class TSBlog extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-blog';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }

  static get properties() {
    return {
      show: {
          type: Boolean,
          value: false
      },
      type: {
          type: String,
          value: ''
      },
      loading: {
          type: Boolean,
          notify: true,
          value: false
      },
      opened: {
        type: Boolean,
        reflectToAttribute: true
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      route: Object,
      routeData: Object,
      subroute: Object,
      dynamicPath: String,
      toggle: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_toggle',
      },
    };
  }

  static get observers() {
    return ["_routeChanged(route.path)", "_latestpost()"];
  }

  /** 
   * Let's assign an event listener to each social media icon button
   * that, on-tap, grabs the correct URL + Params for the specific
   * service, and triggers a new window to open so users can post
   * the URL and comments to their own social media accounts.
   * 
   * In TypeScript, we must imperatively declare an event.target against
   * the type of Element of Object being targeted. 
   * See: https://goo.gl/vaW8Mr
   */
  _getDataHref(e) {
    const target = e.target as Element;
    const tssocialurl: string = e.target.dataset.href;
    console.log("data-href is:  " + tssocialurl);
    window.open(
      tssocialurl, 
      "_blank", 
      "scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500");
  }
  
  _toggle(e) {
    const target = e.target as Element;
    const toggle: boolean = this.opened = !this.opened;
    const show: boolean = this.opened = true;
    const hide: boolean = this.opened = false;

    this.collapse.toggle();
  }

  stripHTML(html: string) {
      const tmp = this.createElement("div");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
  }

  _getLoadingText(type: string) {
    return type ? 'Loading ' + type + '...' : 'Loading...';
  }

  _getText(opened: boolean) {
    return opened ? 'Collapse' : 'Expand';
  }

  formatTimestamp(value: string) {
    if (value) {
        const date = new Date(Date.parse(value)),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
            'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[date.getMonth()] + ' ' + 
        date.getDate() + ', ' + date.getFullYear();
    }
  }

  orderChanged() {
    const filter = this.$.change_order.selected;
    //alert("Order list by " + filter);
    const params = {
      "order": "asc",
      "timestamp": filter
    };
    this.$.ts_posts.params = params;
    this.$.ts_posts.generateRequest();
  }

  _timeAgo(value: string) {
    const day = moment(value).fromNow();
    return day;
  }

  _routeChanged(path: string) {
    // For some reason, the route change is not detected when we go back to the main page2 view.
    // This little workaround will fix this problem
    const [route, subroute] = path.replace(this.rootPath, '').split('/');
    if (route !== 'blog') {
      return;
    }
    this.page = subroute ? 'blog-subview' : 'index';
    this.dynamicPath = subroute || '';
  }

  _pageChanged(page: string) {
    // Load page import on demand. Show 404 page if fails
    import(
      /* webpackMode: "lazy" */
      `./${page}/${page}.component`
      ).catch(this._showPage404.bind(this));
  }

  _showPage404() {
    this.page = 'index';
  }
}

window.customElements.define('ts-blog', TSBlog);
