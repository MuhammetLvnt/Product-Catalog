import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  exists: boolean
  token?: string
}
export interface UserState {
  user: User
}

const initialState: UserState = {
  user: { exists: false }
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { login, register } = auth.actions
export default auth.reducer
