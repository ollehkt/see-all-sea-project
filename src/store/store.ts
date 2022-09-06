import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import { weatherReducer } from './weather/weatherSlice'
import { seaApi } from './sea/seaSlices'
import { userReducer } from './userInfo/userSlice'

export const store = configureStore({
  reducer: {
    [seaApi.reducerPath]: seaApi.reducer,
    // [waterInfoApi.reducerPath]: waterInfoApi.Reducer,
    weatherInfo: weatherReducer,
    userInfo: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      seaApi.middleware,
      // weatherApi.middlerware,
      // waterInfoApi.middlerware,
    ]),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
