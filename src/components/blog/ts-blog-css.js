import { html } from '@polymer/lit-element';

export const BlogStyles = html `

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
}

/* Smaller than 460 */

.ts-blog .hero {
  background: none; 
  padding: 34px;
  text-align: center; }

.columns {
  max-width: 987px;
  margin: 0 auto;
  padding-top: 34px; }

.ts-content-grid-box {
  max-width: 100%;
}
.ts-content-grid-box p {
  max-width: 620px;
}
.ts-read-more {
  padding: 13px 28px;
  background-color: #fff;
}
.ts-read-more .social_container {
  float: right;
  padding: 0px;
}
.social-icon {
  margin-left:7px;
  fill:  #888;
}
.gplus-icon:hover {
  fill:  #db4437;
}
.blogger-icon:hover {
  fill: #fb8f3d;
}
.twitter-icon:hover {
  fill: #1da1f2;
}
.facebook-icon:hover {
  fill: #3b5998;
}
.linkedin-icon:hover {
  fill:  #007bb5;
}

.ts-blog-meta-calendar svg{
  vertical-align: bottom;
}

#axis:hover .slide-left {
  transform: translate(-350px, 0);
  -webkit-transform: translate(-350px, 0);
  /** Safari & Chrome **/
  -o-transform: translate(-350px, 0);
  /** Opera **/
  -moz-transform: translate(-350px, 0);
  /** Firefox **/
}

.text-uppercase {
  border-top: 1px solid #e4e4e4;
  display: block;
  padding: 16px 28px;
}

#ts-site.ts-blog {
  background: #ffffff url('/images/bg/wordpress-logo.svg') no-repeat;
  background-size: 50%;
  background-position: 110% -80px;
  background-attachment: scroll;
}

#ts-site.ts-blog .hero {
  padding: 14px;
}

#ts-site.ts-blog .hero>div {
  padding: 44px 20px 0 24px;
}

#ts-site.home .hero {
  padding: 20px 64px 30px 96px;
}

.ts-grid-wrapper-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: left;
}

.ts-blog-list-item {
  margin-bottom: 24px;
}

.flex-hover-card {
  width: 100%;
}

.inner {
  padding: 20px 28px 0;
  min-height:165px;
  border-bottom: 1px solid #e4e4e4;
}

.small-print {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px !important;
  font-weight: 400 !important;
  padding-left: 0px;
  line-height: 14px;
}

.sidebar {
  background-color: #fff;
  width: 210px;
  margin-left: 34px;
  margin-top: 5px;
}

#ts-site .nav li h3 {
  color: #4a5960;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0 16px;
  padding-bottom: 0;
  padding-left: 20px;
}

#ts-site .nav li {
  margin-right: 17px;
}

ul.right-side-nav {
  list-style: none;
  padding-left: 0px;
}

#ts-site .nav li a {
  padding-left: 20px;
}

#resource_loader {
  margin-top: -80px;
}

.loader-wrapper {
  text-align: center;
}

.collapse-content {
  padding: 15px;
  border: 1px solid #dedede;
}

.category-vertical-lr {
  float: right;
  min-height:185px;
  position:relative;
  width: 20px;
  padding:0 3px 0 4px;
  font-size: 14px;
  letter-spacing: .08em;
  text-align:center;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  background-color:rgba(192,192,192,0.8);
  color: #fff;
}

.category-vertical-lr a {
  color: #fff;
}

@media (min-width: 460px) {
  #ts-site.ts-blog {
    background: #fff url(/images/header/ts-design-header.svg) no-repeat;
    background-size: 35%;
    background-position: 100% 90px;
    background-attachment: fixed;
  }

  #ts-site.ts-blog .hero {
    min-height: 270px;
    padding: 14px;
    position: relative;
  }

  .solutions-section-height {
    min-height:350px;
  }

  .ts-content-body {
    margin-bottom: 24px
  }

  .ts-content-body h2 {
    margin-bottom: 16px;
  }

  #ts-site .ts-pad-right-4 {
    padding-right: 32px;
  }

  #ts-site.ts-showcase.is-split-left .ts-showcase-image {
    right: 0;
  }

  #ts-site .ts-pad-left-38+.ts-showcase-image,
  #ts-site .ts-pad-right-38+.ts-showcase-image {
    max-width: 304px;
  }

  #ts-site.ts-showcase-image {
    position: relative;
    text-align: center;
    top: 0;
    z-index: 1;
  }

  .small-print {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 14px !important;
    padding-left: 0px;
    line-height: 14px;
  }
}
@media (max-width: 800px) {
  #ts-site.ts-blog {
    background-size: 40% !important;
    background-position: 100% 120px !important; }

  .ts-right {
    float: none !important;
    margin: 24px 30px 5px; 
  }

  .category-vertical-lr {
    height: auto;
    width: 20px;
    float: right;
    writing-mode: vertical-rl;
  }

  .small-print {
    font-size: 14px !important; }
}
</style>

`;