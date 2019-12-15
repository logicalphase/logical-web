import{CDN_HOST_URL,unsafeCSS,css,html,PageViewElement,updateMetadata,TsTableStyles,SharedStyles,TsTypographyStyle}from"./ts-app.js";const cdnHost=unsafeCSS(CDN_HOST_URL);class TSPrivacy extends PageViewElement{static get styles(){return[SharedStyles,TsTypographyStyle,TsTableStyles,css`
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      .hero {
        background: var(--app-reverse-text-color) url('https://${cdnHost}/images/header/ts-design-header.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }

      .text-headline {
        padding-top:24px;
      }

      li.childlist {
        margin-left:16px;
        list-style-type: square;
      }
      strong {
        font-weight:500;
      }

      h1.paper-font-display2 {
        font-size: 42px;
        line-height: 44px;
        padding-right: 0px; }

      h4 {
        padding-top: 10px; 
        font-size: 20px !important; 
        color: var(--app-secondary-color); }

      .ts-content-grid-box h2 {
        text-transform: uppercase;
        font-size: 28px;
        font-weight:400;
        color:var(--app-secondary-color);
      }
      .ts-content-grid-box h3 {
        text-transform: uppercase;
        font-size: 24px;
        color:var(--app-secondary-color);
      }

      @media (min-width: 460px) {
        .hero {
          background-position: 97% center;
        }

        h3 {
          font-weight: 400;
        }

        aside {
          margin-top: 30px;
        }

        p {
          text-align: left;
        }

        ul.right-side-nav {
          padding-left: 0px;
        }

        td:last-child {
          white-space: nowrap;
        }

        .hero>div {
          min-height: 120px;
        }
        .main{
          padding-top: 24px;
        }
        .ts-content-grid-box p {
          text-align: left;
          margin-bottom:16px;
          max-width: 100%;
          margin-right: 24px;
        }
        .ts-content-grid-box {
          min-height: 40px !important; 
          text-align: left;
          background-color: var(--app-reverse-text-color);
          padding: 0px 34px 0px 34px;
          margin-right: 44px; 
        }
        
        .sidebar {
          background-color: var(--app-secondary-section-background-color);
        }
        .sidebar h3 {
          font-weight: 400;
          padding-top: 24px;
        }
        .sidebar .text-uppercase {
          padding-left: 14px;
        }
      } 
    `]}render(){updateMetadata({title:"PageSpeed Optimizations - Logical Phase",description:"About page"});return html`
      <article id="ts-site" class="ts-privacy">
        <header class="hero">
          <div class="ts-header-wrapper fade-in">
            <h1 class="paper-font-display2 paper-font-light">Privacy Statement</h1>
            <h2 class="paper-font-title paper-font-light">Privacy is built into our services</h2>
            <p>Effective date: 25 May 2018</p>
          </div>
        </header>
        <div class="ts-content-wrapper">
          <section class="content full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main fade-in">
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Introduction</h2>
                  <p>We are both <a href="https://gdpr-info.eu/chapter-4/">Controllers and Processors</a> of data and we want you to understand how and why we collect, store, and use data for our business purposes and to comply with legal requirements. For simplicity, using the term "We" and "Our" means the same as the below listed Entities Covered section.</p>
                  <h3>Compliance with GDPR regardless of location</h3>
                  <p>In the interest of treating the privacy of all of our customers and visitors with equal respect, we have, to the legal extent possible, adopted the European Union's <a href="https://gdpr-info.eu/">General Data Protection Regulations (GDPR)</a> regarding how we manage customer privacy and their data. We reserve the right to ammend this privacy statement if changes become necessary.</p>
                  <h4>How to contact us with privacy questions or concerns</h4>
                  <p>My name is <strong>John Teague</strong>, and I'm in charge of how our technology collects data, how we use it, and safeguards we have in place to protect that data from unauthorized use or disclosure.</p>
                  <p>You can contact us about your privacy concerns at privacy@pressmedics.com, or in writing to:</p>
                  <p><strong>Pressmedics LLC</strong><br>C/O Legal and Compliance<br>241 109th Avenue Northwest<br>Minneapolis, MN 55448</p>
                  <p>We will promptly address your data privacy concerns, free of charge, and assist by answering questions you have about how your personally identifying information is handled. We will also assist you with disclosure, management, removal, accuracy and other aspects of your personally identifying information.</p>
                  <h4>Why we collect personally identifying information?</h4>
                  <p>We collect and use personally identifying information to facilitate the business relationships we have with our customers, to comply with financial regulations and other legal obligations, and to pursue our legitimate business interests. We also use personally identifying information to complete payment transactions and to provide payment-based services to our Users. We rely upon a number of legal grounds to ensure that our use of your personally identifying information is compliant with applicable law. </p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Entities Covered by This Privacy Statement</h2>
                  <p>This privacy statement covers the following web site domains, subdomains, and business entities of:</p>
                  <ul>
                    <li>Pressmedics LLC and pressmedics.com</li>
                    <li>Theme Surgeons and themesurgeons.com</li>
                    <li>GEMServers and gemservers.com</li>
                  </ul>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Legal Authority</h2>
                  <p>We are subject to the laws and regulations of the United States and the State of Minnesota, and we may be required to disclose personally identifying information in our possession if lawfully ordered to do so.</p>
                  <p>We comply with the EU–US Privacy Shield framework and the U.S.–Swiss Privacy Shield framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personally identifying information from European Union member countries and Switzerland. We certify that it adheres to Privacy Shield Framework principles of notice, choice, onward transfer, security, data integrity, access, and enforcement. To learn more visit the <a href="https://www.privacyshield.gov/welcome">Privacy Shield Framework</a>.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Types of data we collect</h2>
                  <p>The following situations require us to collect and store information that can be used to identify you.</p>
                  <h3>personally identifying information</h3>                  
                  <h4>User account creation</h4>
                  <p>Some of Our services require a username and password (login) in order to provide you with a unique account and secured access to services, features, and technical information. During Our account registration process, We will collect your:
                  <ul>
                    <li>Your first and last name</li>
                    <li>A valid email address</li>
                    <li>Strong password of your choice</li>
                  </ul>
                  <p>In addition, you may voluntarily submit other information, such as web site link, social media usernames, and other personally identifying information that can help make your experience better. You can decide what information you wish to make public by opting in to make that data publicly available. By default, your personally identifying information is private and not publicly available.</p>
                  <h4>Business communications</h4>
                  <p>We use third party service providers to assist Us in managing and administering communications sent to Us through our website(s) and web applications, solicit testimonials, and for customer support. Any personal information disclosed through such communications will be governed by such third party vendors’ privacy policies. A list of our current vendors can be viewed at the bottom of this document.</p>
                  <h4>Subscriptions and Services</h4>
                  <p>If you decide to subscribe to one of our hosting plans, managed services, or contract with us for specific services, we will collect the following personally identifying information from you: </p>
                  <ul>
                    <li>Your first and last name</li>
                    <li>A valid email address</li>
                    <li>Strong password of your choice</li>
                    <li>The name of your business if any</li>
                    <li>Your billing address</li>
                    <li>Your physical address if different than your billing address</li>
                    <li>Telephone number</li>
                    <li>Credit card information for payment purposes</li>
                  </ul>
                  <h4>Third party payment processors</h4>
                  <p>We do not store credit card or other financially sensitive information on servers under our control. We use a third party payment processor that meets our privacy and security standards, and who agree to comply with our privacy policy and other business requirements.</p>
                  <p>If you choose to continue service with Us via a paid account, one of our authorized third-party payment processing services will collect the following personal information from you: 
                  <ul>
                    <li>Name on your credit card</li>
                    <li>Credit card number</li>
                    <li>Credit card expiration date</li>
                    <li>3 digit CVC code</li>
                    <li>Postal Code</li>
                    <li>Other information used to verify that you are authorized to make a purchase with the credit card</li>  
                  </ul>
                  <p>Your personal and credit card information is kept on file on the payment processor's secured datacenters in order to process recurring invoices. Upon discontinuation of Pressmedics service, your credit card information will be permanently deleted from our payment processor's system. If We are unable to process your subscription for a given month, your personal information along with your account information may be used to contact you and for the purposes of collecting a debt should the need arise.</p>
                  <p>We use the services of Google Cloud Platform, Stackpath, Serverpilot, Sendgrid, and other strategic technology partners. Personal information hosted by or through Us is subject to that vendors privacy policies which may or may not contain terms as strong as this Privacy Statement. A current list of our vendor and partner privacy policies are available on their respective websites and at the bottom of this page.</p>
                  <h4>Login access to existing accounts for contracted services</h4>
                  <p>Some of Our services may require access to existing web hosting, domain registration, and supporting services accounts. This may include a username and password with certain permissions we need to perform required work. If you choose to provide this information, we recommend that you create a separate account that is strictly used by Us. You should not share existing login information for security reasons. However, if you choose to supply login access for these types of accounts we will store tham in a hashed and encrypted state, and they will be destroyed at the conclusion of the contracted work.</p>
                  <h4>Hosted websites</h4>
                  <p>Users hosting websites with Us are given tools that may ask you to optionally enter your email address when making comments on their website, or contacting them through their website. Since users on Pressmedics can manipulate the HTML code on their site directly, there are opportunities available for a malicious user to inject code that would log your information before it reaches Our system. In addition, once in Our system, website owners will have the opportunity to review and modify any information entered into their website. Since We do not have full control over how members use their individual sites, this Privacy Statement does not apply to any hosted website We host or do not own. You should make sure you trust the owner of a particular website before submitting personal information on that site.</p>
                  <h4>Social media</h4>
                  <p>The Website provides users the opportunity to interact and post content through various social media sites. Your interactions with such tools, and any information you provide in connection with these interactions are publicly viewable outside of the Website domain. Each social media site has its own privacy policies, that may be more or less protective than this Policy. If you do not wish for this information to be disclosed, then you should not use these tools. We are not responsible for information you choose to post with such tools.</p>
                  <p>Our site also includes Social Media Features, such as the Facebook button, and Widgets, such as the Share this button or interactive mini-programs that run on Our site. These Features may collect your IP address, which page you are visiting on Our site, and may set a cookie to enable the Feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on Our Site. Your interactions with these Features are governed by the Privacy Statement of the company providing it.</p>
                  <h4>Comments and User Content Posted to Our Website(s)</h4>
                  <p>If you post any Comments or User Content on the Website, you should be aware that any personal information you choose to provide there may be read, collected, or used by other users of the Website, as well as other third parties. We cannot guarantee that other users have not made copies of and/or will not use such information outside of the Website. We are not responsible for information you choose to post in this forum.</p>
                  <h4>Frames and embedded third-party content</h4>
                  <p>Some of Our pages utilize framing and embedding techniques to serve content to/from Our partners while preserving the look and feel of Our Website. Please be aware that you are providing your personal information to these third parties and not to Our websites.</p>
                  <h3  class="text-headline">Technical data we collect</h3>
                  <p>Except in very specific cases explained in this Privacy Statement, technical data is classified as non-personally identifying information that we collect and aggregate using automated and manual collection processes</p>                  
                  <h4>Server logs</h4>
                  <p>When accessing web pages on the Website, We may log your IP address, access URL, time of access, geographic location, browser type, and referral URL in order to provide Us with internal information regarding site traffic and usage statistics. Under certain circumstances, We may also link technical data to persons who are using the service for illegal purposes or other activity that is deemed in conflict with Our Terms of Service. Otherwise, this information is used in the aggregate, and is never linked back to any personal information.</p>
                  <h4>Visitors of our Websites</h4>
                  <p>When you visit one of our websites we collect non-personally identifying information, including Internet Protocol (IP) address, browser type used to visit us, the site that referred you to our site, language preference, the length of time you spent on our site, what pages you visited, and the date and time the visit occurred on.</p>
                  <p>We use technical data to help us better understand how our websites and applications are being used, make our site more appealing and informative, and for security reasons. We do not share that data with any other party unless required by law.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">How we use the data we collect</h2>
                  <p>The following explains how we use data we collect.</p>
                  <h3 class="text-headline">Use of personally identifying information</h3>                  
                  <h4>Sales, marketing, and financial transactions</h4>
                  <p>We use personally identifying information we collect to help facilitate business transactions with our paying customers, normal business practices for a hosting and technical services company, and help us determine if there are opportunities to expand our business operations and dtermine if we are meeting our business goals.</p>
                  <h4>Communications</h4>
                  <p>We obviously need to communicate with our customers, and we use personally identifying information like email addresses, telephone numbers, chat handles, and billing addresses to facilitate that communication and effectively support our paying customers. We also periodically prepare newsletters we send to customers and users who opt in for that service.</p>
                  <h4>Legal compliance</h4>
                  <p>We are required to comply with certain laws and regulations of the United States of America, the State of Minnesota, and the laws of other locations we choose to do business in. For example, we are required to take reasonable steps to store accurate financial records such as invoices, receipts, and for banking and tax regulations for specific periods.</p>
                  <h3 class="text-headline">Use of technical data</h2>
                  <p>The following explains how we use non-personally identifying information technical data</p>
                  <h4>Security</h4>
                  <p>We use technical data, including visitor IP addresses, referring websites, browser type, URL patterns, and other related data to help us monitor, identify, and act to keep our data and our customers data secure and private.</p>
                  <h4>Analytics</h4>
                  <p>We also combine technical data we collect from visitors and non-personally identifying information for users who access our applications and systems to help us fix bugs, create new and better features, generally understand who our audiences are and how they are finding our websites. We do not link this type of data to specific persons except in the case of security incidents, in cooperation with law enforcement investigations or by lawful order.</p>
                  <h4>Marketing</h4>
                  <p>We aggregate technical data to better help us understand steps we need to take to better our business products and services to the widest audience we can. But this data is not linked to any specific person.</p>
                  <h4>Server Logs</h4>
                  <p>When accessing web pages on the Website, We may log your IP address, access URL, time of access, geographic location, browser type, and referral URL in order to provide Us with internal information regarding site traffic and usage statistics, to identify errors and bugs, and to help us tune our servers and systems. This information may also be used to identify users who are using the service for spam or other activity that is deemed in conflict with Our Terms of Service. Otherwise, this information is used in the aggregate, and is never linked back to any personal information.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Where we store personally identifying information</h2>
                  <p>Where we store both personally identifying information and non-personally identifying information We collect and host.</p>
                  <h3>International data transfers</h3>
                  <p>Visitor and user data may be transferred to, and processed in, countries other than the country in which they reside. Specifically, Our websites and services are hosted on servers located in the United States of America and on third party service provider and partner servers internationally. This means that when We collect visitor and user data, that data may be processed in other countries. For example, our hosting services leverage Google Cloud Platform servers that are in datacenters located in advantageous locations around the world. For more information about how we transfer visitor and user data, please contact privacy@pressmedics.com.</p>
                  <h3 class="text-headline">Local server storage</h3>
                  <h4>In-house data storage</h4>
                  <p>We store personally identifying information and associated technical data on our in-house private cloud servers, business management software, project management software, and calendars and email software. In-house data storage may be moved to one of our Google Cloud Storage or Google Drive storage (now referred to as Google One) upon completion of work or upon termination of a customers hosting or managed services subscription.</p>
                  <h4>Remote data storage</h4>
                  <p>We store personally identifying information on the following third-party partner services, and those third party partner services may have privacy policies that may or may not be as strong as Ours. We have added links to each of those partner's privacy policy so you can review those policies.</p>
                  <div class="table-responsive-vertical mdc-elevation--z1">
                    <!-- Table starts here -->
                    <table id="vendors_list_one" class="table table-hover table-mc-light-blue">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Purpose</th>
                          <th>Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-title="Name">PayPal</td>
                          <td data-title="Purpose">Payment processing and invoicing.</td>
                          <td data-title="Link">
                            <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Stripe</td>
                          <td data-title="Purpose">Payment processing and invoicing.</td>
                          <td data-title="Link">
                            <a href="https://stripe.com/us/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Cloud Platform</td>
                          <td data-title="Purpose">Hosting services and backup storage.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google G Suite</td>
                          <td data-title="Purpose">Business communications and customer management.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Domains</td>
                          <td data-title="Purpose">Registration and administration of customer domain names.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Sendgrid</td>
                          <td data-title="Purpose">Business communications.</td>
                          <td data-title="Link">
                            <a href="https://sendgrid.com/policies/privacy/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Helpscout</td>
                          <td data-title="Purpose">Customer support management.</td>
                          <td data-title="Link">
                            <a href="https://www.helpscout.net/company/legal/privacy/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td class="no-border" data-title="Name">IBM Softlayer / Webfaction</td>
                          <td class="no-border" data-title="Purpose">Hosting services</td>
                          <td class="no-border" data-title="Link">
                            <a href="https://www.ibm.com/privacy/us/en/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">How we protect personally identifying information</h2>
                  <p>The security and privacy of our customers data is of paramount importance to us, and we take multiple steps to protect that data from unauthorized disclosure.</p>
                  <h4>Authentication, Integrity, and Encryption</h4>
                  <p>Both We and Our Internet as a Service (IaaS) provider, Google Cloud Platform, employ several security measures to help ensure the authenticity, integrity, and privacy of data in transit and while at rest.</p>
                  <ul>
                    <li><strong>Authentication:</strong> we verify the data source, either a human or a process, and destination.</li>
                    <li><strong>Integrity:</strong> we make sure data you send arrives at its destination unaltered.</li>
                    <li><strong>Encryption:</strong> we make your data unintelligible while in transit to keep it private and protected.</li>
                  </ul>
                  <h4>Encryption protects your data in three ways:</h4>
                  <ul>
                    <li><strong>Encryption at rest:</strong> protects your data from a system compromise or data exfiltration by encrypting data while stored. The Advanced Encryption Standard (AES) is often used to encrypt data at rest.</li>
                    <li><strong>Encryption in transit:</strong> protects your data if communications are intercepted while data moves between your site and the cloud provider or between two services.</li>
                    <li><strong>Encryption in use:</strong> protects your data when it is being used by servers to run computations, e.g. homomorphic encryption.</li>
                  </ul>
                  <h4>Hashed passwords</h4>
                  <p>All passwords for our accounts and logins for our services and systems are protected using Strong Hashing. Hashing is the act of converting passwords into unreadable strings of characters that are designed to be nearly impossible to convert back into a readable form. We also use internal methods to test all saved and stored passwords to make sure they are strong enough not to be easily cracked by intrusion methods. If we discover that your password is not strong enough, we reset it automatically to a strong one and then email you a notice that we have with a one time link to login and change it.</p>
                  <h4>User access monitoring</h4>
                  <p>Employee, approved vendors, and customers who access our systems and services are logged. Those logs include the username used to login, timestamps, areas accessed, locatioms, and other data designed to help us investate security incidents and to protect our systems and data.</p>
                  <h4>Training, reporting, and compliance</h4>
                  <p>We created our business from the ground up, starting with security. We provide multiple avenues of training for our employees, vendors, and customers, including written training materials, videos, newsletters, articles, and formal programs all designed to keep focus on the security of our systems and data we store. We provide extra incentives for all users of our systems to report any suspicious or unusual activity. Our approach to security also includes enforcing compliance and limiting access to only what is actually necessary for people who use our systems.</p>
                  <h4>Intrusion detection</h4>
                  <p>We use 24 hour, defense in depth security processes, which include monitoring our websites, networks, and servers for unusual activity or activity that is not authorized. Those methods also include firewalls, scanning, and alerts for attempts to intrude into our systems.</p>
                  <h4>Server and application firewalls</h4>
                  <p>We deploy firewall software and hardware that use rules to help prevent unauthorized access to applications and data that reside on our systems. For example, bad actors often try to gain access to networks and servers through open ports. Our firewalls block access to ports we don't specifically use and secure by other methods. Firewalls also contain rules that block access to IP addresses known for brute force and other attack vectors.</p>
                  <h4>Routine internal audit</h4>
                  <p>We perform routine and unanounced audits using our own internal methods and by third party security assets. These audits are designed to test our systems for vulnerabilites, and ensure that employees, customers and others follow our security policies and guidelines. We use what we learn from these audits to correct deficiencies and vulnerabilities and correct poor security practices by the people who use them.</p>
                  <h4>Google Cloud Platform physical and virtual security</h4>
                  <p>One of the primary reasons why we chose Google as our Internet as a Service (IaaS) provider is because of the extraordinary level and focus they have on physical and virtual security. They employ some of the world's foremost experts in information, application, and network security. We use their model in creating our own. Learn more about <a href="https://cloud.google.com/security/overview/whitepaper">Google Cloud security</a>.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Sharing of personally identifying information</h2>
                  <p>This Website contains links to other sites that are not owned or controlled by Pressmedics LLC. Please be aware that We are not responsible for the privacy practices of such other sites.</p>
                  <h4>By lawful order</h4>
                  <p>Like all businesses operating in the United States and elsewhere we are legally required to divulge any information so ordered and executed by proper legal authority. In cases where we disagree with an order we may pursue relief from an order, but we are ultimately required to comply with the legal outcomes of those challenges.</p>
                  <h4>Legal proceedings</h4>
                  <p>In the even of legal proceedings, including but not limited to law suits filed for or against us, collection of debts owed to us, and if we are subpoened to provide information by law, we will comply with those orders.</p>
                  <h4>In case of imminent danger</h4>
                  <p>If we have reason to believe that any action, behavior, or incident could put our customers or staff in physical danger, we may divulge personally identifying at our discretion at any time. Examples of this include threats of physical violence to persons or property, stalking, when we have reason to believe someone may injure themselves or others, or similar acts. We will immediately notify proper legal authority and work with them as we deem necessary.</p>
                  <h4>International data transfers</h4>
                  <p>Like other businesses that host web sites and perform certain services involving information, it is necessary for us to permit the transfer of data, including data that may contain personally identifying information, to servers and storage locations outside our physical address. This is necessary for many reasons. For example, our hosting plans allow people to choose from among several physical datacenter locations, both inside and beyond the borders of the United States, so their website is located closer to the location where their users are. This reduces latency and other bottlenecks that slow performance of web sites.</p>
                  <p>Our Internet as a Service (IaaS) provider requires datacenters located outside the United States, and the European Union, to agree to and comply with the same security and best practives they depend inside those bounderies. The most important point about inernational data transfers is that we live in a connected world where information is transmitted at the speed of light to datacenters and carriers all over the globe. However, we take reasonable precautions to make sure your data is secured while in transit and while at rest no matter the location.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">How long do we store personally identifying information?</h2>
                  <p>This Website contains links to other sites that are not owned or controlled by Pressmedics LLC. Please be aware that We are not responsible for the privacy practices of such other sites.</p>
                  <h4>Current retention policy</h4>
                  <p>Business financial transactions - 10 years.</p>
                  <p>Backups of account data  - 10 years.</p>
                  <p>User login - 5 days after cancellation or expired services.</p>
                  <p>User account information - 1 month after cancellation or expired services.</p>
                  <p>Backups of hosted websites - 15 days after cancellation or expired services.</p>
                  <p>Any of the above listed types of data may be retained for an declared or unlimited period, if lawfully ordered or for other legal purposes related to our business entities.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Links to Other Sites</h2>
                  <p>This Website contains links to other sites that are not owned or controlled by Pressmedics LLC. Please be aware that We are not responsible for the privacy practices of such other sites.</p>
                  <p>We encourage you to be aware when you leave Our site and to read the privacy policies of each and every website that collects personal information. You will receive a notification when you leave Pressmedics.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Cookies and similar browser technologies</h2>
                  <p>Our websites only use cookies solely to enable our websites and applications to function properly. We do not use tracking cookies and nor do we use any third party cookies.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Children under the age of 13</h2>
                  <p>Our websites and online services are not directed to children under the age of 13, and We do not knowingly collect personal information from children under 13. If We become aware that a child under 13 has provided Us with personal information, We will delete such information from Our files.</p>
                  <p>We do not allow persons under the age of 18 to enter into contractual, subscription, or services with Us without a parent's or guardian's written permission.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">MISC</h2>
                  <p>We take your privacy seriously. We do not sell, lease, or exchange your personally identifying information to, or otherwise share your personally identifying information with, third parties in ways other than described in this Privacy Statement. By using Pressmedics services, and services available at the other above listed domains, you are using a service provided by Pressmedics LLC. (collectively, the “Service”) and you agree to be bound by the Terms of Service and this Privacy Statement. Some capitalized terms used in this Privacy Statement and not otherwise defined may be defined in the Terms of Service. This Privacy Statement only addresses activities from servers under Our control.</p>
                </div>
                <div class="ts-content-grid-box">
                  <h2 class="text-headline">Third party vendors and partners</h2>
                  <p>We partner with several third party businesses that meet our standards of data collection, use, security, and privacy. These partner businesses maintain their own separate privacy policies, and we have prepared the following list of those partners, why we partner with them, and a link to their specific privacy policies.</p>
                  <div class="table-responsive-vertical mdc-elevation--z1">
                    <!-- Table starts here -->
                    <table id="vendors_list_two" class="table table-hover table-mc-light-blue">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Purpose</th>
                          <th>Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-title="Name">PayPal</td>
                          <td data-title="Purpose">Payment processing and invoicing.</td>
                          <td data-title="Link">
                            <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Stripe</td>
                          <td data-title="Purpose">Payment processing and invoicing.</td>
                          <td data-title="Link">
                            <a href="https://stripe.com/us/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Cloud Platform</td>
                          <td data-title="Purpose">Hosting services and backup storage.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Domains</td>
                          <td data-title="Purpose">Website traffic and usage analysis, and marketing.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Analytics</td>
                          <td data-title="Purpose">Website traffic and usage analysis, and marketing.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google G Suite</td>
                          <td data-title="Purpose">Business communications and customer management.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Google Domains</td>
                          <td data-title="Purpose">Registration and administration of customer domain names.</td>
                          <td data-title="Link">
                            <a href="https://policies.google.com/privacy" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Sendgrid</td>
                          <td data-title="Purpose">Business communications.</td>
                          <td data-title="Link">
                            <a href="https://sendgrid.com/policies/privacy/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Stackpath</td>
                          <td data-title="Purpose">Content Distribution Network for our hosted services.</td>
                          <td data-title="Link">
                            <a href="https://sendgrid.com/policies/privacy/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">Helpscout</td>
                          <td data-title="Purpose">Customer support management.</td>
                          <td data-title="Link">
                            <a href="https://www.helpscout.net/company/legal/privacy/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td data-title="Name">IBM Softlayer / Webfaction</td>
                          <td data-title="Purpose">Hosting services</td>
                          <td data-title="Link">
                            <a href="https://www.ibm.com/privacy/us/en/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                        <tr>
                          <td class="no-border" data-title="Name">Github</td>
                          <td class="no-border" data-title="Purpose">Software application version control and testing.</td>
                          <td class="no-border" data-title="Link">
                            <a href="https://help.github.com/articles/github-privacy-statement/" target="_blank">Policy <svg style="vertical-align:middle;margin-top:-2px;width:18px;height:18px" viewBox="0 0 24 24"><path fill="var(--app-primary-color)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" title="External link" /></svg></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
              <aside class="sidebar">
                <div class="nav">
                  <div class="sticky">
                    <ul class="right-side-nav l-space-bottom-5">
                      <li>
                        <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="privacy">On this page</h3>
                      </li>
                      <li>
                        <a style="background:#edf0f2;color:var(--app-primary-color);text-decoration:none;" class="privacy" track-type="privacyStatement" track-name="web-page" track-metadata-position="sidebar" href="/privacy">Introduction</a>
                      </li>
                      <li>
                        <a class="transparency" track-type="transparency" track-name="web-page" track-metadata-position="sidebar" href="/transparency">Entities Covered</a>
                      </li>
                      <li>
                        <a class="aup" track-type="acceptableUse" track-name="web-page" track-metadata-position="sidebar" href="/acceptable-use-policy">Legal Authority</a>
                      </li>
                      <li>
                        <a class="security" track-type="securityGuarantee" track-name="web-page" track-metadata-position="sidebar" href="/security-guarantee">Data We Collect</a>
                      </li>
                      <li>
                        <a class="sla" track-type="serviceLevelAgreement" track-name="web-page" track-metadata-position="sidebar" href="/sla">Website Visitors</a>
                      </li>
                      <li>
                        <a track-type="vendors" track-name="web-page" track-metadata-position="sidebar" href="/vendors">Links to Sites</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </article>
    `}}window.customElements.define("ts-privacy",TSPrivacy);