import {
  html
} from '@polymer/lit-element';

export const SidebarMenu = html `

  <aside class="sidebar">
    <div class="nav">
      <div class="sticky">
        <ul class="right-side-nav l-space-bottom-5">
          <li>
            <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Solutions Menu</h3>
          </li>
          <li>
            <a class="pagespeed" track-type="pagespeedOptimization" track-name="web-page" track-metadata-position="body" href="/pagespeed">Pagespeed Optimization</a>
          </li>
          <li>
            <a selected?="${_page === 'design'}" href="/design">Mobile First Design</a>
          </li>
          <li>
            <a class="emergency" track-type="emergencyResponse" track-name="web-page" track-metadata-position="body" href="/emergency">Emergency Response</a>
          </li>
          <li>
            <a class="security" track-type="security" track-name="web-page" track-metadata-position="body" href="/security">WordPress Security</a>
          </li>
          <li>
            <a class="migrations" track-type="migrations" track-name="web-page" track-metadata-position="body" href="/migrations">WordPress Migrations</a>
          </li>
          <li>
            <a class="care" track-type="preventiveCare" track-name="web-page" track-metadata-position="body" href="/care">Preventive Care</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>   
`;