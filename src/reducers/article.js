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
import { itemsSelector } from './articles.js';
import {
  REQUEST_ARTICLE, RECEIVE_ARTICLE, FAIL_ARTICLE
} from '../actions/article.js';

export const article = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        slug: action.slug,
        failure: false,
        isFetching: true
      };
    case RECEIVE_ARTICLE:
      return {
        ...state,
        data: action.data,
        failure: false,
        isFetching: false
      };
    case FAIL_ARTICLE:
      return {
        ...state,
        failure: true,
        isFetching: false
      };
    default:
      return state;
  }
}

const idSelector = state => state.article.slug;
const itemSelector = state => state.article.data;

export const articleSelector = createSelector(
  idSelector,
  itemsSelector,
  itemSelector,
  (slug, data, item) => {
    return data && data[slug] || data || item;
  }
);
