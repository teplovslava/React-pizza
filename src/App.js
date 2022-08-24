import Home from './pages/Home'
import '../src/assets/app.scss'
import Header from './Header/Header'
import NotFound from './pages/NotFound'
import { Routes , Route } from 'react-router-dom';
import Cart from './pages/Cart';
import { useState } from 'react';
import React from 'react';
export const SearchValue = React.createContext()

function App() {
  
  const [searchValue,setSearchValue]=useState('')
  return (
    <div className="wrapper">
      <SearchValue.Provider value={{searchValue,setSearchValue}}>
    <Header/>
    <div className="content">
      <div className="container">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
    </div>
  </div>
  </SearchValue.Provider>
  </div>
  )
}

export default App
