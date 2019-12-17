import { css } from 'lit-element';

export const TsProductStyle = css`
  .ts-products-and-solutions .flex {
    display: flex;
  }
  .ts-products-and-solutions .flex.flex--row {
    flex-direction: row;
  }
  .ts-products-and-solutions .flex.flex--col {
    flex-direction: column;
  }
  .ts-products-and-solutions .ts-superscript {
    color: #9aa0a6;
    font: 700 10px/12px 'Roboto Mono', monospace;
    letter-spacing: 0.75px;
    position: relative;
    top: -0.5em;
    vertical-align: baseline;
  }
  .ts-products-and-solutions .ts-product-section {
    margin-bottom: 60px;
  }
  .ts-products-and-solutions .margin-bottom-60 {
    margin-bottom: 60px;
  }
  .ts-products-and-solutions .margin-bottom-120 {
    margin-bottom: 120px;
  }
  .ts-products-and-solutions .padding-bottom-32 {
    padding-bottom: 32px;
  }
  .ts-products-and-solutions .margin-top-24 {
    margin-top: 24px;
  }
  .ts-products-and-solutions .has-border {
    border: 1px solid #dadce0;
  }
  .ts-products-and-solutions .is-right {
    margin-left: -1px;
  }
  .ts-products-and-solutions .ts-product-card {
    padding: 32px;
    border: 1px solid #dadce0;
    display: flex;
  }
  .ts-products-and-solutions .ts-product-card.no--border-top {
    border-top-width: 0;
  }
  .ts-products-and-solutions .ts-product-card.no--border {
    border: 0;
  }
  .ts-products-and-solutions .ts-product-card__2up {
    padding-top: 8px;
  }
  .ts-products-and-solutions .ts-product-card__desc {
    color: #80868b;
    font-family: Roboto, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: 18px;
  }
  .ts-products-and-solutions .ts-product-card__section--with-icon {
    background-position: 0 28px;
    background-repeat: no-repeat;
    background-size: 24px;
    padding-left: 50px;
  }
  .ts-products-and-solutions .ts-product-card__title {
    display: block;
    margin-bottom: 32px;
  }
  .ts-products-and-solutions .ts-product-card__title strong {
    color: #4285f4;
    font-weight: inherit;
  }
  .ts-products-and-solutions .ts-product-card__title:active,
  .ts-products-and-solutions .ts-product-card__title:link,
  .ts-products-and-solutions .ts-product-card__title:visited {
    color: #202124;
    text-decoration: none;
  }
  .ts-products-and-solutions .ts-product-card__title i {
    color: var(--app-primary-color);
    font-size: 18px;
    line-height: 30px;
    vertical-align: middle;
  }
  .ts-products-and-solutions .ts-product-card__title i:visited {
    color: var(--app-primary-color);
  }
  .ts-products-and-solutions .ts-product-card__title i:focus,
  .ts-products-and-solutions .ts-product-card__title i:hover {
    color: #174ea6;
  }
  .ts-products-and-solutions .ts-product-card__headline {
    color: var(--app-primary-color);
    display: inline-block;
    font: 400 16px/30px 'Roboto', Arial, sans-serif;
    margin-top: 22px;
    padding: 2px 0;
  }
  .ts-products-and-solutions .ts-product-card__headline:visited {
    color: var(--app-primary-color);
  }
  .ts-products-and-solutions .ts-product-card__headline:focus,
  .ts-products-and-solutions .ts-product-card__headline:hover {
    color: #174ea6;
  }
  .ts-products-and-solutions .ts-product-card__headline.no-pad {
    padding-top: 0;
  }
  .ts-products-and-solutions .ts-product-card__sub-headline {
    color: #202124;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 2px;
  }
  .ts-products-and-solutions .ts-product-card__title--full-width {
    margin-bottom: -32px;
    padding: 32px 32px 0;
  }
  .ts-products-and-solutions .ts-related-section {
    margin-bottom: 120px;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .ts-related-section .margin-bottom-40 {
      margin-bottom: 40px;
    }
  }
  .ts-products-and-solutions .ts-related-section .ts-title {
    padding-bottom: 32px;
  }
  .ts-products-and-solutions .card-cta-image {
    border: 1px solid #dadce0;
    padding: 32px 40px 32px 32px;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .card-cta-image .margin-bottom-40 {
      margin-bottom: 40px;
    }
  }
  .ts-products-and-solutions .card-cta-image.grey {
    background-color: #f8f9fa;
  }
  .ts-products-and-solutions .card-cta-image__heading {
    margin-bottom: 8px;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .card-cta-image__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .ts-products-and-solutions .card-cta-image__secondary-link {
    color: var(--app-primary-color);
    display: inline-block;
    font: 500 16px/22px 'Roboto', Arial, sans-serif;
    margin-left: 16px;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .card-cta-image__secondary-link {
      margin-left: 0;
      margin-top: 16px;
    }
  }
  .ts-products-and-solutions .card-cta-image__secondary-link i {
    font-size: 16px;
    line-height: 22px;
  }
  .ts-products-and-solutions .card-cta-image__image {
    display: flex;
    justify-content: flex-end;
  }
  .ts-products-and-solutions .card-cta-image__image div {
    display: flex;
    align-items: flex-end;
  }
  .ts-products-and-solutions .card-cta-image.no--pad-btm {
    padding-bottom: 0;
  }
  .ts-products-and-solutions .card-cta-image.no--pad-rgt-btm {
    padding-right: 0;
    padding-bottom: 0;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .card-cta-image .mobile-pad-right {
      padding-right: 32px;
    }
  }
  .ts-products-and-solutions .card-cta-image.no--border-btm {
    border-bottom-width: 0;
  }
  .ts-products-and-solutions .card-cta-image.blue {
    background-color: var(--app-primary-color);
  }
  .ts-products-and-solutions .card-cta-image.blue,
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__heading {
    color: #fff;
  }
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__secondary-link {
    margin-left: 0;
    color: #fff;
  }
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__secondary-link:active,
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__secondary-link:focus,
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__secondary-link:hover,
  .ts-products-and-solutions .card-cta-image.blue .card-cta-image__secondary-link:visited {
    color: #fff;
  }
  .ts-products-and-solutions .card-cta-image .ts-button__set {
    margin-bottom: 24px;
  }
  .ts-products-and-solutions .ts-product-banner {
    padding: 32px;
    background-color: #34a853;
    color: #fff;
  }
  .ts-products-and-solutions .ts-product-banner__heading {
    font-family: Roboto, Arial, sans-serif;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
    margin: 0;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .ts-product-banner__heading {
      padding-bottom: 8px;
    }
  }
  .ts-products-and-solutions .ts-product-banner__right {
    padding-left: 32px;
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .ts-product-banner__right {
      padding-left: 0;
    }
  }
  .ts-products-and-solutions .ts-product-banner__text {
    padding-bottom: 24px;
  }
  .ts-products-and-solutions .ts-product-banner__link {
    color: #fff;
  }
  .ts-products-and-solutions .ts-product-banner__link:active,
  .ts-products-and-solutions .ts-product-banner__link:focus,
  .ts-products-and-solutions .ts-product-banner__link:hover,
  .ts-products-and-solutions .ts-product-banner__link:visited {
    color: #fff;
  }
  .ts-hero__products-and-solutions {
    margin-bottom: 40px;
  }
  @media all and (min-width: 600px) {
    .ts-hero__products-and-solutions {
      margin-bottom: 80px;
    }
  }
  @media all and (max-width: 600px) {
    .ts-products-and-solutions .margin-bottom-40 {
      margin-bottom: 40px;
    }
    .ts-products-and-solutions .no-pad-top {
      padding-top: 0;
    }
    .ts-products-and-solutions .no-pad-bottom {
      padding-bottom: 0;
    }
  }
  .ts-article-body .ts-product-card__title .material-icons {
    vertical-align: middle;
  }
  .ts-products-home-page .ts-inner-content {
    width: 100%;
  }
  .ts-products-home-page .ts-grid.margin-bottom-40 {
    margin-bottom: 40px;
  }
  .ts-products-home-page .ts-icon-appmaker {
    background-image: url(/images/icons/ic_appmaker_24dp.svg);
  }
  .ts-products-home-page .ts-icon-hire {
    background-image: url(/images/icons/ic_hire_24dp.svg);
  }
  .ts-products-home-page #google-ts-platform .ts-product-card .ts-icon {
    margin-top: 2px;
  }
  .ts-products-home-page .no--border-btm {
    border-bottom-width: 0;
  }
  .ts-products-home-page#ts-site .card-cta-image__heading.ts-headline3 {
    margin-bottom: 8px;
  }
  @media (max-width: 599px) {
    .ts-products-home-page #featured-products .ts-product-card__title,
    .ts-products-home-page .ts-inner-content .ts-footnotes,
    .ts-products-home-page .ts-inner-content .ts-grid {
      margin-left: -40px;
    }
    .ts-products-home-page .flex {
      margin-left: 40px;
    }
    .ts-products-home-page .flex.flex--col {
      margin-left: 0;
    }
  }
  .ts-products-home-page a[href='#header_1'].ts-jump-menu__toggle {
    margin-top: 16px;
  }
  .ts-products-home-page .ts-jump-menu__item__main {
    font-size: 13px;
    font-weight: inherit;
    letter-spacing: 0.2px;
  }
  .ts-products-home-page .ts-footnotes.ts-jump-menu__toggle {
    color: #5f6368;
    font: 400 13px/30px 'Roboto', Arial, sans-serif;
    letter-spacing: 0.8px;
    margin-bottom: 8px;
    padding-bottom: 6px;
    padding-left: 0;
    text-transform: uppercase;
  }
  .ts-products-home-page .ts-jump-menu__item {
    margin-bottom: 3px;
  }
  .ts-products-home-page .ts-jump-menu__item:link,
  .ts-products-home-page .ts-jump-menu__item:visited {
    color: #202124;
  }
  .ts-products-home-page .ts-jump-menu__item__icon-resting circle {
    fill: #dadce0;
  }
  @media (min-width: 1280px) {
    .ts-products-home-page a[href='#header_1'].ts-jump-menu__toggle {
      margin-top: 30px;
    }
    .ts-products-home-page a[href='#'].ts-jump-menu__toggle {
      display: none;
    }
    .ts-products-home-page .ts-jump-content {
      margin: 0 0 0 325px;
    }
    .ts-products-home-page .ts-jump-menu.attached {
      width: 275px;
    }
  }
  @media (max-height: 870px) {
    .ts-products-home-page .ts-jump-menu__item__main {
      font-size: 12px;
      letter-spacing: 0.2px;
      line-height: 21px;
    }
    .ts-products-home-page .ts-footnotes.ts-jump-menu__toggle {
      margin-bottom: 0;
    }
    .ts-products-home-page .ts-jump-menu__item i {
      margin-top: 0;
    }
  }
`;
