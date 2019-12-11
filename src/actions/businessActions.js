import service from '../services/BusinessService';

export const BUSINESSES_REQUEST = 'BUSINESSES_REQUEST';
export const BUSINESSES_REQUEST_SUCCESS = 'BUSINESSES_REQUEST_SUCCESS';
export const BUSINESSES_REQUEST_FAIL = 'BUSINESSES_REQUEST_FAIL';
export const BUSINESS_DETAILS_REQUEST = 'BUSINESS_DETAILS_REQUEST';
export const BUSINESS_DETAILS_REQUEST_SUCCESS =
  'BUSINESS_DETAILS_REQUEST_SUCCESS';
export const BUSINESS_DETAILS_REQUEST_FAIL = 'BUSINESS_DETAILS_REQUEST_FAIL';

export const fetchBusinesses = params => async dispatch => {
  dispatch({
    type: BUSINESSES_REQUEST
  });

  const data = await service.getBusinesses(params);

  if (data.isAxiosError) {
    dispatch({
      type: BUSINESSES_REQUEST_FAIL,
      payload: data.message
    });
  } else {
    dispatch({
      type: BUSINESSES_REQUEST_SUCCESS,
      payload: data.businesses
    });
  }
};

export const fetchBusinessDetails = id => async dispatch => {
  dispatch({
    type: BUSINESS_DETAILS_REQUEST
  });

  const data = await service.getBusinessDetails(id);

  if (data.isAxiosError) {
    dispatch({
      type: BUSINESS_DETAILS_REQUEST_FAIL,
      payload: data.message
    });
  } else {
    dispatch({
      type: BUSINESS_DETAILS_REQUEST_SUCCESS,
      payload: data
    });
  }
};
