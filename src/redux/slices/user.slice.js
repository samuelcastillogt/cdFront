import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER_DATA: (state, action) => {
      state.data = action.payload
    },
    DELETE_USER_DATA: (state) => {
        state.data = {}
      }
  },
})

// Action creators are generated for each case reducer function
export const { SET_USER_DATA, DELETE_USER_DATA } = user.actions

export default user.reducer