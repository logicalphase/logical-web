import { css } from 'lit-element';

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
  margin-bottom: -24px
}

.ts-card__container .ts-card {
  flex: 0 1 100%;
  margin: 0 0 24px;
  max-width: 320px;
  min-height: 272px
}

@media all and (min-width: 600px) {
  .ts-card__container .ts-card {
      flex: 0 1 calc(50% - 24px);
      margin-left: 12px;
      margin-right: 12px
  }
}

@media all and (min-width: 1024px) {
  .ts-card__container .ts-card {
      flex-basis: calc(25% - 24px)
  }
}

@media all and (min-width: 600px) {
  .ts-card__container .ts-card--large {
      max-width: 408px
  }
}

@media all and (min-width: 1024px) {
  .ts-card__container .ts-card--large {
      flex-basis: calc(33.3% - 24px)
  }
}

@media all and (min-width: 600px) {
  .ts-card__container .ts-card--extra-large {
      max-width: 496px
  }
}

@media all and (min-width: 1024px) {
  .ts-card__container .ts-card--extra-large {
      flex-basis: calc(50% - 24px)
  }
}

.ts-card__container--left-aligned {
  justify-content: left
}

@media all and (min-width: 600px) {
  .ts-card__container--left-aligned {
      margin-left: -12px;
      margin-right: -12px
  }
}

@media all and (min-width: 600px) {
  .ts-card__container--left-aligned.ts-card__container--3up {
      margin-left: -12px;
      margin-right: -12px
  }
}

.ts-card__container--3up {
  margin-left: auto;
  margin-right: auto;
  max-width: 1038px
}

@media all and (min-width: 1024px) {
  .ts-card__container--3up .ts-card {
      flex-basis: calc(33.3% - 24px)
  }
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
  transition: box-shadow .3s ease-out, background-size .3s ease-out
}

.ts-card:hover {
  background-size: auto 103%;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, .2)
}

.ts-card__icon {
  align-items: center;
  box-sizing: content-box;
  display: flex;
  height: 32px;
  padding-top: 32px;
  width: 32px
}

.ts-card__icon svg {
  fill: currentColor;
  height: 100%;
  width: 100%
}

.ts-card__icon svg path {
  fill: currentColor
}

.ts-card__logo {
  display: flex;
  justify-content: center;
  padding: 32px 8px 0
}

.ts-card__logo.ts-card__logo--bg {
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  padding: 0
}

@media all and (min-width: 1024px) {
  .ts-card__logo.ts-card__logo--bg {
      height: 170px
  }
}

.ts-card__media {
  display: flex;
  height: 170px;
  justify-content: center;
  overflow: hidden;
  position: relative
}

.ts-card__media--image {
  height: auto;
  object-fit: cover
}

.ts-card__media--logo {
  align-self: center;
  position: absolute;
  width: 140px
}

.ts-card__top {
  padding: 32px 24px 0
}

.ts-card__content {
  padding: 32px 24px
}

.ts-card__content .ts-headline4 {
  padding-bottom: 16px
}

.ts-card__content p {
  margin: 0
}

.ts-card__content--featured {
  color: #1a73e8;
  margin-bottom: 24px;
  margin-top: 24px
}

.ts-card__content__quote-text {
  padding-left: 25px
}

.ts-card__footer {
  align-self: end;
  margin-right: auto;
  margin-top: auto;
  padding: 0 24px
}

.ts-card .ts-button {
  display: flex;
  justify-content: flex-start
}

.ts-card .ts-button+.ts-button {
  margin: 25px 0 0
}

.ts-card--extra-large .ts-card__content,
.ts-card--extra-large .ts-card__footer,
.ts-card--extra-large .ts-card__top,
.ts-card--large .ts-card__content,
.ts-card--large .ts-card__footer,
.ts-card--large .ts-card__top {
  padding-left: 32px;
  padding-right: 32px
}

.ts-card--extra-large .ts-card__media,
.ts-card--large .ts-card__media {
  height: 200px
}

.ts-card--no-hover {
  transition: none
}

.ts-card--no-hover:hover {
  background-size: auto;
  box-shadow: none
}

.ts-card__fab {
  position: absolute;
  right: 25px;
  top: 132px
}

@media all and (min-width: 1024px) {
  .ts-card__fab {
      top: 142px
  }
}

#ts-site .ts-card--four-columns {
  padding: 0
}

@media all and (min-width: 1024px) {
  #ts-site .ts-card--four-columns {
      flex-basis: calc(50% - 36px);
      margin: 0 18px 36px
  }
}

@media all and (min-width: 1440px) {
  #ts-site .ts-card--four-columns {
      flex-basis: calc(25% - 24px);
      margin: 0 12px 24px
  }
}

