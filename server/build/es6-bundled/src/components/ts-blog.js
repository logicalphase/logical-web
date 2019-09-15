define(["exports","./ts-app.js"],function(_exports,_tsApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});Object.defineProperty(_exports,"fetchArticles",{enumerable:!0,get:function(){return _tsApp.fetchArticles}});Object.defineProperty(_exports,"refreshPage",{enumerable:!0,get:function(){return _tsApp.refreshPage}});_exports.until=_exports.$until=_exports.$tsBlog=void 0;const _state=new WeakMap,_infinity=2147483647,until=(0,_tsApp.directive)((...args)=>part=>{let state=_state.get(part);if(state===void 0){state={lastRenderedIndex:_infinity,values:[]};_state.set(part,state)}const previousValues=state.values;let previousLength=previousValues.length;state.values=args;for(let i=0;i<args.length;i++){// If we've rendered a higher-priority value already, stop.
if(i>state.lastRenderedIndex){break}const value=args[i];// Render non-Promise values immediately
if((0,_tsApp.isPrimitive)(value)||"function"!==typeof value.then){part.setValue(value);state.lastRenderedIndex=i;// Since a lower-priority value will never overwrite a higher-priority
// synchronous value, we can stop processsing now.
break}// If this is a Promise we've already handled, skip it.
if(i<previousLength&&value===previousValues[i]){continue}// We have a Promise that we haven't seen before, so priorities may have
// changed. Forget what we rendered before.
state.lastRenderedIndex=_infinity;previousLength=0;Promise.resolve(value).then(resolvedValue=>{const index=state.values.indexOf(value);// If state.values doesn't contain the value, we've re-rendered without
// the value, so don't render it. Then, only render if the value is
// higher-priority than what's already been rendered.
if(-1<index&&index<state.lastRenderedIndex){state.lastRenderedIndex=index;part.setValue(resolvedValue);part.commit()}})}});// Effectively infinity, but a SMI.
_exports.until=until;var until$1={until:until};_exports.$until=until$1;class TSSocial extends _tsApp.LitElement{static get styles(){return[_tsApp.css`
      :host {
        display: block;
        position: relative;
      }
      #placeholder {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        background-position: center;
      }
      :host([blur-up]) #placeholder {
        background-position: center 10%;
        background-size: 80%;
        background-repeat: no-repeat;
        filter: blur(3px);
        will-change: filter;
      }
      :host([blur-up]) #placeholder[loaded] {
        filter: blur(0);
        transition: 0.2s filter ease-in-out;
      }
      :host([center]) span {
        left: -9999px;
        right: -9999px;
        max-width: none;
      }
      #placeholder[loaded] span {
        opacity: 1;
        transition: 0.5s opacity;
      }


      .small-print .social-icon {
        padding-left: 0px;
      }

      .social-icon {
        fill: #111;
        padding-left: 7px;
      }
      .gplus-icon:hover {
        fill: #db4437;
        cursor: pointer;
      }
      .blogger-icon:hover {
        fill: #fb8f3d;
        cursor: pointer;
      }
      .twitter-icon:hover {
        fill: #1da1f2;
        cursor: pointer;
      }
      .facebook-icon:hover {
        fill: #3b5998;
        cursor: pointer;
      }
      .linkedin-icon:hover {
        fill: #007bb5;
        cursor: pointer;
      }
    `]}render(){const{link,placeholder,_loaded,slug}=this;return _tsApp.html`
    <div id="placeholder">
      <div class="slide-icons slide-left">
        <span class="social-icon twitter-icon" .link=${`https://twitter.com/share?url=https://themesurgeons.com/${slug}/`} @click=${e=>this._getDataHref(e)}>${_tsApp.Twitter}</span>
        <span class="social-icon linkedin-icon" .link=${`https://www.linkedin.com/cws/share?url=https://themesurgeons.com/${slug}/`} @click=${e=>this._getDataHref(e)}>${_tsApp.Linkedin}</span>
        <span class="social-icon facebook-icon" .link=${`https://www.facebook.com/sharer.php?u=https://themesurgeons.com/${slug}/`} @click=${e=>this._getDataHref(e)}>${_tsApp.Facebook}</span>
      </div>
    </div>
  `}static get properties(){return{src:{type:String},link:{type:String},_loaded:{type:Boolean}}}update(changedProps){if(changedProps.has("link")){this._loaded=!1}super.update(changedProps)}_getDataHref(e){let link=e.currentTarget.link;// Pop a new window for specific social media platform
window.open(link,"_blank","scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500")}_onSocialError(){if(!this.placeholder){return _tsApp.html`<p>Bummer. Unable to load social media share buttons.</p>`}}}customElements.define("ts-social",TSSocial);class TSItem extends _tsApp.LitElement{static get styles(){return[_tsApp.css`
      
      h3.paper-font-headline {
        font-size: 1.14rem;
        font-weight: 400;
        margin: 10px 0;
        color: var(--app-primary-text-color);
      }

      p {
        word-spacing: 0.1px;

      }

      .ts-read-more {
        padding: 13px 24px;
        background-color: var(--app-reverse-text-color);
      }
      .ts-read-more a {
        color: var(--app-primary-color);
        text-decoration: none;
      }
      .ts-read-more .social_container {
        float: right;
        padding: 0px;
      }

      .small-print .social-icon {
        padding-left: 0px;
      }

      .social-icon {
        fill: #888;
        padding-left: 7px;
      }
      .gplus-icon:hover {
        fill: #db4437;
        cursor: pointer;
      }
      .blogger-icon:hover {
        fill: #fb8f3d;
        cursor: pointer;
      }
      .twitter-icon:hover {
        fill: #1da1f2;
        cursor: pointer;
      }
      .facebook-icon:hover {
        fill: #3b5998;
        cursor: pointer;
      }
      .linkedin-icon:hover {
        fill: #007bb5;
        cursor: pointer;
      }
      .ts-blog-meta-calendar svg {
        vertical-align: bottom;
      }

      .text-uppercase {
        border-top: 1px solid var(--app-reverse-text-color);
        display: block;
        padding: 16px 28px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      .inner {
        padding: 20px 55px 10px 24px;
        background-color: #ffffff;
        border-bottom: 1px solid #e4e4e4;
      }

      .inner .category {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 40px;
        text-align: center;
        writing-mode: tb-rl;
        margin: 12px;
        font-size: 16px;
        color: var(--app-primary-color);
        font-weight: 500;
        letter-spacing: .25px;
        text-transform: uppercase;
      }

      .small-print {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 14px;
        padding-left: 0px;
        line-height: 14px;
      }

      .category-vertical-lr a {
        color: var(--app-reverse-text-color);
      }

      @media (min-width: 460px) {
        p {
          word-spacing: 0.1px;
        }
        .inner {
          margin-right: 0px;
        }

        h3.paper-font-headline {
          font-size: 1.5rem;
          margin: 10px 0;
          color: var(--app-primary-text-color);
        }

        .inner p {
          padding: 4px 0px 0px 0px;
          max-width: 570px;
        }

        .flex-hover-card .inner > p {
          padding-top: 10px;
        }

        .flex-hover-card .inner > h3 {
          margin: 0 0 14px;
        }

        .small-print {
          margin-top: 14px;
          margin-bottom: 4px;
          font-size: 14px !important;
          padding-left: 0px;
          line-height: 14px;
        }
      }

      `]}render(){const{item}=this,id=item.id,title=item.title&&item.title.rendered,date=(0,_tsApp.formatDistance)(new Date(item.date),new Date),slug=item.slug,category=item.categories_names,excerpt=(0,_tsApp.unsafeHTML)(item.excerpt&&item.excerpt.rendered),date_prefix="Updated ",date_postfix=" ago.";return _tsApp.html`
    
    <div class="inner">
      <h3 class="paper-font-headline">${title}</h3>
      ${excerpt}
      <p class="small-print"><i class="ts-blog-meta-calendar social-icon">${_tsApp.Calendar}</i> ${date_prefix+date+date_postfix}</p>
      <span class="category">${category}</span>
    </div>
    
    <div class="ts-read-more"><a id="${id}" aria-label="Read ${title}" href="/article/${slug}/" track-type="navigateTo" track-name="/solutions/headlessWordPress">Read Article</a>
      <div class="social_container">
        <div class="social_share">
        <ts-social .item="${item}"></ts-social>
        </div>
      </div>
    </div>
  `}static get properties(){return{item:{type:Object}}}_getDataHref(e){let link=e.currentTarget.link;// Pop a new window for specific social media platform
window.open(link,"_blank","scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500")}}window.customElements.define("ts-item",TSItem);_tsApp.store.addReducers({articles:_tsApp.articles});const cdnHost=(0,_tsApp.unsafeCSS)(_tsApp.CDN_HOST_URL);class TSBlog extends(0,_tsApp.connect)(_tsApp.store)(_tsApp.PageViewElement){static get styles(){return[_tsApp.TsButtonStyle,_tsApp.TsGridStyle,_tsApp.TsTypographyStyle,_tsApp.TsLayoutStyle,_tsApp.TsTheme,_tsApp.TsElevationStyle,_tsApp.SharedStyles,_tsApp.css`
      :host {
        display: block;
        padding: 0px;
      }

      [hidden] {
        display: none !important;
      }

      /* Smaller than 460 */

      .hero {
        background: none;
      }

      .ts-content-wrapper {
        padding: 0px 24px 0px 5px; 
        background: var(--app-primary-section-background-color);
      }

      .columns {
        max-width: 987px;
        margin: 0 auto;
        padding-top: 34px; }

      .sticky {
        display:block;
      }

      .ts-content-grid-box {
        max-width: 100%;
      }

      .ts-content-grid-box p {
        max-width: 580px;
      }

      .ts-grid-wrapper-auto-fill {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        justify-items: left;
      }

      .ts-blog-list-item {
        margin-bottom: 24px;
      }

      .flex-hover-card {
        min-width: 100%;
      }

      .flex-hover-card .inner>p {
        padding-top: 0px;
      }

      #resource_loader {
        margin-top: -80px;
      }

      .loader-wrapper {
        text-align: center;
      }

      .sidebar {
        background-color: var(--app-reverse-text-color);
        width: 210px;
        margin-left: 34px;
        margin-top: 0px;
      }

      .nav li h3 {
        color: var(--app-primary-text-color);
        font-size: 18px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px 0px 5px;
        padding: 20px 0 20px 20px;
      }

      .nav li {
        margin-right: 0px;
      }

      ul.right-side-nav {
        list-style: none;
        padding-left: 0px;
        margin-top: 0;
      }

      .nav li a {
        padding-left: 20px;
      }

      #resource_loader {
        margin-top: -80px;
      }

      .loader-wrapper {
        text-align: center;
      }

      @keyframes FadeIn { 
        0% {
          opacity: 0;
          transform: scale(.1);
        }

        85% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      .ts-blog-list-item .flex-hover-card:nth-child(0) {
        animation-delay: 0.0s;
        animation: FadeIn 0.5s ease;
        animation-fill-mode: both;
      }

      .ts-blog-list-item .flex-hover-card:nth-child(1) {
        animation-delay: 1.6s;
        animation: FadeIn 0.5s ease;
        animation-fill-mode: both;
      }

      .ts-blog-list-item .flex-hover-card:nth-child(3) { animation-delay: 1.8s }
      .ts-blog-list-item .flex-hover-card:nth-child(4) { animation-delay: 2.6s }

      @media (min-width: 460px) {
        .hero {
          background: var(--app-reverse-text-color) url('/images/header/ts-design-header-opt.svg') no-repeat;
          background-size: 380px;
          background-position: 93% 80px;
        }
        .ts-content-wrapper {
          padding: 0; 
          background: var(--app-primary-section-background-color);
        }
        .background-grey {
          background: white;
        }
        .text-uppercase {
          border-top: 0px;
        }
        .ts-pad-bottom-12 {
          padding-bottom: 96px;
          border-top: 1px solid var(--app-primary-hover-color);
        }
        #ts-site .ts-headline4 {
          padding-right: 0;
        }
      }
      `]}render(){const{_query,_data,_showOffline}=this;// Don't render if there is no item.
if(_data){until(_data,_tsApp.html`<p class="ts-loader" style="padding-left: 34px;">Loading. . .</p>`)}else{return _tsApp.html`<p class="ts-loader" style="padding-left: 34px;">An error occurred while retrieving blog list. Please reload.</p>`}(0,_tsApp.updateMetadata)({title:`HyperPress Articles`,description:`WordPress How to's, tutorials, and pro tips to get the most from your site`});return _tsApp.html`
    <div class="hypersite-main-content clearfix">
      <article id="ts-site" class="ts-blog">
          <header class="ts-hero hero">
            <div class="ts-grid">
              <div class="ts-grid__column is-7 is-6__large">
                <header class="ts-grid__column is-7 is-6__large">
                  <div class="fade-in content-set">
                    <h1 class="ts-section-header__eyebrow ts-eyebrow">Resources for WordPress</h1>
                    <h2 class="ts-display3">How to get the most out of your WordPress site</h2>
                    <p class="ts-headline4 ts-why-google__intro-text">Articles written by WordPress professionals for site owners, developers, and designers.</p>
                  </div>
                </header>
              </div>
              <div class="cloud-grid__col is-5">
              </div>
            </div>
          </header>
        <div class="ts-content-wrapper">
          <section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main">
                <div class="ts-content-grid-box" ?hidden="${!_query}">
                  ${(0,_tsApp.repeat)(_data,item=>_tsApp.html`
                    <div class="ts-blog-list-item">
                      <div class="flex-hover-card mdc-elevation--z3">
                        <ts-item .item="${item}"></ts-item>
                      </div>
                    </div>
                  `)}
                </div>
              </main>
              <aside class="sidebar mdc-elevation--z3">
                <div class="nav">
                  <div class="sticky">
                    <ul class="fade-in right-side-nav l-space-bottom-5">
                      <li>
                        <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Blog Categories</h3>
                      </li>
                      ${(0,_tsApp.repeat)(_data,item=>_tsApp.html`
                        <li>
                          <a id="${item.categories_names}" track-type="category${item.categories_names}" track-name="blog-page" track-metadata-position="body" href="https://logicalphase.com/category/${item.categories_names}">${item.categories_names}</a>
                        </li>
                      `)}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <ts-offline ?hidden="${!_showOffline}" @refresh="${()=>_tsApp.store.dispatch((0,_tsApp.refreshPage)())}"></ts-offline>
        </div>
      </article>
    </div>
    `}static get properties(){return{_query:{type:String},_data:{type:Array},_showOffline:{type:Boolean}}}// This is called every time something is updated in the store.
stateChanged(state){this._query=state.articles.query;this._data=(0,_tsApp.itemListSelector)(state);this._showOffline=state.app.offline&&state.articles.failure}}window.customElements.define("ts-blog",TSBlog);var tsBlog={fetchArticles:_tsApp.fetchArticles,refreshPage:_tsApp.refreshPage};_exports.$tsBlog=tsBlog});