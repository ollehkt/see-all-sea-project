import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
const API =
  'http://apis.data.go.kr/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=10&resultType=xml&'

const API_KEY =
  'ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D'

const getSeaInfo = createAsyncThunk('seaSlice/getseaInfo', async () => {
  const res = await axios(`${API}SIDO_NM=경기&${API_KEY}`)
  console.log(res)
  return res
})

interface InitialState {
  info?: []
  status?: string
  item?: []
}

const seaInitialState: InitialState = {
  info: [],
  status: '',
  item: [],
}

const seaSlice = createSlice({
  name: 'sea',
  initialState: seaInitialState,
  reducers: {
    selectArea(state, action) {
      state.item = action.payload.item
    },
  },
  // extraReducers: (builder) => {
  //   builder.addcase(getSeaInfo.pending,(state,action) => {
  //     state.
  //   })
  // },
})

export const seaReducer = seaSlice.reducer
export const seaActions = seaSlice.actions
