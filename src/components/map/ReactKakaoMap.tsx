import React, { useEffect, useRef, useState } from 'react'
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk'
import { useStoreSelector } from '../../store/store'
import Search from '../common/Search'
function ReactKakaoMap() {
  // const positionRef = useRef<any>(null)
  // const arrRef = useRef<any>([])
  const positions = useStoreSelector((state) => state.sea.item)
  useEffect(() => {
    console.log(positions)
  }, [])

  // const [position, setPosition] = useState<any>([])
  // console.log('mapItem : ', positionRef)

  // const onLoad = () => {
  //   arrRef.current = []
  //   positionRef.current?.forEach((el) => {
  //     arrRef.current = [
  //       ...arrRef.current,
  //       { title: el.sta_nm, latlng: { lat: el.lat, lon: el.lon } },
  //     ]
  //   })
  //   console.log('arrRef', arrRef.current)
  //   setPosition(arrRef.current)
  // }

  // useEffect(() => {
  //   onLoad()
  // }, [positionRef.current])
  // console.log('position :', position)

  return (
    <Map className="z-999 w-[100%] h-[600px]" center={{ lat: 33.5563, lng: 126.79581 }} level={10}>
      {positions.map((item) => (
        <MapMarker
          key={`${item.title}-${item.latlng}`}
          position={item.latlng}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={item.title}
        />
      ))}
      {/* <div style={{ color: '#000' }}>나타낼 바다 이름</div> */}

      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
    </Map>
  )
}

export default ReactKakaoMap
