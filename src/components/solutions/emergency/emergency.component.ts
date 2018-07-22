import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './emergency.template.html';
import style from './emergency.style.scss';
import '../../shared-styles';
import '../../icons';

export class TSEmergency extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-emergency';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define('ts-emergency', TSEmergency);
