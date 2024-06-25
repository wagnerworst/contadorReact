import React from 'react';
import './App.css';
import { ButtomClick } from './components/Buttom/'
import { Title } from './components/Title/'

function App() {
  const [count, setCount] = React.useState(0)

  const handleDecremetCount = () =>{
    setCount(count-1);
  }

  const handleIncremetCount = () =>{
    setCount(count+1);
  }

  const handleResetCount = () =>{
    setCount(0);
  }

  return (
    <div className='main'>
      <Title>{count}</Title>
      <div className='buttons'>
      <ButtomClick onClick={handleDecremetCount}>{"< "}Contador</ButtomClick>
      <ButtomClick onClick={handleResetCount}>Resetar</ButtomClick>
      <ButtomClick onClick={handleIncremetCount}>Contador{"> "}</ButtomClick>
      </div>
    </div>
  );
}

export default App;
