import {configureStore} from '@reduxjs/toolkit';
import bayDinReducer from './features/BayDin/bayDinSlice';

export const store = configureStore({
  reducer: {
    bayDin: bayDinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
