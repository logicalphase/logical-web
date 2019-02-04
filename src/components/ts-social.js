import { LitElement, html } from 'lit-element';

class TSSocial extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
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
    `
    ];
  }  
  
  render() {
    const { link, placeholder, _loaded } = this;
    return html`
    <div id="placeholder">
      <span class="social-icon gplus-icon" .link=${ `https://plus.google.com/share?url=https://themesurgeons.com/${slug}/`} @click=${(e) => this._getDataHref(e)}>${GooglePlus}</span>
      <span class="social-icon twitter-icon" .link=${ `https://twitter.com/share?url=https://themesurgeons.com/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Twitter}</span>
      <span class="social-icon linkedin-icon" .link=${ `https://www.linkedin.com/cws/share?url=https://themesurgeons.com/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Linkedin}</span>
      <span class="social-icon facebook-icon" .link=${ `https://www.facebook.com/sharer.php?u=https://themesurgeons.com/${slug}/`} @click=${(e) => this._getDataHref(e)}>${Facebook}</span>
          @load="${() => this._loaded = true}"
          @error="${() => this._onSocialError()}">
    </div>
  `;
  }

  static get properties() { return {
    src: { type: String },
    link: { type: String },
    _loaded: { type: Boolean }
  };}

  update(changedProps) {
    if (changedProps.has('link')) {
      this._loaded = false;
    }
    super.update(changedProps);
  }

  _getDataHref(e) {
    let link = e.currentTarget.link;
    // Pop a new window for specific social media platform
    window.open(
      link,
      "_blank",
      "scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500"
    );
  }

  _onSocialError() {
    if (!this.placeholder) {
      return html `<p>Bummer. Unable to load social media share buttons.</p>`;
    }
  }
}

customElements.define('ts-social', TSSocial);