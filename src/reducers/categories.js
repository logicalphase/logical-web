import { createSelector } from 'reselect';
import {
  REQUEST_CATEGORY_LIST, RECEIVE_CATEGORY_LIST, FAIL_CATEGORY_LIST,
} from '../actions/categories.js';

export const categories = (state = { query: null }, action) => {
  switch (action.type) {
    case REQUEST_CATEGORY_LIST:
      return {
        ...state,
        query: action.query,
        data: null, // reset data
        failure: false,
        isFetching: true
      };
    case RECEIVE_CATEGORY_LIST:
      return {
        ...state,
        data: action.data.reduce((obj, data) => {
          obj[data.slug] = data;
          return obj;
        }, {}),
        failure: false,
        isFetching: false
      };
    case FAIL_CATEGORY_LIST:
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

export const itemsSelector = state => state.categories && state.categories.data;

export const itemListSelector = createSelector(
  itemsSelector,
  (data) => {
    return data ? Object.keys(data).map(key => data[key]) : [];
  }
);