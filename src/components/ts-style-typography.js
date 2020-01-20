import { css } from 'lit-element';

export const TsTypographyStyle = css`
  /* Material Design Typography */

  /* All screens smaller than 460px */
  strong {
    font-weight: 400;
  }

  .paper-font-light {
    font-weight: 300;
  }

  .paper-font-medium {
    font-weight: 400;
  }

  .paper-font-semibold {
    font-weight: 500;
  }

  #ts-site .ts-display1 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0;
  }

  #ts-site .ts-display1 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-display2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0;
  }

  #ts-site .ts-display2 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-display3 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 44px;
    margin: 24px 0 0 -4px;
  }

  #ts-site .ts-display3 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-headline1 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 44px;
    margin: 0;
  }

  #ts-site .ts-headline1 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-headline2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
    margin: 0;
  }

  #ts-site .ts-headline2 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-headline3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 38px;
    margin: 0;
  }

  #ts-site .ts-headline3 strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-headline4 {
    color: var(--app-primary-text-color);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
    margin: 28px 0 0 0;
    padding-right: 0px;
  }

  #ts-site .ts-headline4 strong {
    color: var(--app-primary-color);
    font-weight: 500;
  }

  #ts-site .ts-headline4 .ts-superscript {
    font-size: 10px;
    line-height: 1;
  }

  #ts-site .ts-quote-text {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
  }

  #ts-site .ts-quote-text strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-eyebrow {
    color: var(--app-primary-text-color);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.5px;
    line-height: 22px;
    overflow: visible;
    text-transform: uppercase;
  }

  #ts-site .ts-eyebrow strong {
    color: var(--app-primary-text-color);
    font-weight: inherit;
  }

  #ts-site .ts-eyebrow--large {
    font-family: Roboto Mono, monospace;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
    line-height: 1;
    margin: 0;
    overflow: visible;
    text-transform: uppercase;
  }

  #ts-site .ts-eyebrow--large strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }

  #ts-site .ts-subhead {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 26px;
  }

  #ts-site .ts-subhead strong {
    color: var(--app-primary-color);
    font-weight: inherit;
  }
  .ts-superscript {
    color: var(--app-primary-text-thin-color);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0;
    overflow: visible;
    text-transform: uppercase;
    left: 2px;
    top: 0;
    vertical-align: text-top;
  }
  .ts-body-text__large {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
  .ts-body-text__large .ts-superscript {
    font-size: 10px;
    line-height: 1;
  }
  .ts-body-text__title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .ts-body-text__title .ts-superscript {
    font-size: 10px;
    line-height: 1;
  }
  .ts-body-text,
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 185%;
  }
  .ts-superscript,
  p .ts-superscript {
    font-size: 10px;
    line-height: 1;
  }
  .ts-body-text__small {
    font-size: 14px;
    font-weight: 400;
    line-height: 185%;
  }
  .ts-body-text__small .ts-superscript {
    font-size: 10px;
    line-height: 1;
  }
  .ts-footnotes {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: 18px;
  }
  .ts-link {
    color: var(--app-primary-color);
    text-decoration: none;
  }
  .ts-link:visited {
    color: var(--app-primary-color);
  }
  .ts-link:focus,
  .ts-link:hover {
    text-decoration: underline;
  }
  .ts-link:hover {
    color: var(--app-primary-hover-color);
  }
  .ts-link:focus {
    background-color: var(--app-primary-text-color);
    color: var(--app-primary-hover-color);
    outline: 4px solid var(--app-primary-text-color);
  }
  .ts-link--reversed {
    color: var(--app-reverse-text-color);
    text-decoration: underline;
  }
  .ts-link--reversed:visited {
    color: var(--app-reverse-text-color);
  }
  .ts-link--reversed:focus,
  .ts-link--reversed:hover {
    background-color: var(--app-primary-text-color);
    color: var(--app-reverse-text-color);
    outline: 4px solid var(--app-primary-text-color);
  }

  /* Custom Font Weights */

  .paper-font-light {
    font-weight: 300;
  }

  .paper-font-medium {
    font-weight: 400;
  }

  .paper-font-semibold {
    font-weight: 500;
  }

  /* All screens larger than 460px */

  @media (min-width: 460px) {
    #ts-site .ts-display1 {
      font-size: 72px;
      letter-spacing: -0.5px;
      line-height: 84px;
    }
    #ts-site .ts-display2 {
      font-size: 64px;
      letter-spacing: -0.5px;
      line-height: 72px;
    }
    #ts-site .ts-display3 {
      font-size: 56px;
      letter-spacing: -0.5px;
      line-height: 66px;
    }
    #ts-site .ts-headline1 {
      font-size: 48px;
      font-weight: 500;
      letter-spacing: -0.5px;
      line-height: 58px;
    }
    #ts-site .ts-headline2 {
      font-size: 40px;
      letter-spacing: -0.5px;
      line-height: 52px;
    }
    #ts-site .ts-headline3 {
      font-size: 32px;
      line-height: 40px;
      margin: 24px 16px 0 0;
    }
    #ts-site .ts-headline4 {
      font-size: 22px;
    }
    #ts-site .ts-quote-text {
      color: #202124;
      font-size: 30px;
      line-height: 40px;
    }
    #ts-site .ts-subhead {
      font-size: 18px;
      line-height: 30px;
    }
    #ts-site h2.ts-headline4 {
      font-size: 24px;
      padding-right: 0px;
    }
  }
`;
