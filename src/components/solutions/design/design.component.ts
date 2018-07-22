import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './design.template.html';
import style from './design.style.scss';
import '../../shared-styles';
import '../../icons';

export class TSDesign extends PolymerElement {
  $: any;

  static get is() {
    return "ts-design";
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }

}

window.customElements.define('ts-design', TSDesign);
