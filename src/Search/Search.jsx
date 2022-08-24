import React, { useState } from 'react'
import style from './Search.module.scss'
import { SearchValue } from '../App'
import debounce from 'lodash.debounce'

function Search() {
  const [value,setValue] = useState('')
  const {setSearchValue}=React.useContext(SearchValue)

  const toChangeInput=React.useCallback(
    debounce((val)=>{
      setSearchValue(val)
    },500),
    [],
  )

  const inputChange=(e)=>{
    setValue(e.target.value)
    toChangeInput(e.target.value)
  }
  return (
    <div className={style.root}>
        <svg className={style.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>
        <input value={value} onChange={inputChange} className={style.input} placeholder="Найти пиццу..."/>
    </div>
    
  )
}

export default Search