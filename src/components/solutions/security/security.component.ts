import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './security.template.html';
import style from "./security.style.scss";
import '../../shared-styles';
import '../../icons';

export class TSSecurity extends PolymerElement {
  $: any;

  static get is() {
    return "ts-security";
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }

}

window.customElements.define("ts-security", TSSecurity);
