import { configureStore } from '@reduxjs/toolkit'

import walkthroughReducer from '../reducer/walkthroughReducer';

export const store = configureStore({
  reducer: {
    walkthrough: walkthroughReducer,
  }
});

