import React from 'react'
import { useStoreSelector } from '../../store/store'
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi'

interface propsType {
  deg: number
}
export function WindDirection({ deg = 0 }: propsType): string {
  switch (true) {
    case (337.5 <= deg && deg <= 360) || (0 <= deg && deg < 22.5):
      return '북풍'
    case 22.5 <= deg && deg < 67.5:
      return '북동풍'
    case 67.5 <= deg && deg < 112.5:
      return '동풍'
    case 112.5 <= deg && deg < 157.5:
      return '남동풍'
    case 157.5 <= deg && deg < 202.5:
      return '남풍'
    case 202.5 <= deg && deg < 247.5:
      return '남서풍'
    case 247.5 <= deg && deg < 292.5:
      return '북풍'
    case 292.5 <= deg && deg < 337.5:
      return '북서풍'
    default:
      return ''
  }
}

function ExtraInfo() {
  let sunriseToDate
  let sunsetToDate
  const { humidity, sunrise, sunset, speed, deg } = useStoreSelector(
    (state) => state.weather.weather.payload
  )
  if (sunrise) {
    sunriseToDate = new Date(sunrise * 1000).toLocaleString('ko-KR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    })
  }
  if (sunset) {
    sunsetToDate = new Date(sunset * 1000).toLocaleString('ko-KR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    })
  }
  return (
    <div className="flex justify-between items-center text-[60px] w-[100%] ">
      <div className="flex justify-center items-center w-[200px] font-semibold">
        <WiSunrise className="text-[50px] color-[#ff7500]" />
        <p className="text-[15px] text-center">
          {sunriseToDate}
          <br />
          일몰
        </p>
      </div>
      <div className="flex justify-center items-center w-[200px] font-semibold">
        <WiSunset className="text-[50px] color-[#ff7500] " />
        <p className="text-[15px] text-center ">
          {sunsetToDate}
          <br />
          일몰
        </p>
      </div>
      <div className="flex justify-center items-center w-[200px] font-semibold">
        <WiHumidity className="text-[50px] color-[#ff7500] " />
        <p className="text-[15px] text-center ">
          {`${humidity}% `}
          <br />
          습도
        </p>
      </div>
      <div className="flex justify-center items-center w-[250px] font-semibold">
        <WiStrongWind className="text-[50px] color-[#ff7500] " />
        <p className="text-[15px] text-center whitespace-nowrap ">
          {`${speed}m/s `}
          <br />(<WindDirection deg={deg} />)
        </p>
      </div>
    </div>
  )
}

export default ExtraInfo
