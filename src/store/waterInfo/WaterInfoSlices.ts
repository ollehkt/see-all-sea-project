import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  items: []
}

const waterInitialState: InitialState = {
  items: [],
}

const waterInfoSlice = createSlice({
  name: 'waterInfo',
  initialState: waterInitialState,
  reducers: {
    getWaterInfo() {},
  },
})

export const waterInfoReducer = waterInfoSlice.reducer
