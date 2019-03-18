import { css } from 'lit-element';

export const TsHomePageStyle = css`
  /* Material Design Typography */

  .ts-home-sections {
    margin-bottom: 100px;
  }

  .ts-section--reversed {
    padding: 72px 0 60px;
  }

  .ts-section--centered {
    text-align: center;
  }

  #ts-site .ts-section--centered .ts-section-header__heading {
    margin: 0 auto;
    max-width: 524px;
  }

  .ts-card {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .ts-card:hover {
    z-index: 1;
  }

  .ts-card--center {
    text-align: center;
  }

  .ts-card--tall {
    min-height: 480px;
  }

  .ts-card--center .ts-card__body {
    margin-left: auto;
    margin-right: auto;
  }

  .ts-card--center .ts-card__footer {
    align-self: center;
    margin-top: 0;
  }

  #ts-site .ts-card--center .ts-card__heading {
    margin: 0 auto;
  }

  .ts-card__heading {
    max-width: 360px;
    padding: 0;
  }

  .ts-card__arrow {
    margin-top: 8px;
  }

  .ts-card__link {
    position: static;
  }

  .ts-card__link::after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    overflow: visible;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .ts-card__link--text {
    color: unset;
  }

  .ts-home-sections .ts-section-events {
    margin-top: 40px;
  }

  .ts-section-events {
    position: relative;
  }

  .ts-section-events.next::before,
  .ts-section-events.next::after {
    background-repeat: no-repeat;
    background-size: 36%;
    content: '';
    display: block;
    position: absolute;
    top: -40px;
    z-index: -1;
  }

  .ts-home-sections .ts-section-customers__container {
    background-color: var(--app-section-even-color);
  }

  #ts-site .ts-section-customers__container .ts-section-header {
    margin-bottom: 20px;
    padding-bottom: 0;
  }

  .ts-section-customers__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 24px auto 36px;
    padding: 0;
  }

  .ts-section-customers__logos li {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 8px 18px;
  }

  .ts-section-customers__logos .ts-section-customers__logos__logo--no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .ts-section-customers__logos img {
    max-width: none;
  }

  .ts-card--contact {
    background-color: #34A853; /* $green-500 */
    background-image: url('/images/home/contact-bg.svg');
    background-position: 50% 50%;
    background-size: cover;
  }

  .ts-section-header.ts-section-header--solutions {
    padding: 0 36px 36px 0;
  }

  .ts-card--solution {
    border: 1px solid #eee;
    border-radius: 0;
    height: 100%;
    padding: 36px;
    margin: 0 -1px -1px 0;
  }

  .ts-card--solution.ts-card--product {
    padding: 24px 36px 40px;
  }

  .ts-card--industry {
    background-color: #FBBC04;
    background-image: url('/images/home/industry-bg.svg');
    background-position: 50% 50%;
    background-size: cover;
  }

  .ts-card--solution .ts-card__eyebrow {
    padding-bottom: 20px;
  }

  .ts-card--solution .ts-card__icon {
    height: 72px;
    margin-bottom: 16px;
    margin-left: 0px;
    padding-top: 0;
    width: 72px;
  }

  .ts-card--solution .ts-card__link:hover {
    text-decoration: none;
  }

  .ts-card--solution .ts-card__link:hover .ts-card__heading {
    color: #202124;
  }

  .ts-card--solution .ts-card__body {
    flex-grow: 1;
  }

  .ts-card--solution .ts-card__link {
    margin-top: 24px;
  }
`;