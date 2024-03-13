import React from 'react'
import LayOut from './components/layout/LayOut'
import Home from './components/page/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Detail from './components/page/Detail'
import ScrollRestore from './components/layout/ScrollRestore'
import InvalidPage from './components/layout/InvalidPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestore/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quotes/:id' element={<Detail/>}/>
        <Route path='*' element={<InvalidPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}
