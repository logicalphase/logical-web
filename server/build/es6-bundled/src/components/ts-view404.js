define(["./ts-app.js"],function(_tsApp){"use strict";class TSView404 extends _tsApp.PageViewElement{static get styles(){return[_tsApp.SharedStyles,_tsApp.TsTypographyStyle,_tsApp.css`
      :host {
        display: block;
        padding: 30px;
      }
      h2 {
        font-weight: 300;
        margin-bottom: 20px;
      }
      `]}render(){(0,_tsApp.updateMetadata)({title:"404 Page Not Found - Logical Phase",description:"The page you're looking for doesn't seem to exist"});return _tsApp.html`
      <section>
        <h2 class="title">Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again?</p>
    </section>
  `}}window.customElements.define("ts-view404",TSView404)});