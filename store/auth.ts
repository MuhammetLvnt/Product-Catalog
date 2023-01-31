import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  user: object | boolean
  token?: string
  userId?: number
  exp?: number | string | Date
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
    }
  }
})

export const { login } = auth.actions
export default auth.reducer
