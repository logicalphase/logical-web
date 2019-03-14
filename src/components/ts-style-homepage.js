import { css } from 'lit-element';

export const TsHomePageStyle = css`
/* Material Design Typography */

.ts-section-body,
.ts-card__body {
  font-size: 14px;
  line-height: 22px;
}

.ts-section-header__heading {
  max-width: 720px;
  overflow-wrap: break-word;
}

.ts-section-header__link {
  padding-top: 60px;
}

.ts-section-header__eyebrow + .ts-section-header__heading {
  padding-top: 16px;
}

.ts-section-body {
  margin: 0 auto;
  max-width: 680px;
  padding: 0 0 24px;
}

.ts-hero__card-container {
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
}

.ts-hero__card {
  background: #f1f3f4;
  height: 100%;
  min-height: 320px;
  padding: 20px 24px;
}

.ts-hero__card--gcp {
  background: #FBBC04;
  background-image: url('/images/home/gcp-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 75%;
}

.ts-hero__card p,
.ts-hero__card--gcp p {
  color: inherit;
}

.ts-hero__buttons {
  margin-top: 12px;
}

.ts-button--dark {
  color: #202124;
}

#ts-site .ts-hero__card .button + .button {
  margin-left: 12px;
}

.ts-hero__card h2 {
  margin-top: 0;
  max-width: 320px;
}

.ts-hero__gsuite-icons {
  display: flex;
  margin-top: 60px;
}

.ts-hero__gsuite-icons--icon {
  margin: 5%;
  position: relative;
  width: 25%;
  z-index: 1;
}

.ts-hero__gsuite-icons--icon img {
  max-width: 60%;
}

.ts-hero__gsuite-icons--icon + .ts-hero__gsuite-icons--icon {
  margin-left: 12px;
}

.ts-hero__gsuite-icons--icon::before {
  background-color: #fff;
  border-radius: 50%;
  content: '';
  display: block;
  left: -3px;
  padding-top: 76%;
  position: absolute;
  top: -3px;
  transform: scale(1.5);
  width: 76%;
  z-index: -1;
}

.ts-home-sections {
  margin-bottom: 100px;
}

.ts-home-sections > section {
  margin-top: 40px;
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

.ts-section--reversed,
.ts-card--reversed,
#ts-site .ts-section--reversed .ts-section-header__eyebrow,
#ts-site .ts-section--reversed .ts-section-header__heading,
#ts-site .ts-card--reversed .ts-card__eyebrow,
#ts-site .ts-card--reversed .ts-card__heading {
  color: #fff;
}

#ts-site .ts-card--reversed strong {
  color: inherit;
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

.ts-section-events.next::before {
  background-image: url('/images/home/carousel-bg--next__left.svg');
  background-position: top left;
  height: 500px;
  left: -40px;
  width: 413px;
}

.ts-section-events.next::after {
  background-image: url('/images/home/carousel-bg--next__right.svg');
  background-position: top right;
  height: 443px;
  right: -40px;
  width: 488px;
}

.ts-home-sections .ts-section-customers__container {
  margin-top: 0px;
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

.ts-card--contact {
  background-color: #34A853; /* $green-500 */
  background-image: url('/images/home/contact-bg.svg');
  background-position: 50% 50%;
  background-size: cover;
}

.ts-section--security {
  background-image: url('/images/home/security-bg.jpg');
  background-position: 50% top;
  background-repeat: no-repeat;
  background-size: auto 30%;
  padding-top: 256px;
}

.ts-section--security .ts-section {
    background-color: #F8F9FA;
    padding: 72px 32px 60px;
    margin: 0 -16px;
}

#ts-site .ts-section--security .ts-section-header {
  margin-bottom: 24px;
}

.ts-security-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 340px;
  padding: 40px 0 36px;
}

.ts-security-badges__badge {
  align-items: center;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 8px 16px;
}

.ts-security-badges__logo {
  margin: 0 auto;
  text-align: center;
  width: 48px;
}

.ts-security-badges__logo img {
  max-height: 52px;
}

.ts-security-badges__logo--wide {
  width: 72px;
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

  .ts-hero::before,
  .ts-hero::after {
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 80%;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  /*
  .ts-hero::before {
    background-image: url('/images/home/hero-bg-right.svg');
    background-position: right 0;
    right: -378px;
    top: -61px;
  }

  .ts-hero::after {
    background-image: url('/images/home/hero-bg-left.svg');
    background-position: left 0;
    left: -382px;
  }
  */

  .ts-hero::before,
  .ts-hero::after {
    height: 80%;
  }

  .ts-hero {
    padding-top: 72px;
  }

  .ts-section-header {
    padding-bottom: 32px;
  }

  .ts-section-header__eyebrow + .ts-section-header__heading {
    padding-top: 24px;
  }

  .ts-home-sections .ts-section-events {
    margin-top: 100px;
  }

  .ts-section-events.next::before,
  .ts-section-events.next::after {
    background-size: 100%;
  }

  .ts-section-events.next::before {
    left: -90px;
    top: -154px;
  }

  .ts-section-events.next::after {
    right: -100px;
    top: -143px;
  }

  .ts-section-customers__logos::after {
    content: '';
    flex-basis: 100%;
    order: 1;
  }

  .ts-section-customers__logos li {
    order: 1;
  }

  .ts-section-customers__logos li:nth-child(n + 5) {
    order: 2;
  }

  .ts-section-products > .ts-grid__col:first-child {
    margin-right: -1px;
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

  .ts-card--tall {
    min-height: 520px;
    padding-top: 32px;
  }

  .ts-section--security {
    background-size: auto 80%;
    padding-top: 412px;
  }

  .ts-security-badges {
    justify-content: center;
    max-width: none;
  }

  .ts-section--security .ts-section {
    margin: 0;
  }

  .ts-card--story {
    min-height: 400px;
  }

  .ts-card--align-right {
    justify-content: flex-end;
    text-align: right;
  }
}

@media only screen and (min-width: 1024px) {
  .ts-hero::before,
  .ts-hero::after {
    height: 650px;
  }

  .ts-hero {
    padding-top: 80px;
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

  .ts-section-events.next::before {
    left: -174px;
    top: -154px;
  }

  .ts-section-events.next::after {
    right: -174px;
    top: -143px;
  }

  .ts-security-badges__logo {
    width: 80px;
  }

  .ts-security-badges__logo img{
    max-height: 58px;
  }

  .ts-card--story {
    margin-bottom: 24px;
    min-height: 480px;
    padding: 48px;
  }

  .ts-card__arrow {
    margin-top: 24px;
  }
}

@media only screen and (min-width: 1440px) {
  .ts-section-events.next::before {
    left: -60px;
  }

  .ts-section-events.next::after {
    right: -60px;
  }
}

.ts-home-v2 .ts-hero::after,
.ts-home-v2 .ts-hero::before {
  background-image: none;
}

#ts-site .ts-home-v2 .ts-hero-banner .ts-body-text__title {
  display: none;
}

#ts-site .ts-home-v2 .ts-hero-banner .ts-headline1 {
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
}

.ts-home-v2 .ts-hero__card .ts-headline3 a {
  color: #202124;
  text-decoration: none;
}

.ts-home-v2 .ts-hero__card .ts-headline3 a:hover {
  color: rgba(32,33,36,0.7);
}

#ts-site .ts-home-v2 .ts-hero__card-container {
  min-height: 320px;
}

.ts-home-v2 .ts-hero__card--gcp {
  background-image: url(/images/home/grid-of-shapes_v2_2x.png);
  background-position: right -115px bottom -25px;
  background-size: 80%;
}

.ts-home-v2 .ts-hero__card--gsuite {
  background-image: none;
}

.ts-home-v2 .ts-hero__gsuite-icons {
  justify-content: flex-start;
  margin-top: 24px;
  padding-bottom: 10px;
}

.ts-home-v2 .ts-hero__gsuite-icons img {
  height: 28px;
}

.ts-home-v2 .ts-hero__card.ts-hero__card--gsuite,
.ts-home-v2 .ts-hero__card.ts-hero__card--gsuite .ts-button.ts-button--secondary {
  background-color: #F8F9FA;
}

.ts-home-v2 .ts-hero__card.ts-hero__card--gsuite .ts-button.ts-button--secondary:hover {
  background: #eff5fd;
}

@media only screen and (max-width: 320px) {
  #ts-site .ts-home-v2 .ts-hero__card-container .ts-body-text__title {
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 22px;
  }

  #ts-site .ts-home-v2 .ts-hero__card-container .ts-headline3 {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (min-width: 321px) {
  .ts-home-v2 .ts-hero-banner {
    margin-bottom: 40px;
    text-align: center;
  }

  #ts-site .ts-home-v2 .ts-hero-banner .ts-headline1 {
    font-size: 48px;
    letter-spacing: -0.6px;
    line-height: 58px;
    margin-bottom: 24px;
  }

  #ts-site .ts-home-v.ts-heading-home.ts-display2,
  #ts-site .ts-home-v1 .ts-heading-home.ts-display2 {
    font-size: 48px;
    letter-spacing: -0.6px;
    line-height: 58px;
  }
}

@media (min-width: 460px) {
  .ts-home-v2 .ts-hero__card--gcp {
    background-image: url(/images/home/grid-of-shapes_v2_2x.png);
    background-position: right -45px bottom -20px;
    background-size: 55%;
  }
}

@media (min-width: 600px) {
  .ts-home-v2.ts-full-bleed--bg.ts-hero_wrapper {
    background-image: url(/images/home/home-bg-v2.svg);
    background-position: bottom;
    padding-bottom: 74px;
  }

  .ts-home-v2 .ts-hero-banner {
    margin: 0 55px 40px;
  }

  #ts-site .ts-home-v2 .ts-hero-banner .ts-body-text__title {
    display: block;
    margin: 20px auto 64px;
    max-width: 500px;
    text-align: center;
  }

  #ts-site .ts-home-v2 .ts-hero__card {
    min-height: 360px;
    width: 100%;
  }

  .ts-home-v2 .ts-hero__card h2 {
    max-width: 420px;
  }

  #ts-site .ts-home-v2 .ts-hero__card-container {
    margin: 0 auto;
    max-width: 926px;
  }

  .ts-home-v2 .ts-hero__card-container .ts-body-text__title {
    padding-right: 53%;
  }

  .ts-home-v2 .ts-hero__card--gsuite {
    background-image: url(/images/home/g-suite-lockup_2x.png);
    background-position: right bottom 50%;
    background-repeat: no-repeat;
    background-size: 52%;
  }
}

@media (min-width: 720px) {
  .ts-home-v2 .ts-hero__card--gcp {
    background-position: right bottom;
    background-size: 430px;
  }
}

@media only screen and (min-width: 1024px) {
  .ts-home-v2.ts-hero {
    padding-top: 72px;
  }

  #ts-site .ts-headline4 {
    font-size: 22px;
  }
}

@media only screen and (min-width: 1800px) {
  .ts-home-v2.ts-full-bleed--bg.ts-hero_wrapper {
    background-size: 1800px;
  }
}
`;