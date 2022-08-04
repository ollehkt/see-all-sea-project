import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch } from '../../store/store'
import { seaActions } from '../../store/sea/seaSlices'

interface PropsType {
  name: string
  value?: string
  color?: string
  fill?: boolean
  onClick?: Function
}

const Button = ({ name, value, color, fill }: PropsType) => {
  const dispatch = useAppDispatch()
  const [data, setData] = useState<any>([])
  // const [lngData, setLng] = useState<any>([])
  const navigate = useNavigate()

  const buttonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    navigate(`/${value}`)
    const res = await axios(
      `https://apis.data.go.kr/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=10&resultType=JSON&SIDO_NM=${name}&ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D`
    )
    setData(res.data.getOceansBeachInfo.item)
    // const latLngData = res.data.getOceansBeachInfo.item.map((item) => {
    //   setLat(latData.push(item.lat))
    //   setLng(lngData.push(item.lon))
    // })
    dispatch(seaActions.selectArea({ item: res.data.getOceansBeachInfo.item }))
  }

  return (
    <button
      onClick={buttonClickHandler}
      value={value}
      className="w-[122px] h-[48px] bg-transparent m-2 border-sky-400 rounded-md hover:bg-cyan-100 cursor-pointer transition-colors duration-300 shadow-md"
    >
      <span className="text-2xl">{name}</span>
    </button>
  )
}

export default Button
