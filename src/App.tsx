import React, { useState } from 'react'
import Naver from './components/map/Naver'
import Kakao from './components/map/Kakao'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import Router from '../src/routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <TheHeader />
      <Router />
      <TheFooter />
    </div>
  )
}

export default App

{
  /* <Naver x={1} y={2}  props로 내려줄 위도 경도  /> */
}
