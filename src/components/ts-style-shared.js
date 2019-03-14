import { css } from 'lit-element';

export const SharedStyles = css `

/* All screens smaller than 460px wide */

  :host {
    display:none;
  }

  /* Box model */
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* Base Styles */

  body #ts-site {
    color: #202124;
  }

  figure.img-right {
      float:none;
      margin: 0;
  }
  figure.img-right img {
    float:none;
    margin: auto auto;
    max-width: 80%;
    margin-top: 28px;
    margin-bottom: 28px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--app-dark-text-color); 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 10px 0; }

  h1, h2, h3, h4, h5, h6, a {
    text-rendering: optimizeLegibility; }

  h1.paper-font-display2 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 44px;
    margin: 0;
  }

  h2.paper-font-title {
    font-size: 22px;
    white-space: normal;
    padding-right: 0px; }

  h3 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; }

  h5, h6 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 18px;
  }

  ol {
    margin-left: 14px;
  }
  ul{
    margin-left: 0px;
    padding-left: 24px;
  }

  li ul, li ol {
    margin-left: 0px;
  }

  ol li, ul li {
    font: 400 16px/24px Roboto, Sans-serif;
    line-height: 28px;
  }

  strong {
    font-weight:500;
  }

  a { 
    background-color: transparent;
    color: var(--app-primary-color);
    text-decoration: none; 
    font-weight: 400;
    margin-bottom: 5px;
    border-bottom: 2px solid var(--app-primary-color);
    will-change: background-color
  }

  a:hover {
    outline: 0; 
    border-bottom: 0px;
  }


  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary, img {
    display: block; }

  .entry .entry-content .wp-block-image {
    max-width: 100%;
  }

  section {
    margin: 0; }

  th {
    font-weight:500;
  }

  img {
    height: auto;
    /* Make sure images are scaled correctly. */
    max-width: 100%;
    /* Adhere to container width. */
    width: 100%
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  .delayed-fade-in {
    opacity: 0;
    animation: fadeIn 1.4s forwards;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Base Classes */

  .nav {
    display: inline; }

  .sticky {
    display: none; } 

  .hero-section p {
    margin: 0 0 25px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px; }

  .text-uppercase {
    border-top: 1px solid var(--border-grey);
    display: block;
    text-align: left; }

  .entry-content .alignfull {
    margin-left  : calc( -100vw / 2 + 100% / 2 );
    margin-right : calc( -100vw / 2 + 100% / 2 );
    max-width    : 100vw;
  }

  .entry-content .alignwide {
    margin-left  : -100px;
    margin-right : -100px;
    max-width    : 1024px;
  }

  /* Classes - Section Layout */

  .ts-section {
      padding: 80px 0;
  }
  .ts-section--border {
      border-top: 1px solid #dadce0;
  }
  .ts-section--no-padding-bottom {
      padding-bottom: 0;
  }
  .ts-section--no-padding-top {
      padding-top: 0;
  }
  .ts-section__header, .ts-section__spacer {
      margin-bottom: 56px;
  }

  @media all and (max-width: 767px) {
  .ts-copy .ts-grid--alternate {
      display: block;
  }
  .ts-copy .ts-copy__img {
      text-align: center;
  }
}
.ts-copy .ts-eyebrow+.ts-headline1, .ts-copy .ts-eyebrow+.ts-headline2, .ts-copy .ts-eyebrow+.ts-headline3, .ts-copy .ts-eyebrow+.ts-headline4 {
    padding-top: 12px;
}
.ts-copy__text {
    margin: 24px 0 40px;
    max-width: 600px;
}
.ts-copy__icon-row {
    width: 100%}
.ts-copy__icon-row svg {
    fill: currentColor;
    height: 100%;
    width: 100%}
.ts-copy__icon-row svg path {
    fill: currentColor;
}
.ts-copy__icon-row img {
    width: 100%}
.ts-copy__icon-content--large {
    height: 92px;
    margin-bottom: 16px;
    width: 92px;
}
.ts-copy__icon-content--medium {
    height: 64px;
    margin-bottom: 16px;
    width: 64px;
}
.ts-copy__icon-content--small {
    height: 32px;
    margin-bottom: 16px;
    width: 32px;
}
.ts-copy--three-column--center .ts-copy__icon-content--large, .ts-copy--three-column--center .ts-copy__icon-content--medium, .ts-copy--three-column--center .ts-copy__icon-content--small {
    margin-left: auto;
    margin-right: auto;
}
.ts-copy__icon-2up {
    display: flex;
}
.ts-copy__icon-2up .ts-copy__icon-row {
    flex: 0 0 80px;
}
.ts-copy--40-80 .ts-copy__eyebrow {
    margin-bottom: 0;
}
.ts-copy__content {
    min-height: 180px;
}
.ts-copy__content .ts-footnotes {
    color: #bdc1c6;
}
.ts-copy__content--left {
    margin-left: 0;
}
.ts-copy__content--center {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%}
.ts-copy__content--center img {
    height: auto;
    max-width: 100%;
    width: auto;
}
.ts-copy__color-block {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 180px;
}
.ts-copy__color-block--blue {
    background-color: #4285f4;
}
.ts-copy__color-block--green {
    background-color: #34a853;
}
.ts-copy__color-block--grey {
    background-color: #f8f9fa;
}
.ts-copy__color-block--height {
    min-height: inherit;
}
@media all and (min-width: 768px) {
  .ts-copy .ts-grid--alternate {
    grid-row-gap: 40px;
  }
  .ts-copy__text {
      margin: 0 16px 0 0;
  }
  .ts-copy__img:not(.ts-copy--flipped)+.ts-copy__text {
      margin-left: 16px;
  }
  .ts-copy--right {
      order: 2;
  }
  .ts-copy--one-column .ts-copy__text {
      max-width: none;
  }
  .ts-copy--three-column .ts-copy__text {
      max-width: 344px;
  }
  .ts-copy--40-80 .ts-copy__text p:first-child {
      margin-top: 32px;
  }
  .ts-copy--color-block .ts-grid__col {
      margin: 0;
      min-height: 420px;
  }
  .ts-copy--color-block .ts-grid__col .ts-copy__text {
      margin-bottom: 80px;
      margin-top: 80px;
  }
}
@media all and (min-width: 1024px) {
    .ts-copy__icon-2up .ts-copy__icon-row {
    flex-basis: 110px;
}


  .background-servers {
    background: linear-gradient(#253238, #3A464B);
    background-color: #253238;
    background-position: fixed;
    color: var(--app-light-text-color); }

  .ts-max-width-standard {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px; }

  .ts-full-bleed-section, #ts-social-footer.ts-full-bleed-section, .ts-max-width-standard {
    margin-left: -10000px;
    margin-right: -10000px;
    padding-left: 10000px;
    padding-right: 10000px; }

  .background-grey {
    background: var(--app-section-even-color);
  }

  .ts-pad-bottom-12 {
    padding-bottom: 96px; }

  .ts-pad-top-6 {
    padding-top: 3px; }

  .ts-content-body {
    padding: 0px 34px 0 34px; }

  /* CSS Grid - No, we're not using Flexbox this tume */
  /* Simple 1/3 - 2/3 two colum grid justified */

  .ts-header-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 24px 6px 24px; 
  }

  .ts-content-wrapper {
    min-height: 100vh;
    background: var(--app-main-background-color);
    display: flex;
    flex-direction: column;
    padding: 20px 24px 30px 24px; }

  .content {
    flex: 1;
    display: flex;
    flex-wrap: wrap; }

  .main {
    flex: 1;
  }

  .sidebar a, .sidebar a:hover {
    border-bottom: none;
    font-weight: normal;
  }

  .sidebar-selected {
    background: var(--app-nav-background);
    color: var(--app-primary-color);
    text-decoration:none; 
    border-bottom: none; }

  .ts-content-grid-box {
    min-height: 230px; 
    text-align: left; }

  .ts-content-grid-box p, .ts-content-grid-box ul {
    max-width: 525px; 
    text-align: left; }
    
  .ts-grid-wrapper-standard {
    margin: 0px; }

  .inner {
    text-align: center;
    color: var(--app-secondary-color);
    background-color: var(--app-light-text-color);
    padding: 24px 28px 0; }

  .inner a {
    font-size: 0.9rem;
  }

  .inner h3 {
    margin: 5px 0;
  }

  .inner p{
    text-align: center; 
    font-size: 14px;
  }

  .ts-grid-wrapper-auto-fill {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
    justify-items: center;
    margin: 20px; }

  .ts-grid-wrapper-auto-fit {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center; }

  .l-space-bottom-5 {
    margin-bottom: 40px; }

  ul.right-side-nav {
    list-style: none;
    padding-left: 10px; }

  .nav li {
    border-bottom: 1px solid var(--border-grey);
    margin: 0;
    padding: 0; }

  li, li p {
    margin: 8px 0;
    padding: 0; 
    font-size: 1rem; }

  ul.body-checks {
    list-style: none;
    margin-left: 0px;
    padding: 0 4px 0 4px; 
  }

  ul.body-checks li {
    background-image: url('/images/icons/ts-check-purple.svg');
    fill: var(--app-primary-color);
    background-repeat: no-repeat;
    line-height: 24px;
    padding: 5px 0 0 36px;
    background-position: 0px 4px; }

  .ts-icon{
    fill: var(--app-primary-color);
  }

  .nav li h3 {
    font-size: 1.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 20px 0 16px;
    padding-bottom: 0; }

  .nav li a {
    color: var(--app-secondary-color);
    display: block;
    font-size: 0.95rem;
    line-height: 40px;
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap; }

  .nav li a:hover{
    background: var(--app-section-even-color);
    color: var(--app-primary-color);
    text-decoration: none; }

  .l-pad-right-2 {
    padding-right: 16px; }

  .l-pad-left-2 {
    padding-left: 16px; }

  .text-uppercase {
    text-transform: uppercase;
    border-top: 0px; }

  /* Classes - Custom Card Styles */

  .flex-hover-card {
    box-sizing: border-box;
    margin-right: 20px;
    background: var(--app-main-background-color);
    border-radius: 2px;
    -ms-flex: 1;
    flex: 1;
    letter-spacing: .01em;
    transition: all .3s;
    margin-bottom: 16px; }

  .flex-hover-card {
    box-shadow: none;
    margin: 5px 10px;
    padding: 0;
    width: 100%; 
    text-align: left; }

  .flex-hover-card:hover {
    transform: translate3d(0, -2px, 0);
    text-decoration: none; }

  .flex-hover-card:hover {
    box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }

  .flex-hover-card .inner>h3 {
    font-size: 22px;
    margin: 0px 0px 10px 0px; }

  .flex-hover-card .inner>p {
    padding-top: 14px;
    margin: 0px; 
    font-size: 14px;
  }

  .ts-pad-left-30 {
    padding-left: 240px; }

  .ts-pad-right-38 {
    padding-right: 304px; }

  .ts-showcase-content {
    margin: 0 8px; }

  .text-uppercase {
    text-transform: uppercase;
  }

  .ts-hero .content-set {
    margin: 40px 0;
  }



  .ts-products-and-solutions .card-cta-image .ts-button__set {
    margin-bottom: 24px;
  }

  /* All screens larger than 460px */

  @media (min-width: 460px) {

    figure.img-right {
      float:right;
      margin-right: 60px;
    }

    figure.img-right img {
      max-width: 100%;
      margin-top: 28px;
      margin-bottom: 20px;
    }

    h3 {
      text-align: left;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: .15px;
      padding: 0;
    }

    h1.paper-font-display2 {
      font-size: 42px;
      line-height: 44px;
      padding-right: 120px;
      margin-left: -3px; 
    }

    h2.mdc-typography--headline3 {
      font-size: 16px;
      white-space: normal;
      padding-right: 120px; }

    ul.body-checks {
      padding: 0 5px; 
    }

    .center {
      text-align: left !important;
    }

    .sticky {
      display:block;
      width: 228px;
      max-width: 293px;
      padding-top: 0px; }

    .ts-pad-top-6 {
      padding-top: 5px; }

    .ts-content-wrapper {
      min-height: 100vh;
      background: var(--app-main-background-color);
      padding: 0 62px 0 62px;
      display: flex;
      flex-direction: column;
    }

    .ts-grid-wrapper-standard {
      margin: auto auto;
      max-width: 1024px; }
    
    .ts-grid-wrapper-auto-fit {
      grid-gap: 16px;
      padding: 0px; }

    .flex-hover-card {
      width: 300px;
      text-align: left; }

    .inner {
      text-align: left;
      margin-right: 0px; }

    .flex-hover-card .inner>h3 {
      margin: 0;
    }

    .inner p{
      text-align: left; 
      font-size: 14px;
    }

    .text-uppercase {
      font-size:0.9rem;
      text-transform: uppercase;
      text-align: left; 
    }

    .ts-grid-wrapper-autofill, .ts-grid-wrapper-standard {
      padding: 10px; }

    .flex-hover-card {
      margin-bottom: 5px; }

    .ts-grid-wrapper-auto-fill {
      padding: 0px; }

    .ts-content-grid-box {
      text-align: left; }

    .ts-left {
      float: none;
      margin: 0;
      text-align: center;
    }
    .ts-right {
      float: right;
      margin: 24px 30px 5px; }

    .columns {
      display: flex;
      flex-wrap: wrap;
      flex: 1; }  
  }
  body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    max-width: 1400px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-nav-responsive-tabs-panel>.hypersite-nav-responsive-tabs>.hypersite-nav-list>.hypersite-nav-item.hypersite-nav-item-heading:first-child {
    padding: 17px 8px 17px 16px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-nav-responsive-sidebar-panel .hypersite-nav-responsive-back {
    height: 59px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-nav-index-forward {
    display: none
}

body.dropdown-available[data-navigation="dropdown"].not-ts-free-trial-eligible .ts-free-trial-button {
    display: none
}

body.dropdown-available[data-navigation="dropdown"].is-ts-free-trial-eligible .ts-free-trial-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 10px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-wrapper {
    visibility: hidden
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-expanded .hypersite-dropdown-menu-wrapper {
    visibility: visible
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container {
    position: relative
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-dropdown-menu-expanded .hypersite-doc-set-nav-active,
body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-list:hover .hypersite-header-upper-tabs .hypersite-doc-set-nav-tab {
    border-color: transparent
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-doc-set-nav-tab-list:hover .hypersite-doc-set-nav-active,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-active .hypersite-doc-set-nav-active {
    border-color: transparent;
    color: rgba(0, 0, 0, .54)
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-dropdown-menu-expanded .hypersite-doc-set-nav-tab,
body.dropdown-available[data-navigation="dropdown"] .hypersite-top-logo-row .hypersite-nav-tab:hover a.hypersite-nav-tab {
    color: rgba(0, 0, 0, .87)
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-active .hypersite-doc-set-nav-active {
    border-color: transparent
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-dropdown-menu-expanded a.hypersite-nav-tab::after,
body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-nav-tab:hover a.hypersite-nav-tab::after {
    background: url(/images/cloud/icons/png/chevron_down_black.png) no-repeat;
    background-size: 12px;
    bottom: 5px;
    content: "";
    height: 15px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 12px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container {
    cursor: pointer
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab {
    margin: 0 20px 0 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container .hypersite-dropdown-menu-wrapper {
    cursor: default;
    font-size: 12px;
    height: auto;
    left: 0!important;
    max-height: calc(100vh - 56px);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-transition: inherit;
    transition: inherit;
    width: 100%
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab {
    border-width: 3px 0;
    height: 54px;
    margin: 0 10px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-site-logo {
    width: 160px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .cta-button-secondary {
    background: 0;
    border: none;
    display: inline-block;
    margin-left: 15px;
    padding: 0
}

body.dropdown-available[data-navigation="dropdown"] .ts-free-trial-button,
body.dropdown-available[data-navigation="dropdown"] .cta-button-secondary,
body.dropdown-available[data-navigation="dropdown"] .cta-button-primary {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 10px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-product-name-wrapper {
    margin-right: 0
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item-heading:first-child {
    margin-bottom: 32px
}

body.dropdown-available[data-navigation="dropdown"].is-ts-free-trial-eligible .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(3),
body.dropdown-available[data-navigation="dropdown"]:not(.is-ts-free-trial-eligible) .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(4) {
    display: block
}

body.dropdown-available[data-navigation="dropdown"]:not(.is-ts-free-trial-eligible) .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(3),
body.dropdown-available[data-navigation="dropdown"].is-ts-free-trial-eligible .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(4) {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu .hypersite-dropdown-menu-column {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0;
    max-width: 100%;
    position: relative
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title {
    margin-bottom: 4px;
    overflow: visible
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title span {
    pointer-events: none
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-title,
body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-title,
body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-title.hypersite-nav-title-no-path span {
    font-family: Google Sans, Arial, sans-serif
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-dropdown-menu-column .hypersite-nav-item,
body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-dropdown-menu-column .hypersite-nav-item {
    margin-bottom: 32px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-title.hypersite-nav-title-no-path span {
    color: #202124;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-title.hypersite-nav-title-no-path span {
    color: #5f6368;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title span {
    font-size: 16px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1.ts-dropdown-halfwidth {
    width: 50%
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-column .ts-dropdown-inline-links .hypersite-nav-item {
    margin: 0;
    padding-right: 5px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links li:nth-child(n+2) {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links li:nth-child(n+2) .hypersite-nav-title span {
    font-size: 14px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links li:nth-child(n+2) .hypersite-nav-title span:hover {
    color: var(--app-primary-color)
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-section.ts-dropdown-inline-links {
    margin: 0 20px 24px;
    white-space: normal
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links-heading {
    margin: 40px 20px 0
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links-heading .hypersite-nav-item:nth-child(n+2) {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links .hypersite-nav-item:nth-child(n+2) {
    padding-right: 4px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links .hypersite-nav-item:nth-child(n+2) a.hypersite-nav-title {
    color: #5f6368;
    font: 400 12px/20px Roboto, Arial, sans-serif;
    margin-bottom: 0
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links .hypersite-nav-item:nth-child(n+2) .hypersite-nav-title span::after {
    content: "\0000b7"
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links .hypersite-nav-item:last-child .hypersite-nav-title span::after {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-item:nth-child(3) a.hypersite-nav-title span {
    color: var(--app-primary-color);
    font: 14px/22px Google Sans, Arial, sans-serif;
    letter-spacing: 0.5px
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-item:nth-child(3) a.hypersite-nav-title span::after {
    content: url(/images/arrow_forward_3.svg)
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-nav-tab .material-icons {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-x {
    background: url(/images/clear_24px.svg) no-repeat;
    overflow: hidden;
    position: absolute;
    right: 0;
    text-indent: -9999px;
    top: -20px;
    z-index: 100000
}

body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-x .hypersite-nav-item {
    height: 25px;
    margin: 0;
    width: 25px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(1) {
    background: url(/images/why-google/why-google_bg.svg) no-repeat right 40px bottom -50px/50%;
    border-right: 1px solid #d8d8d8;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(3) {
    padding-top: 47px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(2) {
    border-right: 1px solid #d8d8d8;
    padding-top: 48px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(3) {
    border-right: 1px solid #d8d8d8
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5),
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4),
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) {
    bottom: 0;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    left: 0;
    margin: 0;
    max-width: 100%;
    padding: 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5) ul,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4) ul,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) ul {
    margin: 0;
    overflow: visible;
    padding: 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5) ul li,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4) ul li,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) ul li {
    margin: 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5) ul li a,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4) ul li a,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) ul li a {
    color: var(--app-primary-color);
    margin-bottom: 0;
    padding: 20px;
    text-align: center
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5) ul li a::after,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4) ul li a::after,
body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) ul li a::after {
    border-top: 1px solid #d8d8d8;
    bottom: 0;
    content: "";
    height: 55px;
    left: -500px;
    position: absolute;
    width: calc(500px + 100vw)
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(4) {
    background: url(/images/solutions/solutions_bg.svg) no-repeat bottom -1px right 30px/240px;
    margin-bottom: 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(2) {
    border-right: 1px solid #d8d8d8;
    padding-top: 88px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-inline-links-heading {
    margin-bottom: 0
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(3) {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(3) {
    background: url(/images/products/products_bg.svg) no-repeat bottom -2px right 40px/35%
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(1) {
    background: url(/images/pricing/pricing_bg.svg) no-repeat bottom -1px right 30px/40%;
    border-right: 1px solid #d8d8d8;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(2) {
    border-right: 1px solid #d8d8d8
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .ts-dropdown-type1 .hypersite-nav-item:nth-child(3) .hypersite-nav-title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #dadce0;
    border-radius: 4px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-top: 12px;
    padding: 10px 25px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .ts-dropdown-type1 .hypersite-nav-item:nth-child(3) .hypersite-nav-title span::after {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) {
    background: url(/images/getting-started/getting-started_bg.svg) no-repeat bottom -1px right 30px/40%;
    border-right: 1px solid #d8d8d8;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(2) {
    border-right: 1px solid #d8d8d8
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(3) a.hypersite-nav-title,
body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(4) a.hypersite-nav-title {
    background-color: var(--app-primary-color);
    border-radius: 4px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    margin-top: 12px;
    padding: 11px 24px
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(3) a.hypersite-nav-title span,
body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(4) a.hypersite-nav-title span {
    color: #fff
}

body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .hypersite-nav-item:nth-child(3) a.hypersite-nav-title span::after {
    display: none
}

body.dropdown-available[data-navigation="dropdown"] .flex-double-row {
    margin-top: -64px
}

body.dropdown-available[data-navigation-updates] .single-row .hypersite-main-content {
    margin-top: 59px!important
}

body.dropdown-available[data-navigation-updates] .double-row .hypersite-main-content {
    margin-top: 117px!important
}

body.dropdown-available[data-navigation-updates]:not(.hypersite-full-width-page) .single-row {
    margin-top: 119px
}

body.dropdown-available[data-navigation-updates]:not(.hypersite-full-width-page) .double-row {
    margin-top: 169px
}

body.dropdown-available[data-navigation-updates] .no-navigation .hypersite-main-content {
    margin-top: 0!important
}

body.dropdown-available[data-navigation-updates] .single-row .ts-jump-menu.attached.is-dropdown {
    top: 59px!important
}

body.dropdown-available[data-navigation-updates] .double-row .ts-jump-menu.attached {
    top: 117px!important
}

body.dropdown-available[data-navigation-updates] .hypersite-header-upper-tabs ul.hypersite-doc-set-nav-tab-list.hypersite-overflow-tabs-scroll {
    display: inline
}

@media (min-width:1352px) {
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab {
        height: 59px;
        margin: 0 14px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .hypersite-doc-set-nav-tab {
        height: 60px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-row>.hypersite-secondary-branding {
        font: 400 20px/26px Google Sans, sans-serif
    }
}

@media (min-width:1202px) {
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-section {
        margin: 40px 20px 12px;
        overflow: auto
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-title.hypersite-nav-title-no-path span {
        font-size: 28px;
        line-height: 36px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-title.hypersite-nav-title-no-path span {
        font-size: 13px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title {
        font-family: Google Sans, Arial, sans-serif;
        font-size: 16px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2.ts-dropdown-links-only .hypersite-nav-item:nth-child(n+2) {
        margin: 0 0 22px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item-description {
        font: 400 14px/24px Roboto, Arial, sans-serif
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(3) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description {
        font-size: 14px;
        line-height: 24px
    }
}

@media (min-width:1202px) {
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-section.ts-dropdown-inline-links,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-column .hypersite-nav-item {
        margin-bottom: 32px
    }
}

@media (max-width:1001px) {
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1.ts-dropdown-halfwidth {
        width: 95%
    }
}

@media (max-width:720px) {
    body.dropdown-available[data-navigation="dropdown"] .hypersite-nav-tab {
        display: none
    }
}

@media (max-width:1351px) {
    body.dropdown-available[data-navigation-updates] .nav-secondary-branding .hypersite-main-content {
        margin-top: 117px!important
    }
    body.dropdown-available[data-navigation-updates]:not(.hypersite-full-width-page) .nav-secondary-branding .hypersite-main-content {
        margin-top: 169px!important
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-expanded .hypersite-dropdown-menu-wrapper {
        top: 56px!important
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-top-logo-row .hypersite-product-name-wrapper {
        margin-right: -4px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-top-logo-row,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-row {
        height: 58px!important
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-top-logo-row {
        padding: 0 16px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-row>.hypersite-secondary-branding {
        font-size: 18px
    }
    body.dropdown-available[data-navigation="dropdown"]:not([data-navigation-updates]) #gc-wrapper.flex-double-row {
        margin-top: -74px
    }
    body.dropdown-available[data-navigation="dropdown"]:not([data-navigation-updates]) #gc-wrapper {
        margin-top: -12px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-header-upper-tabs .cta-button-secondary {
        margin: 0 14px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-free-trial-button,
    body.dropdown-available[data-navigation="dropdown"] .cta-button-secondary,
    body.dropdown-available[data-navigation="dropdown"] .cta-button-primary {
        height: 36px;
        margin: auto 0 auto 10px;
        padding: 0 16px
    }
}

@media (min-width:721px) and (max-width:1000px) {
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(1) {
        border-right: 1px solid #d8d8d8
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(2) {
        display: none
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(1),
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(4),
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(3),
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(1),
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) {
        background: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        padding: 20px
    }
}

@media (min-width:721px) and (max-width:1201px) {
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title span {
        font-size: 14px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(5) ul li a::after,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(4) ul li a::after,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(4) ul li a::after {
        height: 64px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-section.ts-dropdown-inline-links,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-column .hypersite-nav-item {
        margin-bottom: 24px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links li:nth-child(n+2) .hypersite-nav-title span {
        font-size: 12px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu .hypersite-dropdown-menu-column {
        padding: 20px 10px 0
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item-heading:first-child {
        margin-bottom: 24px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-title.hypersite-nav-title-no-path span {
        font-size: 12px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-top-logo-row .hypersite-overflow-tabs-scroll-button {
        height: 56px;
        line-height: 46px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(3),
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(2) {
        padding-top: 60px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(3):not(:first-child).hypersite-nav-item,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(3) .hypersite-dropdown-menu-column:nth-child(4):not(:first-child).hypersite-nav-item,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(3):not(:first-child).hypersite-nav-item {
        margin-bottom: 10px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(2) {
        border-right: 1px solid #d8d8d8;
        padding-top: 72px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type2 .hypersite-nav-item a.hypersite-nav-title span {
        font: 400 14px/24px Google Sans, Arial, sans-serif
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links li:nth-child(n+2) .hypersite-nav-title span {
        color: #5f6368;
        font: 400 12px/20px Roboto, Arial, sans-serif
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-x {
        top: 0
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-inline-links-heading {
        margin: 12px 12px 16px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-section.ts-dropdown-inline-links {
        margin: 0 12px 16px
    }
    body.dropdown-available[data-navigation="dropdown"] .ts-dropdown-type1 .hypersite-nav-title.hypersite-nav-title-no-path span {
        font-size: 22px;
        line-height: 30px
    }
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(2) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-dropdown-menu-container:nth-child(4) .hypersite-dropdown-menu-column:nth-child(3) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(5) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description,
    body.dropdown-available[data-navigation="dropdown"] .hypersite-doc-set-nav-tab-container:nth-child(6) .hypersite-dropdown-menu-column:nth-child(1) .ts-dropdown-type1 .hypersite-nav-item-description {
        font-size: 12px;
        line-height: 18px
    }
}

@media (max-width:1279px) {
    body.dropdown-available[data-navigation="dropdown"] .ts-jump-menu.attached {
        top: 116px
    }
}
`;