import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppDispatch } from './../../store/store'
import { weatherActions } from '../../store/weather/weatherSlice'
import CurrentWeather from './CurrentWeather'
import TempInfo from './TempInfo'
import ExtraInfo from './ExtraInfo'
import { useLocation } from 'react-router'
interface PropsType {
  name: string
  state: string | undefined
}

const WeatherPrac = ({ name, state }: PropsType) => {
  const [area, setArea] = useState('')

  const [weatherInfo, setWeatherInfo] = useState({})
  const dispatch = useAppDispatch()
  const location = useLocation()

  const getWeatherInfo = async () => {
    try {
      const getWeahterAPI = `https://api.openweathermap.org/data/2.5/weather?appid=fd8c41971b0a86e981271f12825b6508&q=${area}&units=metric`
      const res = await axios(`${getWeahterAPI}`)
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weahterState }],
        wind: { speed, deg },
      } = res.data

      dispatch(
        weatherActions.getWeather({
          payload: {
            name,
            lat,
            lon,
            temp,
            humidity,
            feels_like,
            temp_min,
            temp_max,
            weahterState,
            speed,
            deg,
            sunrise,
            sunset,
          },
        })
      )
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getWeatherInfo()
    if (location.state === '강원') {
      setArea((prev) => (prev = 'kangwon'))
    } else if (location.state === '경기') {
      setArea((prev) => (prev = 'kyunggi'))
    } else if (location.state === '충북') {
      setArea((prev) => (prev = 'chungbuk'))
    } else if (location.state === '충남') {
      setArea((prev) => (prev = 'chungnam'))
    } else if (location.state === '경남') {
      setArea((prev) => (prev = 'kyungnam'))
    } else if (location.state === '경북') {
      setArea((prev) => (prev = 'kyungbuk'))
    } else if (location.state === '전남') {
      setArea((prev) => (prev = 'jeonnam'))
    } else if (location.state === '전북') {
      setArea((prev) => (prev = 'jeonbuk'))
    } else if (location.state === '제주') {
      setArea((prev) => (prev = 'jeju'))
    }
    console.log(location)
  }, [])

  return (
    <div className="flex w-[400px] h-[200px] flex-wrap rounded-md border-2 border-solid border-[#ced1d4] ">
      <CurrentWeather />
      <TempInfo />
      <ExtraInfo />
    </div>
  )
}

export default WeatherPrac
