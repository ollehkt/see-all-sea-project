import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MapTypeControl,
  MarkerClusterer,
  ZoomControl,
} from 'react-kakao-maps-sdk'

interface PropsType {
  datas: []
  place: string
}

function ReactKakaoMap({ datas, place }: PropsType) {
  const [isOpen, setIsOpen] = useState(false)
  const [map, setMap] = useState<any>()
  const [markers, setMarkers] = useState<any>([])
  const mapRef = useRef<any>()
  const levelRef = useRef<any>(10)
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds()

    datas.forEach((data) => {
      bounds.extend(new kakao.maps.LatLng(data.latlng.lat, data.latlng.lon))
    })
    return bounds
  }, [datas])

  useEffect(() => {
    console.log(datas)
  }, [datas])
  useEffect(() => {}, [map])

  const MovieChart = () => (
    <div className="overlaybox">
      <div className="boxtitle">금주 영화순위</div>
      <div className="first">
        <div className="triangle text">1</div>
        <div className="movietitle text">드래곤 길들이기2</div>
      </div>
      <ul>
        <li className="up">
          <span className="number">2</span>
          <span className="title">명량</span>
          <span className="arrow up"></span>
          <span className="count">2</span>
        </li>
        <li>
          <span className="number">3</span>
          <span className="title">해적(바다로 간 산적)</span>
          <span className="arrow up"></span>
          <span className="count">6</span>
        </li>
        <li>
          <span className="number">4</span>
          <span className="title">해무</span>
          <span className="arrow up"></span>
          <span className="count">3</span>
        </li>
        <li>
          <span className="number">5</span>
          <span className="title">안녕, 헤이즐</span>
          <span className="arrow down"></span>
          <span className="count">1</span>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <Map
        className="z-999 w-[100%] h-[600px]"
        center={{ lat: 33.5563, lng: 126.79581 }}
        level={10}
        ref={mapRef}
        onCreate={() => {
          const map = mapRef.current
          if (map) map.setBounds(bounds)
        }}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          {datas.map((item: any, index) => (
            <MapMarker
              key={`${item.title}-${index}`}
              position={{ lat: item.latlng.lat, lng: item.latlng.lon }}
              image={{
                src: '/KakaoTalk_20220523_141914763.jpg', // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 24,
                },
              }}
              title={item.title}
              onClick={(marker) => {
                setIsOpen((prev) => (prev = !isOpen))
                map.panTo(marker.getPosition())
              }}
            />
          ))}
          <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            // 커스텀 오버레이가 표시될 위치입니다
            position={{
              lat: 33.450701,
              lng: 127.026581,
            }}
            // 커스텀 오버레이가에 대한 확장 옵션
            xAnchor={0.3}
            yAnchor={0.91}
          >
            <MovieChart />
          </CustomOverlayMap>

          {/* <div style={{ color: '#000' }}>나타낼 바다 이름</div> */}
          <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
          <MapTypeControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
        </MarkerClusterer>
      </Map>
    </>
  )
}

export default ReactKakaoMap
