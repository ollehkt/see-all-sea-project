import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Kyunggi from './Kyunggi'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:area" element={<Kyunggi />} />
    </Routes>
  )
}

export default Router