#ts-site .ts-card--four-columns .ts-card__container {
  flex-wrap: initial
}

#ts-site .ts-card--four-columns .ts-headline1 {
  font-size: 22px;
  line-height: 30px
}

#ts-site .ts-card--four-columns .ts-headline3 {
  font-size: 28px;
  line-height: 34px
}

#ts-site .ts-card--four-columns .ts-headline4 {
  font-size: 22px;
  text-transform: uppercase
}

#ts-site .ts-card--four-columns .highlight-price {
  color: #202124;
  font-size: 30px;
  font-weight: 500
}

.ts-pricing {
  padding-bottom: 48px;
  padding-top: 48px
}

.ts-pricing__text-body {
  margin-bottom: 24px;
  margin-top: 16px
}

.ts-pricing__footer {
  margin-top: 48px
}

.ts-pricing__table {
  display: grid;
  margin-bottom: 48px;
  margin-top: 48px
}

.ts-pricing__cards {
  margin-top: 48px
}

.ts-pricing__cards .ts-card__content {
  padding-bottom: 30px;
  padding-top: 56px
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content {
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: 100%;
  padding: 16px 24px 0;
  text-align: center
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content--featured {
  align-items: center;
  color: #000;
  display: grid;
  height: 112px;
  margin: 0
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content--featured h3 {
  font-size: 28px;
  padding: 0 10px
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content .ts-button {
  display: inline-flex;
  justify-content: center;
  margin: 16px 0
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content .ts-body-text__small {
  align-items: flex-end;
  display: inline-flex;
  font-weight: 600;
  margin-bottom: 26px
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content .ts-body-text__small a {
  padding-left: 8px
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content p {
  font-size: 14px;
  line-height: 23px;
  min-height: 70px
}

.ts-pricing__cards .ts-card--four-columns .ts-card__content ul {
  color: #5f6368;
  margin-bottom: 16px;
  padding-left: 22px;
  text-align: left
}

@media all and (min-width: 600px) {
  .ts-pricing {
      padding-bottom: 80px;
      padding-top: 80px
  }
}

@media all and (min-width: 1024px) {
  .ts-pricing__cards {
      margin-top: 80px
  }
}

.ts-card--product {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  padding: 32px 32px 48px;
}

.ts-card--product:hover {
  background-size: cover;
}

.ts-card--product + .ts-card--product {
  margin-top: -1px;
}

.ts-card--product .ts-card__icon {
  height: 40px;
  margin-bottom: 12px;
  padding-top: 0;
  width: 40px;
}

.ts-card--product .ts-card__heading,
.ts-card--product .ts-card__body {
  max-width: 390px;
}

.ts-card--product .ts-card__heading {
  padding-top: 12px;
}

.ts-card--product .ts-card__heading strong {
  display: block;
}

.ts-card--product .ts-card__body {
  margin-bottom: 24px;
  margin-top: 16px;
}

.ts-card--product .ts-card__footer {
  margin: 0;
  padding: 0;
}

.ts-card--product:not(.ts-card--center) .ts-card__link {
  margin-top: 36px;
}

.ts-card--product,
  .ts-card--story {
    padding: 40px;
  }

  .ts-card--product {
    min-height: 320px;
  }

  .ts-card--product .ts-card__icon {
    height: 48px;
    width: 48px;
  }

.ts-card--contact {
  background-color: #34A853; /* $green-500 */
  background-image: url('/images/home/contact-bg.svg');
  background-position: 50% 50%;
  background-size: cover;
}

.ts-section--security {
  background-image: url(/images/home/security-bg.jpg);
  background-position: 50% top;
  background-repeat: no-repeat;
  background-size: auto 30%;
  padding-top: 256px;
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

.ts-card--solution .ts-card__icon {
  height: 62px;
  margin-bottom: 21px;
  margin-left: -4px;
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

.ts-card--story {
  align-items: flex-end;
  border: unset;
  color: unset;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  min-height: 360px;
  padding: 32px;
}

.ts-card--story,
.ts-card--story:hover {
  background-size: cover;
}

.ts-card--story .ts-card__eyebrow {
  padding-bottom: 32px;
}

#ts-site .ts-card--story:not(.ts-card--reversed) .ts-card__eyebrow {
  color: unset;
}

@media only screen and (min-width: 600px) {
  .ts-section-body,
  .ts-card__body {
    font-size: 16px;
    line-height: 24px;
  }
  .ts-card--tall {
    min-height: 520px;
    padding-top: 32px;
  }
}
@media only screen and (min-width: 1024px) {
  .ts-hero::before,
  .ts-hero::after {
    height: 650px;
  }

  .ts-hero {
    padding-top: 0px;
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

  .ts-card--product .ts-card__heading {
    padding-top: 24px;
  }

}
`;