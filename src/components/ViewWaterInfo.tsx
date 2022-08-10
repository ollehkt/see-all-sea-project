import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

interface PropsType {
  area: string
  areaInfo: {}
}

function WaterInfo({ area, areaInfo }: PropsType) {
  const [items, setItems] = useState<any>([])
  const filteredItemRef = useRef<any>()
  const getWaterInfo = async () => {
    try {
      const res = await axios(
        `https://www.meis.go.kr/service/OceansBeachSeawaterService/getOceansBeachSeawaterInfo?serviceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D&pageNo=1&numOfRows=1500&resultType=JSON&SIDO_NM=${area}&RES_YEAR=2019&SG_APIM=2ug8Dm9qNBfD32JLZGPN64f3EoTlkpD8kSOHWfXpyrY`
      )
      console.log(res.data.getOceansBeachSeawaterInfo.item)
      filteredItemRef.current = res.data.getOceansBeachSeawaterInfo.item.filter((el: any) => {
        el.sta_nm !== areaInfo.sta_nm
      })

      setItems(filteredItemRef.current)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getWaterInfo()
  }, [])
  useEffect(() => {
    console.log('filter', items)
  }, [filteredItemRef.current])
  return (
    <div className="w-[400px] h-[200px] rounded-md border-2 border-solid border-cyan-400 text-cyan-400">
      WaterInfo
      {filteredItemRef.sta_nm}
    </div>
  )
}

export default WaterInfo
