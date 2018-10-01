import { LitElement, html } from '@polymer/lit-element';

import { SharedStyles } from './shared-styles';
import { TsFormStyle } from './ts-form-style';
import { TsInputStyle } from './ts-input-style';
import { TsSelectStyle } from './ts-select-style';
import { TsTextAreaStyle } from './ts-textarea-style';
import { announceLabel } from '../actions/app.js';


class TSContact extends LitElement {
  render() {
    const requestip = location.hostname; 
    const { _response, _state, _waiting } = this;
    return html `

    ${ SharedStyles }
    ${ TsFormStyle }
    ${ TsInputStyle }
    ${ TsSelectStyle }
    ${ TsTextAreaStyle }
 
    <style>
    :host {
      display: block;
      padding: 0px;
      h1 {
        margin: 0 0 5px -3px;
        color: #77909c;
      }
      h2 {
        margin-bottom: 40px;
      }
      ul {
        margin-bottom:24px;
      }
    }

    /* Smaller than 460 */

    .ts-care .hero {
      background: none; 
      padding: 34px;
      text-align: center; }

    h3 {
      padding-top: 20px; }

    ts-button > * {
      display: inline-block;
      box-sizing: border-box;
      border: 2px solid --app-secondary-color;
      background-color: #FFF;
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

    @media (min-width: 460px) {
      #ts-site.ts-care {
        background: #fff url(/images/header/ts-care-header.svg) no-repeat;
        background-size: 30%;
        background-position: 95% 90px;
        background-attachment: fixed;
      }

      #ts-site.ts-care .hero {
        min-height: 170px;
        padding: 14px;
        position: relative;
      }

      .ts-contact-body {
        margin-bottom: 24px;
      }

      .ts-contact-wrapper {
        background-color: #fff;
        border-top: 1px solid #ccc;
      }

      .ts-contact-body h2 {
        margin-bottom: 16px;
      }

      #ts-site .ts-pad-right-4 {
        padding-right: 32px;
      }

      #ts-site .ts-showcase.is-split-left .ts-showcase-image {
        right: 0;
      }

      #ts-site .ts-pad-left-38+.ts-showcase-image,
      #ts-site .ts-pad-right-38+.ts-showcase-image {
        max-width: 304px;
      }

      #ts-site .ts-showcase-image {
        position: relative;
        text-align: center;
        top: 0;
        z-index: 1;
      }

      p.fine-print:first-child {
        margin-top: 24px;
      }

      .fine-print {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        padding-left: 24px;
        line-height: 14px;
      }
      .main-frame {
        transition: opacity 0.5s;
      }
      .main-frame.waiting {
        opacity: 0.1;
      }
      ts-input, ts-select {
        font-size: 1.15rem;
      }
      ts-select {
        margin-bottom: 20px;
      }
      paper-spinner-lite {
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
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
      .ts-select-label {
        line-height: 20px;
      }
      .order-summary-row {
        line-height: 24px;
      }
      .total-row {
        font-weight: 500;
        margin: 30px 0;
      }

      placeholder {
        font-size:19px;
      }

      textarea {
        display: block;
        width: 100%;
        border: 0;
        background: white no-repeat;
        font-size: 1rem;
        font-family: 'Roboto', 'Noto', sans-serif;
        
        /* 2 imgs : 1px gray line (normal state) AND 2px green line (focus state) */
        background-image: linear-gradient(to bottom, #a434b7, #a434b7), linear-gradient(to bottom, silver, silver);
        /* sizes for the 2 images (default state) */
        background-size: 0 2px, 100% 1px;
        /* positions for the 2 images. Change both "50%" to "0%" or "100%" and tri again */
        background-position: 50% 100%, 50% 100%;

        /* animation solely on background-size */
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);

      }

      textarea:focus{
        /* sizes for the 2 images (focus state) */
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
      
      @media (max-width: 767px) {
      .grid {
          display: block;
          margin-top: 0;
        }
      .grid > section:not(:first-child) {
          margin-left: 0;
        }
      #ts-site.ts-care {
        background-position: 100% 140px !important; }

      .ts-right {
        float: none !important;
        margin: 24px 30px 5px; }
      } 
    }
    </style>
    <article id="ts-site" class="ts-care">
      <header class="hero">
        <div class="ts-max-width-standard">
          <h1 class="paper-font-display2 paper-font-light">Contact Us</h1>
          <h2 class="paper-font-title paper-font-light">Touch base with one of our WordPress experts.</h2>
        </div>
      </header>
      <div class="ts-contact-wrapper">
        <div class="${_waiting ? 'main-frame waiting' : 'main-frame'}">
          <div state="init">
            <form id="contactForm">
              <input type="hidden" id="requestip" name="requestip" value="${ requestip }">
              <div class="subsection grid">
                <section>
                  <h2 id="accountInfoHeading">About you</h2>
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
                </section>
                <section>
                  <h2>Site and inquiry</h2>
                  <div class="column">
                    <label id="typeLabel" class="ts-select-label">Subject</label>
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
                    <ts-textarea>
                      <textarea id="description" name="description" placeholder="How Can we help you?"
                          required aria-labelledby="DescriptionLabel"></textarea>
                      <ts-md-decorator error-message="Invalid URL" aria-hidden="true"></ts-md-decorator>    
                    </ts-textarea>
                  </div>
                  <ts-button responsive id="submitBox">
                    <input type="button" @click="${e => this._submit()}" value="Submit Inquiry">
                  </ts-button>
                </section>
              </div>
            </form>
          </div>  
        </div>
      </div>
    </article> 
  <!-- Show spinner when waiting for the server to repond -->
  <paper-spinner-lite ?active="${_waiting}"></paper-spinner-lite>
  `;
  }

