import{css,html,PageViewElement,updateMetadata,SharedStyles,TsTypographyStyle}from"./ts-app.js";class TSView404 extends PageViewElement{static get styles(){return[SharedStyles,TsTypographyStyle,css`
      :host {
        display: block;
        padding: 30px;
      }
      h2 {
        font-weight: 300;
        margin-bottom: 20px;
      }
      `]}render(){updateMetadata({title:"404 Page Not Found - HyperPress",description:"The page you're looking for doesn't seem to exist"});return html`
      <section>
        <h2 class="title">Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again?</p>
    </section>
  `}}window.customElements.define("ts-view404",TSView404);