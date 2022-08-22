import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  user: {
    payload: string
  }
}

const userInitialState: InitialState = {
  user: {
    payload: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload
    },
  },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
