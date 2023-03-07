import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import {increment} from './redux/features/counterSlice';
import { usePhotosNameQuery } from './redux/photo/apiSlice';
import { photo,  task } from './redux/photo/photoSlice';
import { RootState } from './redux/store';

function App() {
  const state = useSelector((state:RootState )=>state?.photo)
  console.log(state);
  
const dispatch = useDispatch()
const handleClick = () => {
 
};
useEffect(()=>{
  dispatch(task())
},[])
const handleIncrement = () =>{
dispatch( increment())
}
const {data,isLoading,isError} = usePhotosNameQuery();
 console.log(isLoading);
  return (
    <div className="App">
  <button onClick={handleClick}>Fetch Tasks</button>
      {/* <button onClick={handleIncrement}>submit my code</button>
      {
        state.map((item: photo)=><h1>{item.userId}</h1>)
      } */}
    </div>
  );
}

export default App;
