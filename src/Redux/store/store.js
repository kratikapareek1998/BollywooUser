import { configureStore } from '@reduxjs/toolkit'

import walkthroughReducer from '../reducer/walkthroughReducer';
import interestSelectionReducer from '../reducer/interestSelectionReducer';


export const store = configureStore({
  reducer: {
    walkthrough : walkthroughReducer,
    interest : interestSelectionReducer,
  }
});

