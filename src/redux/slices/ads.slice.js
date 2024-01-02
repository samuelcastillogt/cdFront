import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const ads = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    SET_ADS_DATA: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { SET_ADS_DATA } = ads.actions

export default ads.reducer