import React, { useEffect, useState } from 'react'
import Kakao from '../components/map/Kakao'
import axios from 'axios'
// const API ='http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
// ?serviceKey=인증키&numOfRows=10&pageNo=1
// &base_date=20210628&base_time=0600&nx=55&ny=127
// '
const Kangwon = () => {
  const getWeather = async () => {
    const res = await axios(
      ' http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D&pageNo=1&numOfRows=20&dataType=JSON&base_date=20220802&base_time=0900&nx=55&ny=127'
    )
    console.log(res)
  }
  useEffect(() => {
    getWeather()
  }, [])
  return (
    <div className="h-[800px]">
      <Kakao name="강원도" />
    </div>
  )
}

export default Kangwon
