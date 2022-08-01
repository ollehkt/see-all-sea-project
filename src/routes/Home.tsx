import React from 'react'
import Button from '../utils/Button'

const Home = () => {
  return (
    <>
      <div className="w-[] h-[] border-6 border-rose-600">
        Home Component
        <Button name="경기도" value="Kyunggi" />
        <Button name="강원도" value="kangwon" />
        <Button name="충청남도" value="chungcheongnam" />
        <Button name="충청북도" value="chungcheongnam" />
        <Button name="경상남도" value="Kyungsangnam" />
        <Button name="경상북도" value="Kyungsangbuk" />
        <Button name="전라남도" value="Jeollanam" />
        <Button name="전라북도" value="Jeollabuk" />
      </div>
      <div className="w-[500px] h-[500px] mx-auto border-2 border-black border-solid rounded-full z-9999"></div>
    </>
  )
}

export default Home
