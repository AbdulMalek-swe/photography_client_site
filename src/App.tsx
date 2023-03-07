import React  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import {increment} from './redux/features/counterSlice';

function App() {
  const state = useSelector(state =>state)
  console.log(state);
  console.log(state);
const dispatch = useDispatch()
const handleIncrement = () =>{
dispatch( increment())
}
  return (
    <div className="App">

      <button onClick={handleIncrement}>submit my code</button>
    </div>
  );
}

export default App;
