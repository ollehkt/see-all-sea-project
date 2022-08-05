import React, { useEffect, useState } from 'react'
import Button from '../components/common/Button'
import axios from 'axios'
import Naver from '../components/map/Naver'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Router from './Router'
import WeatherPrac from '../components/weatherpractice/WeatherPrac'
import { useStoreSelector } from '../store/store'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ReactKakaoMap from '../components/map/ReactKakaoMap'
import { Carousel } from 'flowbite-react'
const area = ['강원', '경기', '충북', '충남', '경남', '경북', '전남', '전북', '제주']
const Home = () => {
  const { weather } = useStoreSelector((state) => state.weather)
  console.log(weather)
  return (
    <>
      <div className=" h-[450px] container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <h1 className="font-bold text-6xl sm:text-6xl text-white leading-3 line">
            눈으로 보는 모든 바다
            <br />
            안전해
          </h1>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default Home
