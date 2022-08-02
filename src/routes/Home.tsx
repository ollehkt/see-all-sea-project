import React, { useEffect } from 'react'
import Button from '../utils/Button'
import axios from 'axios'
import converter from 'xml-js'
import Naver from '../components/map/Naver'
import Kakao from '../components/map/Kakao'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Router from './Router'

const Home = () => {
  let beachesInfo: object[] = []
  let arr: any = []
  useEffect(() => {
    onClick()
  }, [])
  const onClick = async () => {
    const res = await axios(
      'http://apis.data.go.kr/1192000/service/OceansBeachInfoService1/getOceansBeachInfo1?pageNo=1&numOfRows=10&resultType=JSON&SIDO_NM=제주&ServiceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D'
    )
    beachesInfo = res.data.getOceansBeachInfo.item
    console.log(beachesInfo)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 h-[700px]">
        <Button name="강원도" value="kangwon" />
        <Button name="경기도" value="Kyunggi" />
        <Button name="충청남도" value="chungcheongnam" />
        <Button name="충청북도" value="chungcheongnam" />
        <Button name="경상남도" value="Kyungsangnam" />
        <Button name="경상북도" value="Kyungsangbuk" />
        <Button name="전라남도" value="Jeollanam" />
        <Button name="전라북도" value="Jeollabuk" />
      </div>
      <span>click</span>
      {beachesInfo?.map((item) => (
        <div>{item?.sido_nm}</div>
      ))}
      {/* <div className="w-[500px] h-[500px] mx-auto border-2 border-black border-solid rounded-full z-9999"></div> */}
    </>
  )
}

export default Home
