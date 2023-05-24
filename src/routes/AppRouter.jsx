import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Home } from '../pages/home/Home'

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
               <Route index element={<Home/>}/> 
               <Route path='home' element={<Home/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter