import React, { useEffect, useRef } from 'react'
declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window
const Kakao = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mapRef.current
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 5,
    }
    const map = new kakao.maps.Map(container, options)
  }, [])
  return <div ref={mapRef} style={{ width: '500px', height: '500px' }}></div>
}

export default Kakao
