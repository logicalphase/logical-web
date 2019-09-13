import { css } from "lit-element";

export const TsCard = css`
  .ts-section--reversed,
  .ts-card--reversed,
  #ts-site .ts-section--reversed .ts-section-header__eyebrow,
  #ts-site .ts-section--reversed .ts-section-header__heading,
  #ts-site .ts-card--reversed .ts-card__eyebrow,
  #ts-site .ts-card--reversed .ts-card__heading {
    color: #fff;
  }

  .ts-card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: -24px;
  }

  .ts-card__container .ts-card {
    flex: 0 1 100%;
    margin: 0 0 24px;
    max-width: 320px;
    min-height: 272px;
  }

  #ts-site .ts-card--four-columns .ts-card__container {
    flex-wrap: initial;
  }

  #ts-site .ts-card--four-columns .ts-headline1 {
    font-size: 22px;
    line-height: 30px;
  }

  #ts-site .ts-card--four-columns .ts-headline3 {
    font-size: 28px;
    line-height: 34px;
  }

  #ts-site .ts-card--four-columns .ts-headline4 {
    font-size: 22px;
    text-transform: uppercase;
  }

  #ts-site .ts-card--four-columns .highlight-price {
    color: #202124;
    font-size: 30px;
    font-weight: 500;
  }

  .ts-card__container--left-aligned {
    justify-content: left;
  }

  .ts-card__container--3up {
    margin-left: auto;
    margin-right: auto;
    max-width: 1038px;
  }

  .ts-card {
    background-color: #fff;
    background-position: center center;
    background-size: auto 100%;
    border: 1px solid #dadce0;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 236px;
    overflow: hidden;
    padding-bottom: 24px;
    position: relative;
    transition: box-shadow 0.3s ease-out, background-size 0.3s ease-out;
  }

  .ts-card__arrow {
     margin-top: 0;
  }

  .ts-card:hover {
    background-size: auto 103%;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .ts-card__icon {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    height: 32px;
    padding-top: 32px;
    width: 32px;
  }

  .ts-card__icon svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  .ts-card__icon svg path {
    fill: currentColor;
  }

  .ts-card__logo {
    display: flex;
    justify-content: center;
    padding: 32px 8px 0;
  }

  .ts-card__logo.ts-card__logo--bg {
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 160px;
    padding: 0;
  }

  .ts-card__media {
    display: flex;
    height: 170px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .ts-card__media--image {
    height: auto;
    object-fit: cover;
  }

  .ts-card__media--logo {
    align-self: center;
    position: absolute;
    width: 140px;
  }

  .ts-card__top {
    padding: 32px 24px 0;
  }

  .ts-card__content {
    padding: 32px 24px;
  }

  .ts-card__content .ts-headline4 {
    color: var(--app-primary-color);
    padding-bottom: 16px;
  }

  .ts-card__content p {
    margin: 0;
  }

  .ts-card__content--featured {
    color: var(--app-primary-color);
    margin-bottom: 24px;
    margin-top: 24px;
  }

  .ts-card__content__quote-text {
    padding-left: 25px;
  }

  .ts-card__footer {
    align-self: end;
    margin-right: auto;
    margin-top: auto;
    padding: 0 24px;
  }

  .ts-card .ts-button {
    display: flex;
    justify-content: flex-start;
  }

  .ts-card .ts-button + .ts-button {
    margin: 25px 0 0;
  }

  .ts-card--extra-large .ts-card__content,
  .ts-card--extra-large .ts-card__footer,
  .ts-card--extra-large .ts-card__top,
  .ts-card--large .ts-card__content,
  .ts-card--large .ts-card__footer,
  .ts-card--large .ts-card__top {
    padding-left: 32px;
    padding-right: 32px;
  }

  .ts-card--extra-large .ts-card__media,
  .ts-card--large .ts-card__media {
    height: 200px;
  }

  .ts-card--no-hover {
    transition: none;
  }

  .ts-card--no-hover:hover {
    background-size: auto;
    box-shadow: none;
  }

  .ts-card__fab {
    position: absolute;
    right: 25px;
    top: 132px;
  }

  #ts-site .ts-card--four-columns {
    padding: 0;
  }

  @media all and (min-width: 600px) {
    .ts-card__container .ts-card {
      flex: 0 1 calc(50% - 24px);
      margin-left: 12px;
      margin-right: 12px;
    }
    .ts-card__container .ts-card--large {
      max-width: 408px;
    }
    .ts-card__container .ts-card--extra-large {
      max-width: 496px;
    }
    .ts-card__container--left-aligned {
      margin-left: -12px;
      margin-right: -12px;
    }
    .ts-card__container--left-aligned.ts-card__container--3up {
      margin-left: -12px;
      margin-right: -12px;
    }
    .ts-section-body,
    .ts-card__body {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media all and (min-width: 1024px) {
    .ts-card__container .ts-card {
      flex-basis: calc(25% - 24px);
    }
    .ts-card__container .ts-card--large {
      flex-basis: calc(33.3% - 24px);
    }
    .ts-card__container .ts-card--extra-large {
      flex-basis: calc(50% - 24px);
    }
    .ts-card__container--3up .ts-card {
      flex-basis: calc(33.3% - 24px);
    }
    .ts-card__logo.ts-card__logo--bg {
      height: 170px;
    }
    .ts-card__fab {
      top: 142px;
    }

    #ts-site .ts-card--four-columns {
      flex-basis: calc(50% - 36px);
      margin: 0 18px 36px;
    }

    .ts-card--contact {
      background-color: #34a853; /* $green-500 */
      background-image: url("/images/home/contact-bg.svg");
      background-position: 50% 50%;
      background-size: cover;
    }

    .ts-card--industry {
      background-color: #fbbc04;
      background-image: url("/images/home/industry-bg.svg");
      background-position: 50% 50%;
      background-size: cover;
    }

    .ts-card--solution {
      border: 1px solid #eee;
      border-radius: 0;
      height: 100%;
      padding: 26px;
      margin: 0 -1px -1px 0;
    }

    .ts-card--solution .ts-card__icon {
      height: 62px;
      margin-bottom: 21px;
      margin-left: -4px;
      padding-top: 28px;
      width: 72px;
    }

    .ts-card--solution .ts-card__link {
      text-decoration: none;
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

    .ts-hero::before,
    .ts-hero::after {
      height: 650px;
    }

    .ts-hero__card {
      padding: 40px 48px;
    }

    .ts-hero__card .ts-button__set .ts-button {
      margin-right: 24px;
    }

    .ts-card--tall {
      min-height: 560px;
    }

    .ts-card--product .ts-card__icon {
      padding-top: 24px;
    }

    .ts-hero__card--gcp {
      background-size: 60%;
    }

    .ts-card--product,
    .ts-card--product.ts-card--solution {
      padding: 32px 56px 72px;
    }

    .ts-card--product .ts-card__heading, .ts-card__arrow{
      padding-top: 24px;
    }
  }

  @media all and (min-width: 1440px) {
    #ts-site .ts-card--four-columns {
      flex-basis: calc(25% - 24px);
      margin: 0 12px 24px;
    }
  }
`;
