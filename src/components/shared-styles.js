import { css } from 'lit-element';


export const SharedStyles = css `
  :host {
    display:none;
  }
  /* All screens smaller than 460px wide */

  /* Base Styles */

  /* Box model */
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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
    font-weight: 500;
    margin-bottom: 5px;
    border-bottom: 3px solid var(--app-primary-color);
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
  }



  .article-button {
    display: inline-block;
    margin-right: 8px;
    padding: 8px 44px;
    border: 2px solid var(--app-dark-text-color);
    box-sizing: border-box;
    background-color: transparent;
    color: var(--app-dark-text-color);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: none;
  }
  .article-button:active {
    background-color: var(--app-dark-text-color);
    color: var(--app-light-text-color);
    border-bottom: none;
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

  /* Material Design Styles */

  .mdc-typography {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased; }

  .mdc-typography--headline1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.5rem;
    line-height: 2.7rem;
    font-weight: 300;
    letter-spacing: -0.01562em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 300;
    letter-spacing: -0.00833em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.3rem;
    line-height: 1.325rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline4 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.00735em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline5 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline6 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--subtitle1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.00937em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--subtitle2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.00714em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--body1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--body2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.01786em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--caption {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.03333em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--button {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.08929em;
    text-decoration: none;
    text-transform: uppercase; }

  .mdc-typography--overline {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.16667em;
    text-decoration: none;
    text-transform: uppercase; }

  .mdc-elevation--z0 {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z1 {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z3 {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z6 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z7 {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z8 {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z9 {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z10 {
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z11 {
    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z12 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z13 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z14 {
    box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z15 {
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z16 {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z17 {
    box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z18 {
    box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z19 {
    box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z20 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z21 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z22 {
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z23 {
    box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z24 {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }

  .mdc-elevation-transition {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow; }

  /* Custom Font Weights */

  .paper-font-light {
    font-weight: 300; }

  .paper-font-medium {
    font-weight: 400; }

  .paper-font-semibold {
    font-weight: 500; }

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

  /* Classes - Custom Buttons */

  .button-secondary-cta, .button-primary-cta {
    line-height: 30px;
    max-height: 30px; }

  .button.button-primary-cta {
    background: transparent;
    border: 2px solid var(--app-primary-color);
    color: var(--app-primary-color); }

  .button.button-secondary-cta {
    background: var(--app-primary-color);
    border: 2px solid var(--app-primary-color);
    color: var(--app-light-text-color); }

  .button.button-primary-cta:hover, .button.button-primary-cta:active {
    background: var(--app-primary-color); }

  .button.button-secondary-cta:hover, .button.button-secondary-cta:active {
    color: var(--app-light-text-color);
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  .button.button-logo.ts-button {
    background-image: url(/images/bg/icon-send.svg); }

  .button.button-logo {
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    padding: 0 48px 0 62px; }

  .hero .button, .button .button-logo {
    background: var(--app-primary-color) 16px 50% no-repeat;
    color: var(--app-light-text-color);
    padding: 0 40px 0 62px; }

  .button a, .button a:hover {
    border-bottom:none !important;
  }

  .button:hover {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  .button {
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: auto;
    letter-spacing: .05em;
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); 
    transition: box-shadow .3s, background-color .3s, color .3s, transform .3s; }

  .button-secondary-cta,  .button-primary-cta {
    line-height: 0px; }

  .button.button-primary-cta {
    background: transparent;
    border: 2px solid var(--app-primary-color);
    color: var(--app-light-text-color); }

  .button.button-secondary-cta {
    background: var(--app-primary-color);
    border: 2px solid var(--app-primary-color);
    color: var(--app-light-text-color);
    margin: 24px 0; 
    padding: 24px 24px; }

  .button.button-primary-cta:hover, .button.button-primary-cta:active {
    background: var(--app-primary-color); }

  .button.button-secondary-cta:hover, .button.button-secondary-cta:active {
    color: var(--app-light-text-color);
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

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
    background: var(--app-section-even-color);
    display: flex;
    flex-direction: column;
    padding: 0 5px 0 15px; }

  .content {
    flex: 1;
    background: var(--app-section-even-color);
    display: flex;
    flex-wrap: wrap; }

  .main {
    flex: 1;
    background: var(--app-section-even-color); }

  .sidebar {
    background: var(--app-section-even-color); }

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
    text-align: center; }

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
    padding: 0 24px 0 24px; 
  }

  ul.body-checks li {
    background-image: url(/images/icons/ts-check-purple.svg);
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
    background: var(--app-nav-background);
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
    background: var(--app-light-text-color);
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
    margin: 0px; }

  .ts-pad-left-30 {
    padding-left: 240px; }

  .ts-pad-right-38 {
    padding-right: 304px; }

  .ts-showcase-content {
    margin: 0 8px; }

  .text-uppercase {
    text-transform: uppercase;
  }

  .mdc-button--raised {
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }

  .mdc-button--raised, .mdc-button--unelevated {
      padding: 0 16px 0 16px; }

  .mdc-button--raised:hover, .mdc-button--raised:focus {
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12); }

  .mdc-button--raised.mdc-ripple-upgraded, .mdc-button--unelevated.mdc-ripple-upgraded {
      --mdc-ripple-fg-opacity: .32; }

  /* All screens larger than 460px */

  @media (min-width: 460px) {
    header {
      background-color: var(--app-light-text-color);
    }

    h3 {
      text-align: left;
      font-size: 20px;
      font-weight: 500;
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

    .center-button {
      margin: 0 auto;
      width: 100%;
      text-align: left; 
      margin-top: 24px; 
    }

    .button a, .center-button a {
      border-bottom:none;
    }

    .ts-pad-top-6 {
      padding-top: 5px; }

    .ts-content-wrapper {
      min-height: 100vh;
      background: var(--app-section-even-color);
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
      text-align: left; }

    .flex-hover-card .inner>h3 {
      margin: 0;
    }

    .inner p{
      text-align: left; }

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