  static get properties() { return {
    _waiting: { type: Boolean },
    _state: { type: String },
    _response: { type: Object }
  };}

  _stateChanged(state) {
    this._state = state.contact.state;
  }


  _submit() {
    const contactForm = this.shadowRoot.querySelector('#contactForm');
    if (this._validateForm(contactForm)) {
      this._sendRequest(contactForm)
      .then(res => res.json())
      .then(data => this._didReceiveResponse(data))
      .catch(_ => this._didReceiveResponse({
        error: 1,
        errorMessage: 'Transaction failed.'
      }));
    }
  }

  /**
   * Validates the form's inputs and adds the `aria-invalid` attribute to the inputs
   * that don't match the pattern specified in the markup.
   */
  _validateForm(form) {
    let firstInvalid = false;

    for (let el, i = 0; el = form.elements[i], i < form.elements.length; i++) {
      if (el.checkValidity()) {
        el.removeAttribute('aria-invalid');
      } else {
        if (!firstInvalid) {
          // announce error message
          if (el.nextElementSibling) {
            //dispatch(announceLabel(el.nextElementSibling.getAttribute('error-message')));
          }
          if (el.scrollIntoViewIfNeeded) {
            // safari, chrome
            el.scrollIntoViewIfNeeded();
          } else {
            // firefox, edge, ie
            el.scrollIntoView(false);
          }
          el.focus();
          firstInvalid = true;
        }
        el.setAttribute('aria-invalid', 'true');
      }
    }
    return !firstInvalid;
  }

  /**
   * Sends form and cart data to the server and updates the UI to reflect
   * the waiting state.
   */
  _sendRequest(form) {
    this._waiting = true;

    return fetch('https://api.sendgrid.com/v3/mail/send', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        sandbox_mode: {
          enable: true
        }, 
        personalizations: [
          {
          to: [
            {
            email: "john@gemservers.com",
            name: "John Teague"
            }
            
          ],
          subject: form.elements.type.value,
          content: [
            {
              text: form.elements.description.value
            }
          ],
          from: {
            email: "ts@themesurgeons.com",
            name: "TS Support"
          },
          reply_to: {
            email: form.elements.email.value,
            name: form.elements.last_name.value
          }
        }
      ]
      }),
      headers: {
        "content-type": "application/json",
        "authorization": "",
        "Access-Control-Allow-Origin": "https://sendgrid.api-docs.io"
      }
    });
  }

   /**
   * Handles the response from the server by checking the response status
   * and transitioning to the success or error UI.
   */
  _didReceiveResponse(response) {
    this._response = response;
    this._waiting = false;
  }

}
window.customElements.define('ts-contact', TSContact);