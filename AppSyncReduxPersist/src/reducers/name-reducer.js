// @flow
import { REHYDRATE } from 'redux-persist';
import { SET_NAME } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case REHYDRATE:
      return (action.payload && action.payload.name) || state;
    case SET_NAME:
      return action.payload;
    default:
      return state;
  }
};

