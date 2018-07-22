import {PolymerElement} from '@polymer/polymer/polymer-element';
import { scroll } from "@polymer/app-layout/helpers/helpers";
import "@polymer/iron-media-query/iron-media-query";
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';

import view from './solutions.template.html';
import style from "./solutions.style.scss";
import '../shared-styles';

export class TSSolutions extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-solutions';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      route: Object,
      routeData: Object,
      subroute: Object,
    };
  }

  static get observers() {
    return [
      '_routeChanged(route.path)',
    ];
  }

  _routeChanged(path: string) {
    // For some reason, the route change is not detected when we go back to the main page2 view.
    // This little workaround will fix this problem
    const [route, subroute] = path.replace(this.rootPath, '').split('/');
    if (route !== 'solutions') {
      return;
    }
    this.page = subroute || '';

    this.scrollTo(0, 0);
    
  }

  _pageChanged(page: string) {
    // Load page import on demand. Show 404 page if fails
    import(
      /* webpackChunkName: "[request]" */
      /* webpackMode: "lazy" */
      `./${page}/${page}.component`
      ).catch(this._showPage404.bind(this));

    this.scrollTo(0, 0);
  }

  _showPage404() {
    this.page = 'index';
  }
}

window.customElements.define("ts-solutions", TSSolutions);
