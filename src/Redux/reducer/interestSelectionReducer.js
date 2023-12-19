import { createSlice } from "@reduxjs/toolkit"

import { getInterestSelection, postInterestSelection } from '../action/interestSelectionActions';

const interestSlice = createSlice({
  name: "interest",
  initialState: {
    getInterest: [],
    postInterest: [],
  },

  reducers: {

  },

  extraReducers: builder => {

    builder.addCase(getInterestSelection.pending, state => {
      state.loading = true
    })
    builder.addCase(getInterestSelection.fulfilled, (state, action) => {
      state.getInterest = action.payload
      state.loading = false
    })
    builder.addCase(getInterestSelection.rejected, state => {
      state.loading = false
    })

    builder.addCase(postInterestSelection.pending, state => {
        state.loading = true
      })
      builder.addCase(postInterestSelection.fulfilled, (state, action) => {
        state.postInterest = action.payload
        state.loading = false
      })
      builder.addCase(postInterestSelection.rejected, state => {
        state.loading = false
      })

  }
})

export default interestSlice.reducer
