import { PageViewElement } from '../../page-view-element';
import { html } from 'lit-html';
import { SharedStyles } from '../../shared-styles';
import { MigrationStyles } from './ts-migrations-css';
import { MigrationTemplate } from './ts-migrations-template';

class TSMigrations extends PageViewElement {
  _render(props) {
    return html `
      ${ SharedStyles }
      ${ MigrationStyles }
      ${ MigrationTemplate }
    `;
  }
}
window.customElements.define('ts-migrations', TSMigrations);