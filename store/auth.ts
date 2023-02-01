import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  user: object | boolean
}

const initialState: User = {
  user: false
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    },
    register: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    }
  }
})

export const { login, register } = auth.actions
export default auth.reducer
