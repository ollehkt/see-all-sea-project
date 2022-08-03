import React, { useEffect, useState } from 'react'
import Button from '../utils/Button'
import axios from 'axios'
import Naver from '../components/map/Naver'
import Kakao from '../components/map/Kakao'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Router from './Router'

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 h-[700px]">
        <Button name="강원" value="kangwon" />
        <Button name="경기" value="Kyunggi" />
        <Button name="충북" value="chungcheongnam" />
        <Button name="충남" value="chungcheongnam" />
        <Button name="경남" value="Kyungsangnam" />
        <Button name="경북" value="Kyungsangbuk" />
        <Button name="전남" value="Jeollanam" />
        <Button name="전북" value="Jeollabuk" />
      </div>
      <span>click</span>

      {/* <div className="w-[500px] h-[500px] mx-auto border-2 border-black border-solid rounded-full z-9999"></div> */}
    </>
  )
}

export default Home
