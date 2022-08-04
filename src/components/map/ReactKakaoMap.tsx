import React from 'react'
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk'
import Search from '../common/Search'
function ReactKakaoMap() {
  return (
    <Map className="w-[full] h-[600px]" center={{ lat: 33.5563, lng: 126.79581 }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>나타낼 바다 이름</div>
      </MapMarker>
      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
    </Map>
  )
}

export default ReactKakaoMap
