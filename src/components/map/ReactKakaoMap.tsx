import React, { useEffect, useMemo, useRef, useState } from 'react'
import WeatherPrac from 'components/Weather/Weather'
import { Map, MapMarker, MapTypeControl, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk'
import WaterInfo from '../WaterInfo/ViewWaterInfo'
import ViewBeachComments from '../BeachComment/ViewBeachComments'

interface PropsType {
  seaDatas: []
  area: string | undefined
}
interface SeaData {
  latlng: {
    lat: number
    lon: number
  }
  title: string
}

function ReactKakaoMap({ seaDatas, area }: PropsType) {
  console.log(seaDatas)
  const [isOpen, setIsOpen] = useState(false)
  const [viewInfo, setViewInfo] = useState<any>({
    viewWeather: true,
    viewWaterInfo: false,
    viewInformation: false,
  })
  const mapRef = useRef<any>()
  const [areaInfo, setAreaInfo] = useState<any>()

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds()
    seaDatas.forEach((data: SeaData) => {
      bounds.extend(new kakao.maps.LatLng(data?.latlng?.lat, data.latlng.lon))
    })
    return bounds
  }, [seaDatas])

  useEffect(() => {
    const map = mapRef.current
    if (map) map.setBounds(bounds)
  }, [seaDatas])

  return (
    <>
      <Map
        className="z-999 w-[1200px] h-[600px] rounded-md mx-auto  bg-slate-100"
        center={{ lat: 33.5563, lng: 126.79581 }}
        level={10}
        ref={mapRef}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          {seaDatas.map((item: SeaData, index) => (
            <MapMarker
              key={`${item.title}-${index}`}
              position={{ lat: item.latlng.lat, lng: item.latlng.lon }}
              image={{
                src: '/KakaoTalk_20220523_141914763.jpg', // 마커이미지의 주소입니다
                size: {
                  width: 48,
                  height: 48,
                },
              }}
              title={item.title}
              onClick={() => {
                setAreaInfo(item)
                setIsOpen(true)
              }}
            >
              {isOpen && areaInfo.latlng === item.latlng && (
                <div className=" border-none rounded-md p-10 bg-slate-100 text-cyan-400">
                  <div className="text-3xl  flex">
                    <span className="flex-grow">{areaInfo.title} 해수욕장</span>
                    <svg
                      className="w-6 h-6 hover:cursor-pointer hover:text-white hover:bg-cyan-400 rounded-full"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setIsOpen((prev: boolean) => !prev)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="my-5">
                    <span className="text-lg mr-5">지역:</span>
                    <span className="text-lg">{areaInfo.gugun_nm}</span>
                  </div>
                  <div className="my-5">
                    <span className="text-lg mr-5">TEL:</span>
                    {areaInfo.tel ? (
                      <span className="text-lg">{areaInfo.tel}</span>
                    ) : (
                      <span className="text-lg">'번호 정보가 없습니다'</span>
                    )}
                  </div>
                  <div className="flex text-2xl justify-between">
                    <div
                      className="w-[100px] mb-2 p-1 rounded-xl border-2 border-cyan-400 border-solid text-center hover:cursor-pointer hover:text-white hover:bg-cyan-400"
                      onClick={() => {
                        setViewInfo({
                          ...viewInfo,
                          viewWeather: true,
                          viewWaterInfo: false,
                          viewInformation: false,
                        })
                      }}
                    >
                      날씨
                    </div>
                    <div
                      className=" w-[100px] mb-2 p-1 rounded-xl border-2 border-cyan-400 border-solid text-center hover:cursor-pointer hover:text-white hover:bg-cyan-400"
                      onClick={() => {
                        setViewInfo({
                          ...viewInfo,
                          viewWeather: false,
                          viewWaterInfo: true,
                          viewInformation: false,
                        })
                      }}
                    >
                      수질
                    </div>
                    <div
                      className="w-[100px] mb-2 p-1 rounded-xl border-2 border-cyan-400 border-solid text-center hover:cursor-pointer hover:text-white hover:bg-cyan-400"
                      onClick={() => {
                        setViewInfo({
                          ...viewInfo,
                          viewWeather: false,
                          viewWaterInfo: false,
                          viewInformation: true,
                        })
                      }}
                    >
                      후기
                    </div>
                  </div>
                  {viewInfo.viewWeather && <WeatherPrac latlng={areaInfo.latlng} />}
                  {viewInfo.viewWaterInfo && <WaterInfo area={area} areaInfo={areaInfo} />}
                  {viewInfo.viewInformation && <ViewBeachComments areaInfo={areaInfo} />}
                </div>
              )}
            </MapMarker>
          ))}

          {/* <div style={{ color: '#000' }}>나타낼 바다 이름</div> */}
          <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
          <MapTypeControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
        </MarkerClusterer>
      </Map>
    </>
  )
}

export default ReactKakaoMap
