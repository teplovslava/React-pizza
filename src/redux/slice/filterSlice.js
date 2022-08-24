import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isChooseCategory:0,
    currentPage:1,
    isChooseSort:{
        name:"Популярности",
        sortProp:'rating'
    }
}

const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategory(state, action){
            state.isChooseCategory = action.payload
        },
        setSort(state, action){
            state.isChooseSort = action.payload
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
    }

})

 export const {setCategory,setSort,setCurrentPage}=filterSlice.actions;
 export default filterSlice.reducer;