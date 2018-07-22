import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './view404.template.html';
import style from './view404.style.scss';
import '../shared-styles';

export class TS404 extends PolymerElement {
  $: any;

  static get is() {
    return 'view404';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define('ts-view404', TS404);
