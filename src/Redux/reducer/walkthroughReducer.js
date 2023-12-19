import { createSlice } from "@reduxjs/toolkit"

import { walkthroughData } from '../action/walkthroughActions';

const walkthroughSlice = createSlice({
  name: "walkthrough",
  initialState: {
    walkthrough: [],
  },

  reducers: {

  },

  extraReducers: builder => {

    builder.addCase(walkthroughData.pending, state => {
      state.loading = true
    })
    builder.addCase(walkthroughData.fulfilled, (state, action) => {
      state.walkthrough = action.payload
      state.loading = false
    })
    builder.addCase(walkthroughData.rejected, state => {
      state.loading = false
    })

  }
})

export default walkthroughSlice.reducer
