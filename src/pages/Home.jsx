import Sort, { arr } from '../Sort/Sort'
import React, { useEffect } from 'react'
import Categories from '../Categories/Categories'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import { useState } from 'react'
import  Skeleton  from '../PizzaBlock/Sceleton'
import Pagination  from '../Pagination/Pagination'
import {SearchValue} from '../App'
import {useDispatch, useSelector} from 'react-redux'
import {setCategory,setCurrentPage,setFilters} from '../redux/slice/filterSlice'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'



function Home() {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const {searchValue}=React.useContext(SearchValue)
    const [pizzaArr,setPizzaArr]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const currentPage = useSelector(state=>state.filterSlice.currentPage)

    const isChooseCategory = useSelector(state=>state.filterSlice.isChooseCategory)
    const isChooseSort = useSelector(state=>state.filterSlice.isChooseSort)
    const onChangeCat =(id)=>{
      dispatch(setCategory(id))
    }

    const onPageChange=(number)=>{
      dispatch(setCurrentPage(number))
    }



    useEffect(()=>{
      setIsLoading(true);
      axios.get(`https://62f17202b1098f150800f4a5.mockapi.io/items?page=${currentPage}&limit=4&${isChooseCategory>0
      ?`category=${isChooseCategory}`
      :''}&sortBy=${isChooseSort.sortProp.replace('-','')}&order=${isChooseSort.sortProp.includes('-')?'asc':'desc'}`)
      .then(res=>{
        setPizzaArr(res.data)
        setIsLoading(false);
        window.scrollTo(0,0)
      })
    },[isChooseCategory,isChooseSort,currentPage])

    useEffect(()=>{
      const queryString = qs.stringify({
        sortProp:isChooseSort.sortProp,
        isChooseCategory,
        currentPage
      });
      navigate(`?${queryString}`)
    },[isChooseCategory,isChooseSort,currentPage])

  return (
        <>
        <div className="content__top">
        <Categories value={isChooseCategory} onChangeCat={onChangeCat}/>
        <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
       {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              :pizzaArr
              .filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
        <Pagination value={currentPage} onChangePage={onPageChange}/>
        </>

  )
}

export default Home