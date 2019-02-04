/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { css } from 'lit-element';

export const TsSelectStyle = css`
  ts-select {
    display: inline-block;
    margin: 10px 0px 20px 0px;
    position: relative;
    /* create a layer to avoid invalidation from other controls*/
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ts-select > ts-md-decorator {
    display: block;
    border-top: 1px solid var(--border-grey);
    height: 1px;
    speak: none;
  }
  ts-select > ts-md-decorator::after {
    content: '\\25BC';
    display: block;
    position: absolute;
    bottom: calc(50% - 0.75em);
    right: 8px;
    speak: none;
    -webkit-transform: scaleY(.6);
    transform: scaleY(.6);
    color: var(--app-secondary-color);
    pointer-events: none;
  }
  ts-select > select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 20px 24px 20px 0;
    border: none;
    background-color: transparent;
    border-radius: 0;
    font-size: 1em;
    font-weight: 300;
    color: var(--app-secondary-color);
    overflow: hidden;
    margin: 0;
    outline: none;
  }
  ts-select > select::-ms-expand {
    display: none;
  }
  ts-select > ts-md-decorator > ts-underline {
    display: block;
    background-color: var(--app-accent-color);
    height: 2px;
    position: relative;
    top: -1px;
    width: 100%;
    margin: auto;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  ts-select > select:focus + ts-md-decorator > ts-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-select > select:focus + ts-md-decorator::before,
  ts-select > select:focus + ts-md-decorator::after,
  ts-select > select:focus {
    color: black;
  }
  /* hide the focus ring in firefox */
  ts-select > select:focus:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 var(--app-secondary-color);
  }
  ts-select > [prefix] {
    position: absolute;
    left: 0px;
    top: calc(50% - 8px);
    line-height: 16px;
    color: var(--app-secondary-color);
    pointer-events: none;
  }
`;