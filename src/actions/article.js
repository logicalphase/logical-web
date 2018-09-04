/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const FAIL_ARTICLE = 'FAIL_ARTICLE';

export const fetchArticle = (slug) => (dispatch, getState) => {
  dispatch(requestArticle(slug));
  const state = getState();
  const article = state.articles && state.articles.data && state.articles.data[slug];
  if (article) {
    // article found in state.articles.items or state.favorites.items
    dispatch(receiveArticle(slug));
    // let the calling code know there's nothing to wait for.
    return Promise.resolve();
  } else {
    // fetch article data given the article id.
    // also return a promise to wait for.
    return fetch(`http://localhost:8080/api/content?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(failArticle(slug));
        } else {
          dispatch(receiveArticle(slug, data.data[0]));
        }
      })
      .catch((e) => dispatch(failArticle(slug)));
  }
};

const requestArticle = (slug) => {
  return {
    type: REQUEST_ARTICLE,
    slug
  };
};

const receiveArticle = (slug, data) => {
  return {
    type: RECEIVE_ARTICLE,
    slug,
    data
  };
};

const failArticle = (slug) => {
  return {
    type: FAIL_ARTICLE,
    slug
  };
};