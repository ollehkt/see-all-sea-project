import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Router from './routes/Router'
import Entry from './components/Entry'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import { useStoreSelector } from './store/store'
import WeatherPrac from './components/weatherpractice/WeatherPrac'
import ReactKakaoMap from './components/map/ReactKakaoMap'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  const mapRef = useRef<any>(null)

  return (
    <>
      <div className="bg-[url('/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp')] bg-no-repeat bg-cover">
        <TheHeader />
        <Nav />
        <Router />
      </div>
      <TheFooter />
    </>
  )
}

export default App
{
}
