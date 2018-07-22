import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './care.template.html';
import style from "./care.style.scss";
import '../../shared-styles';
import '../../icons';

export class TSCare extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-care';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define("ts-care", TSCare);
