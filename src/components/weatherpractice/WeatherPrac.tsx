import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppDispatch } from './../../store/store'
import { weatherActions } from '../../store/weather/weatherSlice'
import CurrentWeather from './CurrentWeather'
import TempInfo from './TempInfo'
import ExtraInfo from './ExtraInfo'
interface PropsType {
  name: string
}

const WeatherPrac = ({ name }: PropsType) => {
  const [weatherInfo, setWeatherInfo] = useState({})
  const dispatch = useAppDispatch()

  const getWeatherInfo = async () => {
    try {
      const getWeahterAPI =
        'https://api.openweathermap.org/data/2.5/weather?appid=fd8c41971b0a86e981271f12825b6508&q=busan&units=metric'
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
