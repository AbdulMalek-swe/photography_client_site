import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface photo  {   
        userId: number,
        title: string,
         body:string  
}
export interface photoState{
  photos:photo[]
}
export const initialState:photoState  = {
  photos:[]
}

export const task:any = createAsyncThunk('photo/fetchTask', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    return data;
  });

  const photoSlice = createSlice({
    name:"photo",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(task.fulfilled, (state, action) => {
              
            state.photos = action.payload;
          })
          
        }
  })
  export const {} = photoSlice.actions;
  export default photoSlice.reducer
