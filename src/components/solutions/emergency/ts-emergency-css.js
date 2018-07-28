import { html } from '@polymer/lit-element';

export const EmergencyStyles = html `

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

  .ts-emergency .hero {
    background: none; 
    padding: 34px;
    text-align: center; }

  h3 {
    padding-top: 20px; }

  @media (min-width: 460px) {
    #ts-site.ts-emergency {
      background: #fff url(/images/header/ts-emergency-header.svg) no-repeat;
      background-size: 35%;
      background-position: 100% 90px;
      background-attachment: fixed;
    }

    #ts-site.ts-emergency .hero {
      min-height: 270px;
      padding: 14px;
      position: relative;
    }

    .solutions-section-height {
      min-height:350px;
    }

    .ts-content-body {
      margin-bottom: 24px
    }

    .ts-content-body h2 {
      margin-bottom: 16px;
    }

    #ts-site .ts-pad-right-4 {
      padding-right: 32px;
    }

    #ts-site.ts-showcase.is-split-left .ts-showcase-image {
      right: 0;
    }

    #ts-site .ts-pad-left-38+.ts-showcase-image,
    #ts-site .ts-pad-right-38+.ts-showcase-image {
      max-width: 304px;
    }

    #ts-site.ts-showcase-image {
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
  }
  @media (max-width: 800px) {
    #ts-site.ts-emergency {
      background-size: 40% !important;
      background-position: 100% 120px !important; }

    .ts-right {
      float: none !important;
      margin: 24px 30px 5px; }
  } 
  </style>

`;