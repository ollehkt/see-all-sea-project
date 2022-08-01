import React from 'react'
import data from '../../TL_SCCO_CTPRVN'

function TheHeader() {
  let filteredData = data.flatMap((datas) => datas.features)
  // console.log(filteredData)
  let filteredData2 = filteredData.map((data) => console.log(data.geometry.coordinates))
  return (
    <div className="w-[1280px]  h-[122px] mx-auto   bg-cyan-200 ">
      <h1>눈으로 보는 모든 바다~! 안전해~!!!</h1>
      {/* <span>{filteredData}</span> */}
    </div>
  )
}

export default TheHeader
