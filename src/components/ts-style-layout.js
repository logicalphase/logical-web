

import { css } from 'lit-element';

export const TsLayoutStyle = css`

.hypersite-main-content {
  padding: 0 24px;
}

@media all and (min-width: 600px) {
  .hypersite-main-content {
      padding: 0 40px;
  }
}

@media all and (min-width: 1024px) {
  .hypersite-main-content {
      padding: 0 80px;
  }
}

@media all and (min-width: 1024px) {
  .ts-hero img.ts-hero__image--scaled {
      max-width: unset
  }
}

.ts-hero .content-set {
  margin: 40px 0
}

@media all and (min-width: 600px) {
  .ts-hero .content-set {
      margin: 80px 0
  }
}

@media all and (min-width: 1024px) {
  .ts-hero .content-set {
      margin-left: 0
  }
}

.ts-hero .content-set p {
  margin: 16px 0 0
}

.ts-hero .content-set hr {
  border-top-color: #fbbc04;
  border-top-style: solid;
  border-top-width: 2px;
  margin: 32px auto;
  width: 160px
}

@media all and (min-width: 600px) {
  .ts-hero .content-set hr {
      margin-top: 48px;
      width: 280px
  }
}

.ts-hero .content-set hr.blue {
  border-top-color: #4285f4
}

.ts-hero .content-set hr.green {
  border-top-color: #34a853
}

.ts-hero .content-set hr.red {
  border-top-color: #ea4335
}

.ts-hero .content-set hr.yellow {
  border-top-color: #fbbc04
}

.ts-hero__content--background .content-set {
  margin-left: 16px;
  margin-right: 16px
}

@media all and (min-width: 600px) {
  .ts-hero__content--background .content-set {
      margin-left: 32px;
      margin-right: 32px
  }
}

.ts-hero__content--background p {
  color: inherit
}

.ts-full-bleed,
.ts-full-bleed--bg,
.ts-full-bleed--constrained {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw)
}

@media all and (min-width: 1024px) {
  .ts-full-bleed--constrained {
      margin-left: auto;
      margin-right: auto
  }
}

.ts-full-bleed--bg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%)
}

.ts-full-bleed p {
  color: inherit
}


`;

