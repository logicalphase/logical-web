import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import view from './home.template.html';
import style from './home.style.scss';
import '../shared-styles';

export class TSHome extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-home';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define('ts-home', TSHome);
