import {configureStore} from '@reduxjs/toolkit';
import * as services from '../services/services';
import {UserReducer} from './rootReducer';

const extraArgument = {
  user: UserReducer,
};

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {services},
      },
    }),
  devTools: true,
});

export {extraArgument};
