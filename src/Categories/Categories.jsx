import React from 'react'

function Categories({value,onChangeCat}) {
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  return (
    <div className="categories">
    <ul>
        {
            categories.map((item,index)=>
                (<li
                    key={index} 
                    onClick={()=>onChangeCat(index)} 
                    className={value===index?'active':''}>
                {item}</li>))
        }
    </ul>
  </div>
  )
}

export default Categories