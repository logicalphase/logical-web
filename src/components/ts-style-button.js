

import { css } from 'lit-element';

export const TsButtonStyle = css`
  .ts-button {
      align-items: center;
      border: 0;
      border-radius: 4px;
      box-shadow: none;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-flex;
      font: 500 14px "Roboto", Arial, sans-serif;
      height: 44px;
      justify-content: center;
      letter-spacing: .5px;
      min-width: auto;
      outline: none;
      padding: 0 24px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      transition: none;
      vertical-align: inherit;
  }
  .ts-button:disabled, .ts-button:disabled:focus, .ts-button:disabled:hover {
      background-color: #dadce0;
      border-color: #dadce0;
      color: #fff;
      cursor: default;
  }
  .ts-button:active {
      box-shadow: none;
  }
  .ts-button:focus {
      text-decoration: none;
  }
  .ts-button--primary {
      background-color: var(--app-primary-color);
      color: #fff;
  }
  .ts-button--primary:hover {
      background-color: var(--app-primary-hover-color);
  }
  .ts-button--primary:active, .ts-button--primary:focus {
      background-color: var(--app-primary-color);
  }
  .ts-button--primary:active::before, .ts-button--primary:focus::before {
      background-color: #fff;
      content: "";
      height: 100%;
      opacity: .24;
      position: absolute;
      width: 100%}
  .ts-button--primary.ts-button--reversed {
      background-color: #fff;
      color: #000;
  }
  .ts-button--primary.ts-button--reversed:focus, .ts-button--primary.ts-button--reversed:hover {
      background-color: rgba(255, 255, 255, .7);
  }
  .ts-button--secondary {
      background-color: #fff;
      border: 1px solid #dadce0;
      color: var(--app-primary-color);
      padding: 0 23px;
  }
  .ts-button--secondary:active, .ts-button--secondary:focus, .ts-button--secondary:hover {
      border-color: #d2e3fc;
  }
  .ts-button--secondary:hover {
      background-color: #eff5fd;
  }
  .ts-button--secondary:active, .ts-button--secondary:focus {
      background-color: #d8e7fb;
  }
  .ts-button--secondary.ts-button--dark, .ts-button--secondary.ts-button--reversed {
      background-clip: padding-box;
      background-color: transparent;
      padding-left: 22px;
      padding-right: 22px;
  }
  .ts-button--secondary.ts-button--reversed {
      border-color: #fff;
      border-width: 2px;
      color: #fff;
  }
  .ts-button--secondary.ts-button--reversed:active, .ts-button--secondary.ts-button--reversed:focus, .ts-button--secondary.ts-button--reversed:hover {
      background-color: rgba(255, 255, 255, .7);
      border-color: rgba(255, 255, 255, .7);
      color: #000;
  }
  .ts-button--flat {
      border-radius: 0;
      color: var(--app-primary-color);
      height: auto;
      padding: 0;
  }
  .ts-button--flat:visited {
      color: #7b1fa2;
  }
  .ts-button--flat:focus, .ts-button--flat:hover {
      color: var(--app-primary-color);
  }
  .ts-button--flat:focus {
      background-color: #f1f3f4;
      outline: 10px solid #f1f3f4;
  }
  .ts-button--flat .ts-button__icon {
      display: inherit;
      font-size: 16px;
      padding-left: 4px;
  }
  .ts-button--flat .ts-button__icon--external {
      transform: rotate(-45deg);
  }
  .ts-button--flat .ts-button__icon--jump {
      padding-bottom: 4px;
      padding-left: 0;
      transform: rotate(90deg);
  }
  .ts-button--flat .ts-button__icon--jump-back {
      padding-left: 0;
      padding-top: 4px;
      transform: rotate(270deg);
  }
  .ts-button--flat__heading {
      font-family: Roboto,  Arial,  sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 30px;
      margin: 0;
      color: #202124;
      text-transform: none;
  }
  @media all and (min-width: 600px) {
      .ts-button--flat__heading {
      font-size: 22px;
  }
  }.ts-button--flat__heading .ts-button__icon {
      color: var(--app-primary-color);
      font-size: 20px;
  }
  .ts-button--flat__heading:focus, .ts-button--flat__heading:hover {
      color: #202124;
  }
  .ts-button--flat__heading:focus .ts-button__icon, .ts-button--flat__heading:hover .ts-button__icon {
      color: #174ea6;
  }
  .ts-button--flat svg {
      fill: currentColor;
      height: 24px;
      width: 24px;
  }
  .ts-button--flat.ts-button--reversed {
      color: #fff;
  }
  .ts-button--flat.ts-button--reversed:hover {
      color: rgba(255, 255, 255, .7);
  }
  .ts-button--flat.ts-button--reversed:focus {
      background-color: #f1f3f4;
      color: #202124;
      outline: 10px solid #f1f3f4;
  }
  .ts-button--flat.ts-button--reversed .ts-button__icon {
      color: inherit;
  }
  .ts-button--flat.ts-button--dark:focus {
      outline: 10px solid rgba(32, 33, 36, .2);
  }
  .ts-button--flat.ts-button--dark .ts-button__icon {
      color: inherit;
  }
  .ts-button.ts-button--dark {
      border-color: rgba(32, 33, 36, .4);
      color: #202124;
  }
  .ts-button.ts-button--dark:hover {
      color: rgba(32, 33, 36, .7);
  }
  .ts-button.ts-button--dark:focus {
      background-color: rgba(32, 33, 36, .2);
  }
  .ts-button__icon--no-wrap {
      align-items: inherit;
      display: inherit;
      justify-content: inherit;
      white-space: nowrap;
  }
  .ts-button-fab {
      align-items: center;
      background-color: var(--app-primary-color);
      border-radius: 50%;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
      display: inline-flex;
      height: 56px;
      justify-content: center;
      outline: none;
      text-decoration: none;
      transition: background-color 280ms cubic-bezier(0.4,  0,  0.2,  1), 280ms cubic-bezier(0.4,  0,  0.2,  1);
      width: 56px;
      will-change: box-shadow, background;
  }
  .ts-button-fab:focus, .ts-button-fab:hover {
      background-color: #174ea6;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
      text-decoration: none;
  }
  .ts-button-fab--red {
      background-color: #d93025;
  }
  .ts-button-fab--red:focus, .ts-button-fab--red:hover {
      background-color: #a50e0e;
  }
  .ts-button-fab .material-icons {
      background: transparent;
      color: #fff;
  }
  .ts-button__set .ts-button {
      margin-right: 16px;
      margin-top: 16px;
  }
  .ts-button__set .ts-button:first-child {
      margin-top: 24px;
  }
  .ts-button__set .ts-button:last-child {
      margin-right: 0;
  }
  span.ts-button, span.ts-button--flat, span.ts-button--flat.ts-button--reversed {
      cursor: inherit;
  }
  span.ts-button, span.ts-button--flat, span.ts-button--flat.ts-button--reversed, span.ts-button--flat.ts-button--reversed:focus, span.ts-button--flat.ts-button--reversed:hover, span.ts-button--flat:focus, span.ts-button--flat:hover, span.ts-button:focus, span.ts-button:hover {
      background-color: transparent;
      color: inherit;
      outline: none;
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
    background-image: url('https://cdn1-themesurgesonslt.netdna-ssl.com/images/bg/icon-send.svg'); }

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
    letter-spacing: .5px;
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

  .mdc-button--raised {
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }

  .mdc-button--raised, .mdc-button--unelevated {
      padding: 0 16px 0 16px; }

  .mdc-button--raised:hover, .mdc-button--raised:focus {
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12); }

  .mdc-button--raised.mdc-ripple-upgraded, .mdc-button--unelevated.mdc-ripple-upgraded {
      --mdc-ripple-fg-opacity: .32; }

  @media (min-width: 460px) {
    .center-button {
      margin: 0 auto;
      width: 100%;
      text-align: left; 
      margin-top: 24px; 
    }

    .button a, .center-button a {
      border-bottom:none;
    }
  }
`;