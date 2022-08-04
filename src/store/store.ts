import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { seaReducer } from './sea/seaSlices'
import { weatherReducer } from './weather/weatherSlice'

export const store = configureStore({
  reducer: {
    sea: seaReducer,
    weather: weatherReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
