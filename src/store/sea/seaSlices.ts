import { createSlice } from '@reduxjs/toolkit'

const API =
  'http://apis.data.go.kr/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=10&resultType=xml&SIDO_NM=제주&ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D'

interface InitialState {
  info: []
}

const initialState: InitialState = {
  info: [],
}

const seaSlice = createSlice({
  name: 'sea',
  initialState,
  reducers: {
    selectArea() {
      
    }
  },
})

export const seaReducer = seaSlice.reducer
