define(["exports","./ts-app.js"],function(_exports,_tsApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.TsTextAreaStyle=_exports.TsSelectStyle=_exports.TsInputStyle=_exports.TsFormStyle=_exports.$tsStyleTextarea=_exports.$tsStyleSelect=_exports.$tsStyleInput=_exports.$tsStyleForm=void 0;const TsFormStyle=_tsApp.css`
  :host {
    display: block;
  }
  .main-frame {
    margin: 0 auto;
    padding: 0 24px 48px 24px;
    max-width: 900px;
    overflow: hidden;
  }
  .empty-cart {
    text-align: center;
    white-space: nowrap;
    color: var(--app-secondary-color);
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 14px;
  }
`;_exports.TsFormStyle=TsFormStyle;var tsStyleForm={TsFormStyle:TsFormStyle};_exports.$tsStyleForm=tsStyleForm;const TsInputStyle=_tsApp.css`
  ts-input {
    display: inline-block;
    margin: 5px 0px 5px 0px;
  }
  ts-input > input::-webkit-input-placeholder {
    color: transparent;
  }
  ts-input > input::-moz-placeholder {
    color: transparent;
  }
  ts-input > input:-ms-input-placeholder {
    color: transparent;
  }
  ts-input > input::-ms-input-placeholder {
    color: transparent;
  }
  ts-input > input {
    font-size: 1em;
    font-weight: 300;
    color: var(--app-secondary-color);
    border: none;
    padding: 8px 0;
    width: 100%;
    outline: none;
  }
  ts-input > input:invalid {
    /* reset the default style in FF */
    box-shadow: none;
  }
  ts-input > ts-md-decorator {
    display: block;
    height: 1px;
    width: 100%;
    margin: auto;
    border-top: 1px solid #ccc;
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ts-input ts-underline {
    display: block;
    height: 2px;
    width: 100%;
    margin: auto;
    background-color: var(--app-accent-color);
    position: absolute;
    top: -1px;
    left: 0;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  /* input label */
  ts-input > ts-md-decorator > label {
    display: block;
    pointer-events: none;
    opacity: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
    will-change: transform;
    -webkit-transform: translate3d(0px, -1.9em, 0px);
    transform: translate3d(0px, -1.9em, 0px);
  }
  /* Error message */
  ts-input > ts-md-decorator::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0.65em;
    color: #dd2c00;
    content: attr(error-message);
    display: none;
    white-space: nowrap;
  }
  ts-input > input:focus + ts-md-decorator > ts-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Label: valid state */
  ts-input > input:focus + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-input > input:optional:not(:placeholder-shown) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  _:-ms-lang(x), ts-input > input + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-input > input:optional:-moz-ui-valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  /* Underline */
  ts-input > input:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-input > input:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-input > input[aria-invalid='true']:not(:valid) + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Error message */
  ts-input > input:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator::after {
    display: block;
  }
  ts-input > input:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator::after {
    display: block;
  }
  ts-input > input[aria-invalid='true']:not(:valid) + ts-md-decorator::after {
    display: block;
  }
  /* Error label */
  ts-input > input:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-input > input:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-input > input[aria-invalid='true']:not(:valid) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  /* Valid label */
  ts-input > input:not(:focus):required:valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
`;_exports.TsInputStyle=TsInputStyle;var tsStyleInput={TsInputStyle:TsInputStyle};_exports.$tsStyleInput=tsStyleInput;const TsSelectStyle=_tsApp.css`
  ts-select {
    display: inline-block;
    margin: 10px 0px 20px 0px;
    position: relative;
    /* create a layer to avoid invalidation from other controls*/
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ts-select > ts-md-decorator {
    display: block;
    border-top: 1px solid var(--app-primary-border-color);
    height: 1px;
    speak: none;
  }
  ts-select > ts-md-decorator::after {
    content: '\\25BC';
    display: block;
    position: absolute;
    bottom: calc(50% - 0.75em);
    right: 8px;
    speak: none;
    -webkit-transform: scaleY(.6);
    transform: scaleY(.6);
    color: var(--app-secondary-color);
    pointer-events: none;
  }
  ts-select > select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0px 24px 10px 0;
    border: none;
    background-color: transparent;
    border-radius: 0;
    font-size: 1em;
    font-weight: 300;
    color: var(--app-form-text-color);
    opacity: 1;
    overflow: hidden;
    margin: 0;
    outline: none;
  }
  ts-select > select::-ms-expand {
    display: none;
  }
  ts-select > ts-md-decorator > ts-underline {
    display: block;
    background-color: var(--app-accent-color);
    height: 2px;
    position: relative;
    top: -1px;
    width: 100%;
    margin: auto;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  ts-select > select:focus + ts-md-decorator > ts-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-select > select:focus + ts-md-decorator::before,
  ts-select > select:focus + ts-md-decorator::after,
  ts-select > select:focus {
    color: black;
  }
  /* hide the focus ring in firefox */
  ts-select > select:focus:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 var(--app-secondary-color);
  }
  ts-select > [prefix] {
    position: absolute;
    left: 0px;
    top: calc(50% - 8px);
    line-height: 16px;
    color: var(--app-secondary-color);
    opacity: 1;
    pointer-events: none;
  }
`;_exports.TsSelectStyle=TsSelectStyle;var tsStyleSelect={TsSelectStyle:TsSelectStyle};_exports.$tsStyleSelect=tsStyleSelect;const TsTextAreaStyle=_tsApp.css`
  ts-textarea {
    display: inline-block;
    margin: 5px 0px 5px 0px;
  }
  ts-textarea > textarea::-webkit-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea::-moz-placeholder {
    color: transparent;
  }
  ts-textarea > textarea:-ms-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea::-ms-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea {
    font-size: 1em;
    font-weight: 300;
    color: var(--app-secondary-color);
    border: none;
    padding: 0px 0px;
    height: 14px;
    width: 100%;
    outline: none;
  }
  ts-textarea > textarea:invalid {
    /* reset the default style in FF */
    box-shadow: none;
  }
  ts-textarea > ts-md-decorator {
    display: block;
    height: 1px;
    width: 100%;
    margin: auto;
    border-top: 1px solid #ccc;
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ts-textarea ts-underline {
    display: block;
    height: 2px;
    width: 100%;
    margin: auto;
    background-color: var(--app-accent-color);
    position: absolute;
    top: -1px;
    left: 0;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  /* textarea label */
  ts-textarea > ts-md-decorator > label {
    display: block;
    pointer-events: none;
    opacity: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
    will-change: transform;
    -webkit-transform: translate3d(0px, -1.9em, 0px);
    transform: translate3d(0px, -1.9em, 0px);
  }
  /* Error message */
  ts-textarea > ts-md-decorator::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0.65em;
    color: #dd2c00;
    content: attr(error-message);
    display: none;
    white-space: nowrap;
  }
  ts-textarea > textarea:focus + ts-md-decorator > ts-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Label: valid state */
  ts-textarea > textarea:focus + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-textarea > textarea:optional:not(:placeholder-shown) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  _:-ms-lang(x), ts-textarea > textarea + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-textarea > textarea:optional:-moz-ui-valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  /* Underline */
  ts-textarea > textarea:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Error message */
  ts-textarea > textarea:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator::after {
    display: block;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator::after {
    display: block;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator::after {
    display: block;
  }
  /* Error label */
  ts-textarea > textarea:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  /* Valid label */
  ts-textarea > textarea:not(:focus):required:valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
`;_exports.TsTextAreaStyle=TsTextAreaStyle;var tsStyleTextarea={TsTextAreaStyle:TsTextAreaStyle};_exports.$tsStyleTextarea=tsStyleTextarea;const cdnHost=(0,_tsApp.unsafeCSS)(_tsApp.HP_HOST);class TSContact extends _tsApp.PageViewElement{static get styles(){return[_tsApp.SharedStyles,_tsApp.TsTypographyStyle,_tsApp.TsLayoutStyle,_tsApp.TsGridStyle,_tsApp.TsCard,_tsApp.TsButtonStyle,TsFormStyle,TsInputStyle,TsSelectStyle,TsTextAreaStyle,_tsApp.css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      #contactForm {
        margin-top: 40px;
      }

      h3 {
        padding-top: 20px; }

      ts-button > * {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid var(--app-secondary-color);
        background-color: var(--app-light-text-color);
        font-size: 1rem;
        font-weight: 500;
        color: var(--app-secondary-color);
        margin: 0;
        padding: 8px 44px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        margin-top:14px;
        width:100%;
      }

      ts-input, ts-select, ts-textarea {
        width: 100%;
      }

      @media (min-width: 460px) {
        ts-input, ts-select, ts-textarea {
          margin-bottom: 20px;
        }
        paper-spinner-lite {
          position: fixed;
          top: calc(50% - 14px);
          left: calc(50% - 14px);
        }

        .hero {
          background: var(--app-reverse-text-color) url('/images/header/ts-care-header-opt.svg') no-repeat;
          background-size: 380px;
          background-position: 93% 80px;
        }

        .hero>div {
          min-height: 120px;  
        }

        .ts-contact-body {
          margin-bottom: 24px;
        }

        .ts-contact-wrapper {
          background-color: var(--app-light-text-color);
          border-top: 1px solid #ccc;
        }

        .ts-contact-body h2 {
          margin-bottom: 16px;
        }

        #ts-site .ts-pad-right-4 {
          padding-right: 32px;
        }

        .main-frame {
          transition: opacity 0.5s;
        }
        .main-frame.waiting {
          opacity: 0.1;
        }
        ts-input, ts-select, ts-textarea {
          font-size: 1.15rem;
        }
        .billing-address-picker {
          margin: 28px 0;
          height: 20px;
          display: flex;
        }
        .billing-address-picker > label {
          margin-left: 12px;
        }
        .grid {
          margin-top: 40px;
          display: flex;
        }
        .grid > section {
          flex: 1;
        }
        .grid > section:not(:first-child) {
          margin-left: 80px;
        }
        .row {
          display: flex;
          align-items: flex-end;
        }
        .column {
          display: flex;
          flex-direction: column;
        }
        .row > .flex,
        .input-row > * {
          flex: 1;
        }
        .input-row > *:not(:first-child) {
          margin-left: 8px;
        }
        label.ts-select-label {
          line-height: 20px;
          color: #ccc;
        }
        .order-summary-row {
          line-height: 24px;
        }
        .total-row {
          font-weight: 500;
          margin: 30px 0;
        }

        @media (max-width: 767px) {
        .grid {
            display: block;
            margin-top: 0;
          }
        .grid > section:not(:first-child) {
            margin-left: 0;
          }

        .ts-right {
          float: none !important;
          margin: 24px 30px 5px; }
        } 
      }
    `]}render(){(0,_tsApp.updateMetadata)({title:"Contact a WordPress Exxpert - Logical Phase",description:"We're experts at relocating WordPress"});const requestip=location.hostname,{_response,_state,_waiting}=this;return _tsApp.html`
    <div class="hypersite-main-content clearfix">
    <article id="ts-site" class="ts-contact">
      <header class="ts-hero hero">
        <div class="ts-grid">
          <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
            <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
              <div class="fade-in content-set">
                <h1 class="ts-section-header__eyebrow ts-eyebrow">Contact us</h1>
                <h2 class="ts-display3">Let's get acquainted</h2>
                <p class="ts-headline4 ts-why-hyperpress__intro-text">Fast, reliable, WordPress hosting and managed services you can trust.</p>
              </div>
            </header>
          </div>
          <div class="cloud-grid__col is-5"></div>
        </div>
      </header>
      <div class="ts-contact-wrapper delayed-fade-in">
        <div class="${_waiting?"main-frame waiting":"main-frame"}">
          <div state="init">
            <form id="contactForm">
              <input type="hidden" id="requestip" name="requestip" value="${requestip}">
              <div class="subsection grid">
                <section>
                  <div class="row input-row">
                    <ts-input>
                    <input type="text" id="first_name" name="first_name" pattern=".{3,}"
                            placeholder="First name" autofocus required
                            autocomplete="first-name">
                        <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                        <label for="first_name">First name</label>
                          <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                    <ts-input> 
                    <input type="text" id="last_name" name="last_name" pattern=".{3,}"
                            placeholder="Last name" required
                            autocomplete="last-name">
                      <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                      <label for="last_name">Last name</label>
                        <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                  <ts-input>
                    <input type="email" id="email" name="email"
                        placeholder="Email" required
                        aria-labelledby="EmailLabel InfoHeading">
                    <ts-md-decorator error-message="Invalid Email" aria-hidden="true">
                    <label id="EmailLabel">Email</label>
                     <ts-underline></ts-underline>
                    </ts-md-decorator>
                  </ts-input>
                  </div>
                  <div class="column">
                    <ts-select>
                      <select id="type" name="type" required
                          autocomplete="contact type"
                          aria-labelledby="typeLabel typeHeading">
                        <option value="general" selected>General</option>
                        <option value="hosting">Hosting</option>
                        <option value="design">Web Design</option>
                        <option value="pagespeed">PageSpeed</option>
                        <option value="emergency">Emergency</option>
                        <option value="security">Security</option>
                        <option value="migration">Site Migration</option>
                        <option value="press">Press Inquiry</option>
                      </select>
                      <ts-md-decorator aria-hidden="true">               
                      <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-select>
                  </div>
                </section>
                <section>
                  <div class="row input-row">
                    <ts-input>
                      <input type="url" id="website" name="website"
                          placeholder="https://yoursite.com" required
                          aria-labelledby="WebsiteLabel InfoHeading">
                      <ts-md-decorator error-message="Invalid URL" aria-hidden="true">
                        <label id="WebsiteLabel">Website URL</label>
                        <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                    <ts-textarea style="margin-top:20px;">
                      <textarea id="description" name="description" 
                          placeholder="Description" required 
                          aria-labelledby="DescriptionLabel InfoHeading"></textarea>
                      <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                          <label ID="DescriptionLabel">Description</label>
                          <ts-underline></ts-underline>
                        </ts-md-decorator>
                    </ts-textarea>
                  </div>
                  <ts-button responsive id="submitBox">
                    <input type="button" @click="${e=>this._submit()}" value="Submit Inquiry">
                  </ts-button>
                </section>
              </div>
            </form>
          </div>  
        </div>
      </div>
    </article>
    </div> 
  <!-- Show spinner when waiting for the server to repond -->
  <paper-spinner-lite ?active="${_waiting}"></paper-spinner-lite>
  `}static get properties(){return{_waiting:{type:Boolean},_type:{type:String},_response:{type:Object}}}stateChanged(state){this._type=state.contact.type}_submit(){const contactForm=this.shadowRoot.querySelector("#contactForm");if(this._validateForm(contactForm)){this._sendRequest(contactForm).then(res=>res.json()).then(data=>this._didReceiveResponse(data)).catch(_=>this._didReceiveResponse({error:1,errorMessage:"Transaction failed."}))}}/**
     * Validates the form's inputs and adds the `aria-invalid` attribute to the inputs
     * that don't match the pattern specified in the markup.
     */_validateForm(form){let firstInvalid=!1;for(let el,i=0;el=form.elements[i],i<form.elements.length;i++){if(el.checkValidity()){el.removeAttribute("aria-invalid")}else{if(!firstInvalid){// announce error message
if(el.nextElementSibling){//dispatch(announceLabel(el.nextElementSibling.getAttribute('error-message')));
}if(el.scrollIntoViewIfNeeded){// safari, chrome
el.scrollIntoViewIfNeeded()}else{// firefox, edge, ie
el.scrollIntoView(!1)}el.focus();firstInvalid=!0}el.setAttribute("aria-invalid","true")}}return!firstInvalid}/**
     * Sends form and cart data to the server and updates the UI to reflect
     * the waiting state.
     */_sendRequest(form){this._waiting=!0;return fetch("https://localhost:10443/api/content/create?type=Contact",{mode:"no-cors",method:"POST",body:JSON.stringify({// ccExpMonth: form.elements.ccExpMonth.value,
FirstName:form.elements.first_name.value,LastName:form.elements.last_name.value,Email:form.elements.email.value,Subject:form.elements.type.value,Website:form.elements.website.value,Description:form.elements.description.value}),headers:{"Content-Type":"multipart/form-data; boundary=------------------------d74496d66958873e--"}})}/**
     * Handles the response from the server by checking the response status
     * and transitioning to the success or error UI.
     */_didReceiveResponse(response){this._response=response;this._waiting=!1}}window.customElements.define("ts-contact",TSContact)});