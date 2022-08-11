import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

interface PropsType {
  area: string
  areaInfo: {}
}

function WaterInfo({ area, areaInfo }: PropsType) {
  const [items, setItems] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const filteredItemRef = useRef<any>()
  const getWaterInfo = async () => {
    setIsLoading(true)
    try {
      const res = await axios(
        `https://www.meis.go.kr/service/OceansBeachSeawaterService/getOceansBeachSeawaterInfo?serviceKey=i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL%2B%2Bhdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ%3D%3D&pageNo=1&numOfRows=1500&resultType=JSON&SIDO_NM=${area}&RES_YEAR=2019&SG_APIM=2ug8Dm9qNBfD32JLZGPN64f3EoTlkpD8kSOHWfXpyrY`
      )
      console.log('불러온데이터:', res.data.getOceansBeachSeawaterInfo.item)
      filteredItemRef.current = res.data.getOceansBeachSeawaterInfo.item.filter((el: any) => {
        el.sta_nm === areaInfo.sta_nm
      })
      console.log(filteredItemRef.current)
      setItems(filteredItemRef.current)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getWaterInfo()
  }, [])
  useEffect(() => {
    console.log('filter', items)
  }, [filteredItemRef.current])
  return (
    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-md border-2 border-solid border-cyan-400 text-cyan-400">
      {isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-gray-100"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        'WaterInfo'
      )}

      {filteredItemRef.sta_nm}
    </div>
  )
}

export default WaterInfo
