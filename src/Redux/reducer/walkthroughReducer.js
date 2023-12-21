import { createSlice } from "@reduxjs/toolkit"

import { WalkthroughData } from '../action/walkthroughActions';

const walkthroughSlice = createSlice({
  name: "walkthrough",
  initialState: {
    walkthroughData: [],
  },

  reducers: {

  },

  extraReducers: builder => {

    builder.addCase(WalkthroughData.pending, state => {
      state.loading = true
    })
    builder.addCase(WalkthroughData.fulfilled, (state, action) => {
      state.loginData = action.payload
      state.loading = false
    })
    builder.addCase(WalkthroughData.rejected, state => {
      state.loading = false
    })

  }
})

export default walkthroughSlice.reducer
