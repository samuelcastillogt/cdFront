import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const enviroment = createSlice({
  name: 'enviroment',
  initialState,
  reducers: {
    enviromentReg: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { enviromentReg } = enviroment.actions

export default enviroment.reducer