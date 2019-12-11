import {
  BUSINESSES_REQUEST,
  BUSINESSES_REQUEST_SUCCESS,
  BUSINESSES_REQUEST_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_REQUEST_SUCCESS,
  BUSINESS_DETAILS_REQUEST_FAIL
} from '../actions/businessActions.js';

const initialState = {
  businesses: [],
  businessDetails: {},
  error: '',
  loading: false,
  businessDetailsError: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUSINESS_DETAILS_REQUEST:
    case BUSINESSES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case BUSINESSES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        businesses: payload,
        error: ''
      };
    case BUSINESSES_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        businesses: [],
        error: payload
      };
    case BUSINESS_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        businessDetails: payload,
        businessDetailsError: ''
      };
    case BUSINESS_DETAILS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        businessDetails: {},
        businessDetailsError: payload
      };
    default:
      return state;
  }
};
