import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { seaReducer } from './sea/seaSlices'
import { weatherReducer } from './weather/weatherSlice'
import { waterInfoReducer } from './waterInfo/WaterInfoSlices'
import { userReducer } from './userInfo/userSlice'

export const store = configureStore({
  reducer: {
    sea: seaReducer,
    weather: weatherReducer,
    waterInfo: waterInfoReducer,
    userInfo: userReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
