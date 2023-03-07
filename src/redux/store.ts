import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { PhotoList } from "./photo/apiSlice";
 
import photoSlice, { photoState } from "./photo/photoSlice";
  
export interface RootState {
    photo: photoState;
    
    // Add more slice states here as needed
  }
export const store = configureStore({
    reducer:{
         [PhotoList.reducerPath] : PhotoList.reducer,
         photo:photoSlice
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PhotoList.middleware),
})