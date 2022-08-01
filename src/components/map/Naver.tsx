import React, { useEffect } from 'react'

interface PropsType {
  x: number
  y: number
}

const Naver = ({ x, y }: PropsType /* props로 내려 받을 위도 경도 */) => {
  useEffect(() => {
    let map = null
    let marker = null
    const initMap = () => {
      map = new naver.maps.Map('map', {
        //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(37, 127.039573), // props로 api받아와서 내려줄 값
        zoom: 13,
      })

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
        icon: {
          content: `<img alt="marker" src="../../../public/KakaoTalk_20220523_141914763.jpg" />`,
        },
      })
    }
    initMap()
  }, [])
  return <div id="map" className="w-[500px] h-[500px]"></div>
}

export default Naver
