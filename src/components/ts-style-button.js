import { css } from 'lit-element';

export const TsButtonStyle = css`
  .ts-button {
    align-items: center;
    border: 0;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: 500 1em 'Roboto', Arial, sans-serif;
    height: 44px;
    justify-content: center;
    letter-spacing: 0.5px;
    min-width: auto;
    outline: none;
    padding: 1.7em 24px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: none;
    vertical-align: inherit;
  }
  .ts-button:disabled,
  .ts-button:disabled:focus,
  .ts-button:disabled:hover {
    background-color: var(--app-button-disabled-background-color);
    border-color: var(--app-button-disabled-background-color);
    color: var(--app-reverse-text-color);
    cursor: default;
  }
  .ts-button:active {
    box-shadow: none;
  }
  .ts-button:focus {
    text-decoration: none;
  }
  .ts-button--primary {
    background-color: var(--app-primary-color);
    color: var(--app-reverse-text-color);
  }
  .ts-button--primary:hover {
    background-color: var(--app-primary-hover-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .ts-button--primary:active,
  .ts-button--primary:focus {
    background-color: var(--app-primary-color);
  }
  .ts-button--primary:active::before,
  .ts-button--primary:focus::before {
    background-color: var(--app-reverse-text-color);
    content: '';
    height: 100%;
    opacity: 0.24;
    position: absolute;
    width: 100%;
  }
  .ts-button--primary.ts-button--reversed {
    background-color: var(--app-reverse-text-color);
    color: var(--app-secondary-color);
  }
  .ts-button--primary.ts-button--reversed:focus,
  .ts-button--primary.ts-button--reversed:hover {
    background-color: var(--app-button-primary-reversed);
  }
  .ts-button--secondary {
    background-color: var(--app-reverse-text-color);
    border: 1px solid var(--app-button-disabled-background-color);
    color: var(--app-primary-color);
    padding: 0 23px;
  }
  .ts-button--secondary:active,
  .ts-button--secondary:focus,
  .ts-button--secondary:hover {
    border-color: var(--app-button-secondary-border);
  }
  .ts-button--secondary:hover {
    background-color: var(--app-primary-section-background-color);
  }
  .ts-button--secondary:active,
  .ts-button--secondary:focus {
    background-color: var(--app-button-disabled-background-color);
  }
  .ts-button--secondary.ts-button--dark,
  .ts-button--secondary.ts-button--reversed {
    background-clip: padding-box;
    background-color: transparent;
    padding-left: 22px;
    padding-right: 22px;
  }
  .ts-button--secondary.ts-button--reversed {
    border-color: var(--app-reverse-text-color);
    border-width: 2px;
    color: var(--app-reverse-text-color);
  }
  .ts-button--secondary.ts-button--reversed:active,
  .ts-button--secondary.ts-button--reversed:focus,
  .ts-button--secondary.ts-button--reversed:hover {
    background-color: var(--app-button-primary-reversed);
    border-color: var(--app-button-primary-reversed);
    color: var(--app-secondary-color);
  }
  .ts-button--flat {
    border-radius: 0;
    color: var(--app-primary-color);
    height: auto;
    padding: 0;
  }
  .ts-button--flat:visited {
    color: var(--app-primary-color);
  }
  .ts-button--flat:focus,
  .ts-button--flat:hover {
    color: var(--app-primary-color);
  }
  .ts-button--flat:focus {
    background-color: var(--app-button-flat-background-color);
    outline: 10px solid var(--app-button-flat-background-color);
  }
  .ts-button--flat .ts-button__icon {
    display: inherit;
    font-size: 16px;
    padding-left: 4px;
  }
  .ts-button--flat .ts-button__icon--external {
    transform: rotate(-45deg);
  }
  .ts-button--flat .ts-button__icon--jump {
    padding-bottom: 4px;
    padding-left: 0;
    transform: rotate(90deg);
  }
  .ts-button--flat .ts-button__icon--jump-back {
    padding-left: 0;
    padding-top: 4px;
    transform: rotate(270deg);
  }
  .ts-button--flat__heading {
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 30px;
    margin: 0;
    color: var(--app-primary-text-color);
    text-transform: none;
  }

  @media all and (min-width: 600px) {
    .ts-button--flat__heading {
      font-size: 22px;
    }
  }
  .ts-button--flat__heading .ts-button__icon {
    color: var(--app-primary-color);
    font-size: 20px;
  }
  .ts-button--flat__heading:focus,
  .ts-button--flat__heading:hover {
    color: var(--app-primary-text-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .ts-button--flat__heading:focus .ts-button__icon,
  .ts-button--flat__heading:hover .ts-button__icon {
    color: var(--app-primary-hover-color);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .ts-button--flat svg {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
  .ts-button--flat.ts-button--reversed {
    color: var(--app-reverse-text-color);
  }
  .ts-button--flat.ts-button--reversed:hover {
    color: var(--app-button-primary-reversed);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .ts-button--flat.ts-button--reversed:focus {
    background-color: var(--app-button-flat-background-color);
    color: var(--app-primary-text-color);
    outline: 10px solid var(--app-button-flat-background-color);
  }
  .ts-button--flat.ts-button--reversed .ts-button__icon {
    color: inherit;
  }
  .ts-button--flat.ts-button--dark:focus {
    outline: 10px solid rgba(32, 33, 36, 0.2);
  }
  .ts-button--flat.ts-button--dark .ts-button__icon {
    color: inherit;
  }
  .ts-button.ts-button--dark {
    border-color: rgba(32, 33, 36, 0.4);
    color: var(--app-primary-text-color);
  }
  .ts-button.ts-button--dark:hover {
    color: rgba(32, 33, 36, 0.7);
    transition: background-color 0.3s ease-out;
    -webkit-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
  }
  .ts-button.ts-button--dark:focus {
    background-color: rgba(32, 33, 36, 0.2);
  }
  .ts-button__icon--no-wrap {
    align-items: inherit;
    display: inherit;
    justify-content: inherit;
    white-space: nowrap;
  }
  .ts-button-fab {
    align-items: center;
    background-color: var(--app-primary-color);
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    display: inline-flex;
    height: 56px;
    justify-content: center;
    outline: none;
    text-decoration: none;
    transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1),
      280ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 56px;
    will-change: box-shadow, background;
  }
  .ts-button-fab:focus,
  .ts-button-fab:hover {
    background-color: var(--app-primary-hover-color);
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
    text-decoration: none;
  }
  .ts-button-fab--red {
    background-color: var(--app-button-fab-red);
  }
  .ts-button-fab--red:focus,
  .ts-button-fab--red:hover {
    background-color: var(--app-button-fab-red-hover);
  }
  .ts-button-fab .material-icons {
    background: transparent;
    color: var(--app-reverse-text-color);
  }
  .ts-button__set .ts-button {
    margin-right: 16px;
    margin-top: 16px;
  }
  .ts-button__set .ts-button:first-child {
    margin-top: 24px;
  }
  .ts-button__set .ts-button:last-child {
    margin-right: 0;
  }
  span.ts-button,
  span.ts-button--flat,
  span.ts-button--flat.ts-button--reversed {
    cursor: inherit;
  }
  span.ts-button,
  span.ts-button--flat,
  span.ts-button--flat.ts-button--reversed,
  span.ts-button--flat.ts-button--reversed:focus,
  span.ts-button--flat.ts-button--reversed:hover,
  span.ts-button--flat:focus,
  span.ts-button--flat:hover,
  span.ts-button:focus,
  span.ts-button:hover {
    background-color: transparent;
    color: inherit;
    outline: none;
  }

  .ts-content-button {
    margin-bottom: 34px;
  }
`;
