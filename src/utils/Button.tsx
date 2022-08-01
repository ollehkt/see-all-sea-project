import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  name: string
  value: string
}

const Button = ({ name, value }: PropsType) => {
  const navigate = useNavigate()
  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget

    navigate(`/${value}`)
  }
  return (
    <button
      onClick={buttonClickHandler}
      value={value}
      className="w-[122px] h-[30px] bg-transparent m-2 rounded-md hover:bg-cyan-100 cursor-pointer transition-colors duration-300 shadow-md"
    >
      {name}
    </button>
  )
}

export default Button
