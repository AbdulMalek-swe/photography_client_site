import { createSlice } from "@reduxjs/toolkit"

interface counterState {
    value:number
}

export const initialState : counterState = {
    value:0
}

 const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        }
    }
})
export const {increment} = counterSlice.actions;
export default  counterSlice.reducer