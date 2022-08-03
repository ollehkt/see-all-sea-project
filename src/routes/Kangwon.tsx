import React, { useEffect, useState } from 'react'
import Kakao from '../components/map/Kakao'
import axios from 'axios'
import { useSeaSelector } from '../store/store'
import useConvertLatLng from './../hooks/UseConvertLatLng'
import Weather from '../components/map/Weather'

// const API ='http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
// ?serviceKey=인증키&numOfRows=10&pageNo=1
// &base_date=20210628&base_time=0600&nx=55&ny=127
// '
const Kangwon = () => {
  return (
    <>
      <span>날씨</span>
      <div className="h-[800px]">
        <Kakao name="강원도" />
      </div>
      <Weather />
    </>
  )
}

export default Kangwon
