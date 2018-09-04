/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { createSelector } from 'reselect';
import {
  REQUEST_ARTICLES, RECEIVE_ARTICLES, FAIL_ARTICLES,
} from '../actions/articles.js';

export const articles = (state = { query: null }, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        query: action.query,
        data: null, // reset data
        failure: false,
        isFetching: true
      };
    case RECEIVE_ARTICLES:
      return {
        ...state,
        data: action.data.reduce((obj, data) => {
          obj[data.slug] = data;
          return obj;
        }, {}),
        failure: false,
        isFetching: false
      };
    case FAIL_ARTICLES:
      return {
        ...state,
        data: null,
        failure: true,
        isFetching: false
      };
    default:
      return state;
  }
}

export const itemsSelector = state => state.articles && state.articles.data;

export const itemListSelector = createSelector(
  itemsSelector,
  (data) => {
    return data ? Object.keys(data).map(key => data[key]) : [{}, {}];
  }
);