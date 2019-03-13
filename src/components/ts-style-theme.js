import { css } from 'lit-element';

export const TsTheme = css`
:host {
  display: block;
  --app-drawer-width: 326px;

  --border-grey: #e0e0e0;
  --app-primary-color: #8d008d;
  --app-primary-hover-color: #600060;
  --app-link-color: #8d008d;
  --app-secondary-color: #000000;
  --app-nav-background: #edf0f2;
  --app-light-text-color: #ffffff;
  --app-section-even-color: #f7f7f7;
  --app-main-background-color: #ffffff;
  --section-background-light-grey: #f5f5f5;
  --icon-grey-color: #3c4043;

  --form-border-color: #cccccc; 
  --form-text-color: #999;
  --form-field-background-color: #ededed;

  --app-accent-color: var(--app-primary-color);
  --app-dark-text-color: var(--app-secondary-color);
  --app-section-odd-color: var(--app-light-text-color);
  --app-header-background-color: var(--app-light-text-color);
  --app-header-text-color: var(--app-dark-text-color);
  --app-header-selected-color: var(--app-primary-color);
  --app-drawer-background-color: var(--app-light-text-color);
  --app-drawer-text-color: var(--app-secondary-color);
  --app-drawer-selected-color: var(--app-primary-color);

  --footer-background-secondary-grey: #5f6368;
  --footer-background-grey: var(--icon-grey-color);
  --footer-text: var(--app-light-text-color);
}
`;