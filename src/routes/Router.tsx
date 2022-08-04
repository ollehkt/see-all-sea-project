import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Kangwon from './Kangwon'
import Entry from './../components/Entry'
import About from './About'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:area" element={<Kangwon />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router
