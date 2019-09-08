

import { css } from 'lit-element';

export const TsLayoutStyle = css`

.ts-main-content {
    margin: 40px auto;
    max-width: 1400px;
    padding: 0 24px;
    position: relative
}

.ts-visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px)
}

.ts-visually-show {
    position: static;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto
}

.ts-text-left {
    text-align: left
}

.ts-text-right,
[dir=rtl] .ts-text-left {
    text-align: right
}

[dir=rtl] .ts-text-right {
    text-align: left
}

.ts-text-center {
    text-align: center
}

.ts-text-justify {
    text-align: justify
}

.ts-valign-bottom {
    vertical-align: bottom
}

.ts-valign-middle {
    vertical-align: middle
}

.ts-valign-top {
    vertical-align: top
}

.ts-text-center {
    text-align: center
}

.ts-text-left {
    text-align: left
}

.ts-text-right {
    text-align: right
}

.ts-section {
  padding: 42px 0px;
}

@media screen and (min-width:1201px) {
    .ts-has-apix .ts-main-content {
        margin-right: 400px;
        max-width: 1000px;
        padding-right: 0
    }
}

@media screen and (min-width:1401px) {
    .ts-has-apix .ts-main-content {
        margin-right: calc((100% - 1400px)/2 + 400px);
        max-width: 1000px
    }
}

.ts-full-width-page .ts-main-content,
.ts-landing-page .ts-main-content,
.ts-products-page .ts-main-content {
    max-width: 1592px;
    padding: 0 120px
}

.ts-article-inner,
.ts-main-content {
    min-height: calc(100vh - 582px)
}

.ts-header-no-upper-tabs .ts-article-inner,
.ts-header-no-upper-tabs .ts-main-content {
    min-height: calc(100vh - 526px)
}

.ts-header-no-lower-tabs .ts-article-inner,
.ts-header-no-lower-tabs .ts-main-content {
    min-height: calc(100vh - 562px)
}

.ts-header-no-upper-tabs.ts-header-no-lower-tabs .ts-article-inner,
.ts-header-no-upper-tabs.ts-header-no-lower-tabs .ts-main-content {
    min-height: calc(100vh - 478px)
}

.ts-home-page.ts-header-no-upper-tabs.ts-header-no-lower-tabs .ts-main-content {
    min-height: calc(100vh - 710px)
}

.ts-404.ts-header-no-upper-tabs .ts-article-inner,
.ts-404.ts-header-no-upper-tabs .ts-main-content,
.ts-404.ts-header-no-lower-tabs .ts-article-inner,
.ts-404.ts-header-no-lower-tabs .ts-main-content,
.ts-404.ts-header-no-upper-tabs.ts-header-no-lower-tabs .ts-article-inner,
.ts-404.ts-header-no-upper-tabs.ts-header-no-lower-tabs .ts-main-content {
    min-height: calc(100vh - 356px)
}

.ts-site-mask,
.ui-widget-overlay {
    background: #212121;
    cursor: pointer;
    display: none;
    height: 100vh;
    opacity: .5;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10011
}

.ui-widget-overlay {
    display: block
}

.ts-article {
    margin-left: 320px;
    position: relative;
    width: calc(100% - 496px)
}

@media screen and (min-width:1201px) {
    .ts-has-apix .ts-article {
        width: calc(100% - 272px);
        margin-left: 256px
    }
}

.ts-article-inner {
    float: left;
    width: 100%
}

@media screen and (max-width:1200px) {
    .ts-section-nav+.ts-article,
    .ts-section-nav+.ts-page-nav+.ts-article {
        width: calc(100% - 296px)
    }
    .ts-article {
        width: calc(100% - 496px)
    }
}

@media screen and (max-width:1000px) {
    .ts-full-width-page .ts-main-content,
    .ts-landing-page .ts-main-content,
    .ts-products-page .ts-main-content {
        padding: 0 80px
    }
    .ts-section-nav+.ts-article,
    .ts-section-nav+.ts-page-nav+.ts-article {
        margin-left: 320px
    }
    .ts-article {
        margin: 0;
        width: 100%
    }
}

@media screen and (max-width:720px) {
  .ts-full-width-page .ts-main-content,
  .ts-landing-page .ts-main-content,
  .ts-products-page .ts-main-content,
  .ts-main-content {
      padding: 0 16px
  }
  .ts-section-nav+.ts-article,
  .ts-section-nav+.ts-page-nav+.ts-article {
      margin: 0;
      width: 100%
  }
}

.hypersite-main-content  {
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

.hypersite-full-width-page .hypersite-main-content {
    margin-bottom: 0
}

.hypersite-full-width-page .hypersite-main-content {
    margin: 0 auto
}

.hypersite-full-width-page .hypersite-banner {
    margin-top: 0
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

.ts-section-header__link {
  padding-top: 40px;
}
.ts-content-header__link {
  padding-top: 30px;
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
  margin-left: calc(50% - 49.4vw);
  margin-right: calc(50% - 49.4vw)
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
  padding-left: calc(50vw - 49.4%);
  padding-right: calc(50vw - 49.4%)
}

.ts-full-bleed p {
  color: inherit
}

.ts-full-width-page .ts-main-content, .ts-landing-page .ts-main-content, .ts-products-page .ts-main-content {
    padding: 0 24px;
}
@media all and (min-width: 600px) {
  .ts-full-width-page .ts-main-content, .ts-landing-page .ts-main-content, .ts-products-page .ts-main-content {
    padding: 0 40px;
  }
}
@media all and (min-width: 1024px) {
  .ts-full-width-page .ts-main-content, .ts-landing-page .ts-main-content, .ts-products-page .ts-main-content {
    padding: 0 80px;
  }
}


`;

