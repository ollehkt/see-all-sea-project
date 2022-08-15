import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Area from './Area'
import About from './About'
import AreaList from './AreaList'
import Nav from './Nav'
import Auth from './Auth'
import AuthForm from './AuthForm'

const Router = () => {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="area" element={<Nav />}>
        <Route index element={<AreaList />} />
        <Route path=":area" element={<Area />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  )
}

export default Router
