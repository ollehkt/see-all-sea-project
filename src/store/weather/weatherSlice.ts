import { createSlice } from '@reduxjs/toolkit'
interface InitailState {
  weather: {
    payload: {
      name?: string
      temp?: string
      lat?: string
      lon?: string
      humidity?: string
      feels_like?: string
      temp_min?: string
      temp_max?: string
      weahterState?: string
      speed?: string
      deg?: string
      sunrise?: number
      sunset?: number
    }
  }
}
const weatherInitialState: InitailState = {
  weather: {
    payload: {},
  },
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: weatherInitialState,
  reducers: {
    getWeather(state, action) {
      state.weather = action.payload
    },
  },
})

export const weatherReducer = weatherSlice.reducer
export const weatherActions = weatherSlice.actions
