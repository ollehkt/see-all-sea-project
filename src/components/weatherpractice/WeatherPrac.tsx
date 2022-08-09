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
}

const WeatherPrac = ({ name }: PropsType) => {
  const [area, setArea] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState({})
  const dispatch = useAppDispatch()

  const changeAreaToEnglish = (name: string) => {
    console.log(name)
    if (name === '강원') {
      setArea('kangwondo')
    }
    if (name === '경기') {
      setArea('kyunggi')
    }
    if (name === '충북') {
      setArea('chungbuk')
    }
    if (name === '충남') {
      setArea('chungnam')
    }
    if (name === '경남') {
      setArea('kyungnam')
    }
    if (name === '경북') {
      setArea('kyungbuk')
    }
    if (name === '전남') {
      setArea('jeonnam')
    }
    if (name === '전북') {
      setArea('jeonbuk')
    }
    if (name === '제주') {
      setArea('jeju')
    }
  }
  const getWeatherInfo = async () => {
    setIsLoading(true)
    try {
      const getWeahterAPI = `https://api.openweathermap.org/data/2.5/weather?appid=3fd43df2329bf79cca8ca1f704eee2aa&q=${area}&units=metric`
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
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    changeAreaToEnglish(name)
  }, [name])
  useEffect(() => {
    console.log(area)
    getWeatherInfo()
  }, [area])

  return (
    <div className="flex w-[400px] h-[200px] flex-wrap rounded-md border-2 border-solid border-[#ced1d4] ">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CurrentWeather />
          <TempInfo />
          <ExtraInfo />
        </>
      )}
    </div>
  )
}

export default WeatherPrac
