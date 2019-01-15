/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const REQUEST_CATEGORY_LIST = 'REQUEST_CATEGORY_LIST';
export const RECEIVE_CATEGORY_LIST = 'RECEIVE_CATEGORY_LIST';
export const FAIL_CATEGORY_LIST = 'FAIL_CATEGORY_LIST';

export const fetchCategoryList = (query) => (dispatch, getState) => {
  // Check to see if the cached results are from the same query.
  // This is useful for avoiding a network request.
  if (shouldFetchCategoryList(getState(), query)) {
    dispatch(requestCategoryList(query));
    if (query) {
      fetch(`https://api.themesurgeons.com/wp-json/wp/v2/posts/?categories=${query}`, {

        })
        .then(res => res.json())
        .then(data => dispatch(receiveCategoryList(query, data)))
        .catch(() => dispatch(failCategoryList(query)));
    } else {
      // query is empty, clear the results
      dispatch(receiveCategoryList(query, []));
    }
  }
};

const shouldFetchCategoryList = (state, query) => {
  return state.categories.failure || state.categories.query !== query && !state.categories.isFetching;
}

const requestCategoryList = (query) => {
  return {
    type: REQUEST_CATEGORY_LIST,
    query
  };
};

const receiveCategoryList = (query, data) => {
  return {
    type: RECEIVE_CATEGORY_LIST,
    query,
    data
  };
};

const failCategoryList = (query) => {
  return {
    type: FAIL_CATEGORY_LIST,
    query
  };
};