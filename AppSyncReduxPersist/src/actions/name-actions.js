// @flow
import { SET_NAME } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setName = string => ({ type: SET_NAME, payload: string });
