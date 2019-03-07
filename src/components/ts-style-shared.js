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

  figure.img-right {
      float:none;
      margin: auto auto;
  }
  figure.img-right img {
      float:none;
      margin: auto auto;
      max-width: 80%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--app-dark-text-color); 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 10px 0; }

  h1, h2, h3, h4, h5, h6, a {
    text-rendering: optimizeLegibility; }

  h1.paper-font-display2 {
    font-size: 42px;
    line-height: 44px;
    padding-right: 0px; 
    letter-spacing: .5px;
  }

  h2.paper-font-title {
    font-size: 22px;
    white-space: normal;
    padding-right: 0px; }

  h3 {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -.012em;
    line-height: 31px; 
    text-align: center;
    padding: 0 14px 0 14px;
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
    line-height: 28px;
    margin: 0 0 16px 0;
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

  .hero>div {
    padding: 20px 24px 30px 24px;
    text-align: center; }

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
    border-bottom: 1px solid var(--border-grey);
  }

  .ts-header-wrapper h1, .ts-header-wrapper h2 {
    padding-bottom: 10px;
  }

  .ts-content-wrapper {
    min-height: 100vh;
    background: var(--app-main-background-color);
    display: flex;
    flex-direction: column;
    padding: 0 15px 0 15px; }

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
    text-align: center; }

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
    background-image: url('https://cdn1-themesurgesonslt.netdna-ssl.com/images/icons/ts-check-purple.svg');
    background-repeat: no-repeat;
    line-height: 24px;
    padding: 5px 0 0 36px;
    background-size: 22px 16px;
    background-position: 0px 8px; }

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



  /* All screens larger than 460px */

  @media (min-width: 460px) {
    header {
      background-color: var(--app-light-text-color);
    }

    figure.img-right {
      float:right;
      margin-right: 60px;
    }

    figure.img-right img {
      max-width: 100%;
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

    .hero>div {
      min-height: 180px;
      padding: 50px 62px 46px 62px;
      text-align: left; 
      border-bottom: 1px solid var(--border-grey);
    }

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
`;