import React from 'react'
import { useStoreSelector } from '../../store/store'
import CurrentWeatherIcon from './CurrentWeatherIcon'
import ExtraInfo from './ExtraInfo'
import TempInfo from './TempInfo'

function CurrentWeather() {
  const { name, weahterState, temp } = useStoreSelector((state) => state.weather.weather.payload)

  return (
    <div className="flex items-center justify-center text-3xl m-auto">
      <span className="mx-5">{temp}&deg;</span>
      <span className="flex items-center text-5xl">
        <CurrentWeatherIcon weatherState={weahterState} />
      </span>
    </div>
  )
}

export default CurrentWeather
