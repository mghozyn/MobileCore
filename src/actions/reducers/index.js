'use strict';

const initialState = {
  fetching: false,
  csrf: null,
  error: false,
  loading: false,
  status: false,
  detail: null,
  data: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'THEME_MODE': {
      return {
        ...state,
        theme: action.payload,
      };
    }

    case 'FETCH': {
      return {
        ...state,
        fetching: true,
        loading: true,
        status: false,
      };
    }

    default:
      return state;
  }
};

export default reducers;
