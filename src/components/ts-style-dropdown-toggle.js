import { css } from 'lit-element';

export const TsDropdownToggleCss = css`
    
    :host ::slotted(ts-button[dropdown-toggle]),
    :host ::slotted(ts-link-button[dropdown-toggle]),
    :host ::slotted(ts-input-button[dropdown-toggle]) {
        --ts-button-after-display: inline-block;
        --ts-button-after-width: 0;
        --ts-button-after-height: 0;
        --ts-button-after-margin-left: 0.255em;
        --ts-button-after-vertical-align: 0.255em;
        --ts-button-after-content: "";
        --ts-button-after-border-top: 0.3em solid;
        --ts-button-after-border-right: 0.3em solid transparent;
        --ts-button-after-border-bottom: 0;
        --ts-button-after-border-left: 0.3em solid transparent;
        --ts-button-empty-after-margin-left: 0;
    }
    
    :host ::slotted(ts-button[dropdown-toggle][dropup]),
    :host ::slotted(ts-link-button[dropdown-toggle][dropup]),
    :host ::slotted(ts-input-button[dropdown-toggle][dropup]) {
        --ts-button-after-display: inline-block;
        --ts-button-after-width: 0;
        --ts-button-after-height: 0;
        --ts-button-after-margin-left: 0.255em;
        --ts-button-after-vertical-align: 0.255em;
        --ts-button-after-content: "";
        --ts-button-after-border-top: 0;
        --ts-button-after-border-right: 0.3em solid transparent;
        --ts-button-after-border-bottom: 0.3em solid;
        --ts-button-after-border-left: 0.3em solid transparent;
        --ts-button-empty-after-margin-left: 0;
    }
    :host ::slotted(ts-button[dropdown-toggle][dropright]),
    :host ::slotted(ts-link-button[dropdown-toggle][dropright]),
    :host ::slotted(ts-input-button[dropdown-toggle][dropright]) {
        --ts-button-after-display: inline-block;
        --ts-button-after-width: 0;
        --ts-button-after-height: 0;
        --ts-button-after-margin-left: 0.255em;
        --ts-button-after-vertical-align: 0;
        --ts-button-after-content: "";
        --ts-button-after-border-top: 0.3em solid transparent;
        --ts-button-after-border-right: 0;
        --ts-button-after-border-bottom: 0.3em solid transparent;
        --ts-button-after-border-left: 0.3em solid;
        --ts-button-empty-after-margin-left: 0;
    }
    :host ::slotted(ts-button[dropdown-toggle][dropleft])
    :host ::slotted(ts-link-button[dropdown-toggle][dropleft]),
    :host ::slotted(ts-input-button[dropdown-toggle][dropleft]) {
        --ts-button-after-display: none;
        --ts-button-after-width: 0;
        --ts-button-after-height: 0;
        --ts-button-after-margin-left: 0.255em;
        --ts-button-after-vertical-align: 0.255em;
        --ts-button-after-content: "";
        --ts-button-empty-after-margin-left: 0;
        --ts-button-before-display: inline-block;
        --ts-button-before-width: 0;
        --ts-button-before-height: 0;
        --ts-button-before-margin-right: 0.255em;
        --ts-button-before-vertical-align: 0;
        --ts-button-before-content: "";
        --ts-button-before-border-top: 0.3em solid transparent;
        --ts-button-before-border-right: 0.3em solid;
        --ts-button-before-border-bottom: 0.3em solid transparent;
    }
`;