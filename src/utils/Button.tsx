import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  name: string
  value?: string
  color?: string
  fill?: boolean
}

const Button = ({ name, value, color, fill }: PropsType) => {
  const navigate = useNavigate()
  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget

    navigate(`/${value}`)
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
