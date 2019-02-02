import { until } from "lit-html/directives/until";

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = (query) => (dispatch, getState) => {
  // Check to see if the cached results are from the same query.
  // This is useful for avoiding a network request.
  if (shouldFetchArticles(getState(), query)) {
    dispatch(requestArticles(query));
    if (query) {
      fetch(`https://api.themesurgeons.com/wp-json/wp/v2/${query}/?per_page=10`, {})
        .then(res => res.json())
        .then(data => dispatch(receiveArticles(query, data)))
        .catch(() => dispatch(failArticles(query)));
    } else {
      // query is empty, clear the results
      dispatch(receiveArticles(query, []));
    }
  }
};

const shouldFetchArticles = (state, query) => {
  return state.articles.failure || state.articles.query !== query && !state.articles.isFetching;
}

const requestArticles = (query) => {
  return {
    type: REQUEST_ARTICLES,
    query
  };
};

const receiveArticles = (query, data) => {
  return {
    type: RECEIVE_ARTICLES,
    query,
    data
  };
};

const failArticles = (query) => {
  return {
    type: FAIL_ARTICLES,
    query
  };
};

// Filters
