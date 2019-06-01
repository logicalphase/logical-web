import { css } from 'lit-element';

export const TsTheme = css`
:host {
  display: block;
   
  /* Theme Colors */
  --app-primary-color: #8d008d;
  --app-primary-hover-color: #600060;
  --app-secondary-color: #000000;

  --app-primary-text-color: #212121;
  --app-reverse-text-color: #ffffff;
  --app-primary-border-color: #e0e0e0;
  
  --app-primary-background-color: #ffffff;
  --app-secondary-background-color: #f7f7f7;
  --app-primary-navigation-background: #edf0f2;
  --app-primary-text-thin-color: rgb(95, 99, 104);

  /* Link and Accent */
  --app-accent-color: var(--app-primary-color);
  --app-primary-link-color: var(--app-primary-color);
  --app-primary-icon-color: #3c4043;
  --app-primary-ts-icon-color: var(--app-primary-color);
  
  /* Drawer */
  --app-drawer-width: 326px;
  --app-drawer-background-color: var(--app-reverse-text-color);
  --app-drawer-text-color: var(--app-secondary-color);
  --app-drawer-selected-color: var(--app-primary-color);

  /* App Header */
  --app-header-background-color: var(--app-reverse-text-color);
  --app-header-text-color: var(--app-primary-text-color);
  --app-header-selected-color: var(--app-primary-color);

  /* App Footer */
  --app-footer-primary-background-color: var(--app-primary-icon-color);
  --app-footer-secondary-background-color: #5f6368;
  --app-footer-text-color: var(--app-reverse-text-color);

  /* App Section Background Colors */
  --app-primary-section-background-color: #f5f5f5;
  --app-secondary-section-background-color: var(--app-reverse-text-color);
  
  /* Form Colors */
  --app-form-border-color: #cccccc; 
  --app-form-text-color: #999999;
  --app-form-field-background-color: #ededed;
}
`;