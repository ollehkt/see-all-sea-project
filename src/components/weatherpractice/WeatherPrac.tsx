import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppDispatch } from './../../store/store'
import { weatherActions } from '../../store/weather/weatherSlice'
import CurrentWeather from './CurrentWeather'
import TempInfo from './TempInfo'
import ExtraInfo from './ExtraInfo'
import { useLocation } from 'react-router'
interface PropsType {
  latlng: {}
}

const WeatherPrac = ({ latlng }: PropsType) => {
  const [area, setArea] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState({})
  const dispatch = useAppDispatch()

  const getWeatherInfo = async () => {
    setIsLoading(true)
    try {
      const getWeahterAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat}&lon=${latlng.lon}&appid=3fd43df2329bf79cca8ca1f704eee2aa&&units=metric`
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
    getWeatherInfo()
  }, [])

  return (
    <div className="flex w-[400px] h-[200px] box-border flex-wrap rounded-md border-2 border-solid border-cyan-400 text-cyan-400">
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
