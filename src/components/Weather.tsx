import React, { useEffect, useState } from 'react'
import { useStoreSelector } from '../store/store'
import axios from 'axios'

function Weather() {
  const { item } = useStoreSelector((state) => state.sea)
  console.log(item)
  const filteredItem = item?.map((i) => {
    return { lat: i.lat, lon: i.lon }
  })
  const [data, setData] = useState(item)

  const getWeather = async () => {
    let date: any = new Date().toLocaleString()
    date = date.slice(0, 10)
    date = date.replaceAll(' ', '0')
    date = date.replaceAll('.', '')
    let time: any = new Date().toLocaleTimeString()
    time = time.slice(2, 7)
    time = time.replace(' ', '0')
    time = time.replace(':', '')

    const res = await axios(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D&pageNo=1&numOfRows=20&dataType=JSON&base_date=${date}&base_time=${time}&nx=55&ny=127`
    )
    console.log(res.data)
  }
  useEffect(() => {
    getWeather()
  }, [])
  return <>{item && item.map((el) => <div>{item.sido_nm}</div>)}</>
}

export default Weather
