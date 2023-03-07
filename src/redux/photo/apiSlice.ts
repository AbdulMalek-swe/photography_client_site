import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
 export  const PhotoList:any = createApi({
        reducerPath:"photoList",
        baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
        endpoints:(builder)=>({
          photosName: builder.query({
                query:()=>"/posts"
          })
        })
})

export const { usePhotosNameQuery} = PhotoList