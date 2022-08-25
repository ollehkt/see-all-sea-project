import React from 'react'
import { useStoreSelector } from 'store/store'

function TempInfo() {
  const { feels_like, temp_max, temp_min } = useStoreSelector(
    (state) => state.weather.weather.payload
  )
  return (
    <div className="w-[100%] flex items-center text-[20px] font-bold justify-evenly">
      <div>체감 {feels_like}&deg;</div>
      <div>최저 {temp_min}&deg;</div>
      <div>최고 {temp_max}&deg;</div>
    </div>
  )
}

export default TempInfo
