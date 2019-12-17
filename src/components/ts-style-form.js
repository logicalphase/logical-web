import { css } from 'lit-element';

export const TsFormStyle = css`
  :host {
    display: block;
  }
  .main-frame {
    margin: 0 auto;
    padding: 0 24px 48px 24px;
    max-width: 900px;
    overflow: hidden;
  }
  .empty-cart {
    text-align: center;
    white-space: nowrap;
    color: var(--app-secondary-color);
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 14px;
  }
`;
