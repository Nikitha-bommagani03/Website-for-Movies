import React from 'react'
import Trendingmovies from './Components/Trendingmovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Particularmovie from './Components/Particularmovie'
import ErrorPage from './Components/Error'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Trendingmovies/>}/>
        <Route path='/partmovie' element={<Particularmovie/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
