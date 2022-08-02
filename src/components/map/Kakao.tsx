import React, { useEffect, useRef, useState } from 'react'
declare global {
  interface Window {
    kakao: any
  }
}
interface PropsTypes {
  name: string
}
// const { kakao } = window
const Kakao = ({ name }: PropsTypes) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [markerList, setMarkerList] = useState<any[]>([])
  const [info, setInfo] = useState()
  const map = useRef<any>(null)
  // const [level, setLevel] = useState(0)
  // const [map, setMap] = useState<any>()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=27ca445596778f57efa825a1e6f30912&libraries=services&autoload=false'
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 5,
          }
          map.current = new window.kakao.maps.Map(mapRef.current, options)
          const mapTypeControl = new window.kakao.maps.MapTypeControl()

          const ps = new window.kakao.maps.services.Places()
          ps.keywordSearch(`${name} 바닷가`, (data, status, _pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const bounds = new window.kakao.maps.LatLngBounds()
              let markerList = []
              for (let i = 0; i < data.length; i++) {
                markerList.push({
                  position: {
                    lat: data[i].y,
                    lng: data[i].x,
                  },
                  content: data[i].place_name,
                })
                // @ts-ignore
                bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
              }
              setMarkerList(markerList)

              map.current.setBounds(bounds)
            }
          })

          // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
          // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
          map.current.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)
          var zoomControl = new window.kakao.maps.ZoomControl()
          map.current.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
          // 우측마우스 클릭시 마커 생성
          // window.kakao.maps.event.addListener(map.current, 'rightclick', (mouseEvent: any) => {
          //   const latlng = mouseEvent.latLng

          //   const title = prompt('마커의 타이틀을 입력')
          //   const marker = new window.kakao.maps.Marker({
          //     map: map.current,
          //     position: latlng,
          //     title,
          //   })
          //   setMarkerList((prev) => [...prev, marker])
          // })
          // setMap(new window.kakao.maps.Map(mapRef.current, options))
        }
      })
    }
    return () => script.remove()
  }, [])

  return (
    <>
      <button
        onClick={() => {
          map.current.setCenter(new window.kakao.maps.LatLng(37.5642135, 127.0016985))
          // map.setCenter(new window.kakao.maps.LatLng(37.5642135, 127.0016985))
        }}
      >
        서울로
      </button>
      <button
        onClick={() => {
          map.current.setCenter(new window.kakao.maps.LatLng(35.1379222, 129.05562775))
          // map.setCenter(new window.kakao.maps.LatLng(35.1379222, 129.05562775))
        }}
      >
        부산로
      </button>
      <div ref={mapRef} className="w-[800px] h-[500px] mx-auto "></div>
    </>
  )
}

export default Kakao
