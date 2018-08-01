import { html } from 'lit-html';

export const PrivacyStyles = html `

<style>
:host {
  display: block;
  padding: 0px;
  h1 {
    margin: 0 0 5px -3px;
    color: #77909c;
  }
  h2 {
    margin-bottom: 40px;
  }
  ul {
    margin-bottom:24px;
  }
  /* Box model */
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}


.table-responsive-vertical {
  max-width: 100%
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: #fff;
}
td, th {
  text-align: left;
  padding: .5rem;
  vertical-align: top;
  border-top: 0;
}
thead tr th {
  font-weight: 400;
  color: #222;
  vertical-align: bottom;
  border-bottom: 1px solid rgba(0,0,0,.12);
}
caption + thead,
colgroup + thead,
thead:first-child > tr:first-child th, td {
  border-top: 0;
}
tbody + tbody {
  border-top: 1px solid rgba(0,0,0,.12);
}

.table {
  background-color: #fff;
}

.no-border {
  border: 0;
}

.table-condensed thead, tbody, tfoot tr th, td {
  padding: .5rem;
}

.table-bordered {
  border: 0;
}
thead, tbody, tfoot tr th, td {
  border: 0;
  border-bottom: 1px solid #e0e0e0;
}

thead > tr  > th, > td {
  border-bottom-width: 2px;
}
.table-hover tbody > tr:hover {
  background-color: #f9edfc;
}

/* Smaller than 460 */
li.childlist {
  margin-left:16px;
  list-style-type: square;
}
strong {
  font-weight:500;
}

.ts-care .hero {
  background: none; 
  padding: 34px;
  text-align: center; }

h1.paper-font-display2 {
  font-size: 42px;
  line-height: 44px;
  padding-right: 0px; }

.ts-privacy h4 {
  padding-top: 10px; 
  font-size:19px !important; 

  color: #111; }

.ts-privacy p {
  color: #111;
}

.ts-privacy .ts-content-grid-box h2 {
  text-transform: uppercase;
  font-size: 26px;
  font-weight:300;
  color:#111;
}
.ts-privacy .ts-content-grid-box h3 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight:500;
  color:#111;
}

@media (min-width: 460px) {
  #ts-site.ts-privacy {
    background: #fff url(/images/header/ts-care-header.svg) no-repeat;
    background-size: 40%;
    background-position: 100% 90px;
    background-attachment: fixed;
  }

  .ts-privacy .main{
    padding-top: 44px;
  }

  #ts-site.ts-privacy .hero {
    min-height: 270px;
    padding: 14px;
    position: relative;
  }

  .ts-content-body {
    margin-bottom: 24px
  }

  .ts-content-body h3 {
    margin-bottom: 16px;
  }
  .ts-content-grid-box p {
    margin-bottom:16px;
  }

  .ts-content-grid-box p, .ts-content-grid-box h3, .ts-content-grid-box ul {
    max-width: 725px !important; 
    text-align: left; }

  .ts-privacy .ts-content-grid-box {
    min-height: 40px !important; 
    text-align: left;
    background-color: #ffffff;
    padding: 24px;
    margin-bottom: 24px; 
    margin-right: 44px; }

  #ts-site .ts-pad-right-4 {
    padding-right: 32px;
  }

  #ts-site .ts-showcase.is-split-left .ts-showcase-image {
    right: 0;
  }

  #ts-site .ts-pad-left-38+.ts-showcase-image,
  #ts-site .ts-pad-right-38+.ts-showcase-image {
    max-width: 304px;
  }

  #ts-site .ts-showcase-image {
    position: relative;
    text-align: center;
    top: 0;
    z-index: 1;
  }

  p.fine-print:first-child {
    margin-top: 24px;
  }

  .fine-print {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 12px;
    padding-left: 24px;
    line-height: 14px;
  }
}
@media (max-width: 800px) {
  #ts-site.ts-privacy {
    background-position: 100% 140px !important; }

  .ts-right {
    float: none !important;
    margin: 24px 30px 5px;
  }
} 
</style>

`;