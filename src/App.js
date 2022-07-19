import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import Buttons from './components/buttons';

import {useState, UseState} from 'react'

function App() 
{

  const [counter, setCount] = useState(0);

  const [name, setName] = useState("Lee-Anne");

  //update function

  const changeName = ()=>{
    setName("Bianca")
  }

  // updatefunction2 

  const changeNumber = ()=>{
    setCount(400)
  }

  const increment = () => {

    let sum = counter + 1;
    //update state
    setCount(sum);

  };

  const decrement = () => {

    if (counter == 0)
    {
      setCount(0);
    }
    else
    {
    let sub = counter - 1;
    //update state
    setCount(sub);
    }

    

  }


  return (
    <div className="App">

      <Display counter = {counter}/>
      <Buttons increment={increment} decrement = {decrement}/>

      <h1>{name}</h1>
      <h1>{counter}</h1>

      <button onClick={changeName}>SET NAME</button>
      <button onClick={changeNumber}>CHANGE NUMBER</button>
      
    </div>
  );
}

export default App;
