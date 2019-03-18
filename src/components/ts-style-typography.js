

import { css } from 'lit-element';

export const TsTypographyStyle = css`
/* Material Design Typography */

#ts-site .ts-display1 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0
}

@media all and (min-width: 600px) {
    #ts-site .ts-display1 {
        font-size: 72px;
        letter-spacing: -0.5px;
        line-height: 84px
    }
}

#ts-site .ts-display1 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-display2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin: 0
}

@media all and (min-width: 600px) {
    #ts-site .ts-display2 {
        font-size: 64px;
        letter-spacing: -0.5px;
        line-height: 72px
    }
}

#ts-site .ts-display2 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-display3 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 44px;
    margin: 24px 0 0 -4px;
}

@media all and (min-width: 600px) {
    #ts-site .ts-display3 {
        font-size: 56px;
        letter-spacing: -0.5px;
        line-height: 66px
    }
}

#ts-site .ts-display3 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-headline1 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 44px;
    margin: 0
}

@media all and (min-width: 600px) {
    #ts-site .ts-headline1 {
        font-size: 48px;
        font-weight: 500;
        letter-spacing: -0.5px;
        line-height: 58px
    }
}

#ts-site .ts-headline1 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-headline2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
    margin: 0
}

@media all and (min-width: 600px) {
    #ts-site .ts-headline2 {
        font-size: 40px;
        letter-spacing: -0.5px;
        line-height: 52px
    }
}

#ts-site .ts-headline2 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-headline3 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0
}

@media all and (min-width: 600px) {
    #ts-site .ts-headline3 {
        font-size: 32px;
        line-height: 40px
    }
}

#ts-site .ts-headline3 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-headline4 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 30px;
    margin: 24px 0 0 0;
    color: #5f6368;
}

@media all and (min-width: 600px) {
    #ts-site .ts-headline4 {
        font-size: 22px
    }
}

#ts-site .ts-headline4 strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-headline4 .ts-superscript {
    font-size: 10px;
    line-height: 1
}

#ts-site .ts-quote-text {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px
}

@media all and (min-width: 600px) {
    #ts-site .ts-quote-text {
        color: #202124;
        font-size: 30px;
        line-height: 40px
    }
}

#ts-site .ts-quote-text strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-eyebrow {
    color: #5f6368;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1;
    overflow: visible;
    text-transform: uppercase
}

#ts-site .ts-eyebrow strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-eyebrow--large {
    font-family: Roboto Mono, monospace;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1;
    margin: 0;
    overflow: visible
}

#ts-site .ts-eyebrow--large strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}

#ts-site .ts-subhead {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 26px
}

@media all and (min-width: 600px) {
    #ts-site .ts-subhead {
        font-size: 18px;
        line-height: 30px
    }
}

#ts-site .ts-subhead strong {
    color: var(--app-primary-color);;
    font-weight: inherit
}
.ts-superscript {
    color: #5f6368;
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
.ts-body-text, p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}
.ts-body-text .ts-superscript, p .ts-superscript {
    font-size: 10px;
    line-height: 1;
}
.ts-body-text__small {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
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
.ts-link:focus, .ts-link:hover {
    text-decoration: underline;
}
.ts-link:hover {
    color: var(--app-primary-hover-color);
}
.ts-link:focus {
    background-color: rgba(32, 33, 36, .05);
    color: var(--app-primary-hover-color);
    outline: 4px solid rgba(32, 33, 36, .05);
}
.ts-link--reversed {
    color: #fff;
    text-decoration: underline;
}
.ts-link--reversed:visited {
    color: #fff;
}
.ts-link--reversed:focus, .ts-link--reversed:hover {
    background-color: rgba(32, 33, 36, .05);
    color: rgba(255, 255, 255, .7);
    outline: 4px solid rgba(32, 33, 36, .05);
}

  /* Custom Font Weights */

  .paper-font-light {
    font-weight: 300; }

  .paper-font-medium {
    font-weight: 400; }

  .paper-font-semibold {
    font-weight: 500; }
`;