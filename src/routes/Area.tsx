import React, { useEffect, useState, useRef } from 'react'
import ReactKakaoMap from '../components/map/ReactKakaoMap'
import axios from 'axios'

import useConvertLatLng from '../hooks/UseConvertLatLng'
import Weather from '../components/Weather'
import { useStoreSelector } from '../store/store'
import WeatherPrac from '../components/weatherpractice/WeatherPrac'
import { useParams } from 'react-router-dom'
import Search from '../components/common/Search'
import { useDispatch } from 'react-redux'

// const API ='http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
// ?serviceKey=인증키&numOfRows=10&pageNo=1
// &base_date=20210628&base_time=0600&nx=55&ny=127
// '
const Area = () => {
  const [datas, setDatas] = useState<any>([])
  const { area } = useParams()
  const [noResult, setNoResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dataRef = useRef<any>([])
  // inputValue 바탕으로 state 날씨와 맵에 useLocation으로 넘겨주기

  //  검색을 바탕으로 요청 보내기
  const [inputValue, setInputValue] = useState('')
  const getSeaInfo = async () => {
    setIsLoading(true)
    try {
      const res = await axios(
        `/api/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=100&resultType=JSON&SIDO_NM=${area}&ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D`
      )
      const { item, totalCount } = res.data.getOceansBeachInfo
      if (totalCount === 0) {
        setNoResult((prev) => (prev = '찾으시는 결과가 없습니다'))
        return
      }

      item.forEach((item: any) => {
        dataRef.current = [
          ...dataRef.current,
          { title: item.sta_nm, latlng: { lat: item.lat, lon: item.lon } },
        ]
      })
      setDatas((prev: any) => (prev = dataRef.current))
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  const getSeaSpecificInfo = async () => {
    setIsLoading(true)
    try {
      const res = await axios(
        `/api/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=100&resultType=JSON&SIDO_NM=${inputValue}&ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D`
      )
      const { item, totalCount } = res.data.getOceansBeachInfo
      if (totalCount === 0) {
        setNoResult((prev) => (prev = '찾으시는 결과가 없습니다'))
        return
      }
      item.forEach((item: any) => {
        dataRef.current = [
          ...dataRef.current,
          { title: item.sta_nm, latlng: { lat: item.lat, lon: item.lon } },
        ]
      })
      setDatas((prev: any) => (prev = dataRef.current))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setDatas((prev: []) => (prev = []))
    setNoResult((prev) => (prev = ''))
    dataRef.current = []
    getSeaInfo()
  }, [area])
  useEffect(() => {
    setDatas((prev: []) => (prev = []))
    setNoResult((prev) => (prev = ''))
    dataRef.current = []
    // getSeaSpecificInfo()
  }, [inputValue])

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="text-2xl font-bold"> {area} 내의 도시 이름으로 검색해!</div>
        <Search setInputValue={setInputValue} noResult={noResult} isLoading={isLoading} />
        <WeatherPrac name={area}  />
      </div>

      <div>
        <ReactKakaoMap datas={datas} place={inputValue} />
      </div>
    </div>
  )
}

export default Area
