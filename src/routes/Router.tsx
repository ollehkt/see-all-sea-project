import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Area from './Area'

import About from './About'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":area" element={<Area />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  )
}

export default Router
