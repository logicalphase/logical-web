import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './pagespeed.template.html';
import style from './pagespeed.style.scss';
import '../../shared-styles';
import '../../icons';

export class TSPageSpeed extends PolymerElement {
  $: any;

  static get is() {
    return "ts-pagespeed";
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define('ts-pagespeed', TSPageSpeed);
