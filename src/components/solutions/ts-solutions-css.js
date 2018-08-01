import { html } from 'lit-html';

export const SolutionsStyles = html `

<style>
:host {
    display: block;
    padding: 0px;
  }

  h1 {
    margin: 0 0 5px -3px;
    color: rgba(0, 0, 0, .87);
  }
  h2 {
    margin-bottom: 40px;
  }

  #ts-site.ts-solutions {
      background: #ffffff url(/images/bg/wordpress-logo.svg) no-repeat;
      background-size: 80%;
      background-position: 50% 70px;
      background-attachment: fixed;
  }

  #ts-site.ts-solutions .hero {
    padding-bottom: 34px;
    padding: 14px;
  }

  #ts-site.ts-solutions .hero>div {
      padding: 24px 10px 24px 10px;
  }

  #ts-site.solutions .hero {
    padding: 20px 64px 30px 96px;
  }

  @media (min-width: 460px) {
    #ts-site {
      background-size: 35% !important;
      background-position: 100% 60px !important; }

    #ts-site.ts-solutions .hero {
      min-height: 270px;
      padding: 14px; }

    #ts-site.ts-solutions .hero>div {
        padding: 50px 20px 0 20px; }

    h1.paper-font-display2 {
        font-size: 42px;
        line-height: 44px;
        padding-right: 120px;
        margin-left: -3px; }

    h2.mdc-typography--headline3 {
        font-size: 16px;
        white-space: normal;
        padding-right: 120px; }
  } 
</style>

`;