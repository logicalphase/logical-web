import {PolymerElement} from '@polymer/polymer/polymer-element';
import view from './migrations.template.html';
import style from "./migrations.style.scss";
import '../../shared-styles';
import '../../icons';

export class TSMigrations extends PolymerElement {
  $: any;

  static get is() {
    return 'ts-migrations';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view}`;
  }
}

window.customElements.define("ts-migrations", TSMigrations);
