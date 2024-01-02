import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const BLOG = createSlice({
  name: 'BLOG',
  initialState,
  reducers: {
    SET_BLOG_DATA: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { SET_BLOG_DATA } = BLOG.actions

export default BLOG.reducer