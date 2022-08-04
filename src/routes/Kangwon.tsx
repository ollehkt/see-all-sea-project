import React, { useEffect, useState } from 'react'
import ReactKakaoMap from '../components/map/ReactKakaoMap'
import axios from 'axios'

import useConvertLatLng from './../hooks/UseConvertLatLng'
import Weather from '../components/Weather'
import { useStoreSelector } from '../store/store'
import WeatherPrac from './../components/weatherpractice/WeatherPrac'
import { useParams } from 'react-router-dom'
import Search from '../components/common/Search'

// const API ='http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
// ?serviceKey=인증키&numOfRows=10&pageNo=1
// &base_date=20210628&base_time=0600&nx=55&ny=127
// '
const Kangwon = () => {
  const { area } = useParams()
  const [inputValue, setInputValue] = useState('') //  검색을 바탕으로 요청 보내기
  const { item } = useStoreSelector((state) => state.sea)
  console.log(item)
  return (
    <div className="">
      <div className="flex justify-between">
        <div>About {area}</div>
        <Search setInputValue={setInputValue} />
        {/* <WeatherPrac name="" /> */}
      </div>
      <span>날씨</span>
      <div>
        <ReactKakaoMap />
      </div>
    </div>
  )
}

export default Kangwon
