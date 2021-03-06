import {
  SEARCH_RESULTS,
  FETCH_SHOW,
  RESET_SHOW,
  RESET_SEARCH_RESULTS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
  case SEARCH_RESULTS:
    return { ...state, searchResults: action.payload.data };
  case FETCH_SHOW:
    return { ...state, show: action.payload.data.content };
  case RESET_SHOW:
    return { ...state, show: null };
  case RESET_SEARCH_RESULTS:
    return { ...state, searchResults: null };
  }
  return state;
}
