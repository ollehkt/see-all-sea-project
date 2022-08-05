import React, { useRef, useState } from 'react'
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
  const dataRef = useRef<any>([])
  const [data, setData] = useState<any>([])
  // const [lngData, setLng] = useState<any>([])
  const navigate = useNavigate()

  const buttonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget
    navigate(`/${value}`)
  
    setData(dataRef.current)
    // const latLngData = res.data.getOceansBeachInfo.item.map((item) => {
    //   setLat(latData.push(item.lat))
    //   setLng(lngData.push(item.lon))
    // })
    dispatch(seaActions.selectArea({ item: data }))
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
