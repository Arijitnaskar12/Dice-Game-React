import React, { useState } from 'react';
import Startgame from './components/Startgame';
import GamePlay from './components/GamePlay';
const App = () => {
  const[isGameStarted,setisGameStarted]=useState(false);
  const toggle=()=>{
    setisGameStarted(!isGameStarted);
  }
  return (
    <>
    {
      isGameStarted? <GamePlay/> : <Startgame toggle={toggle}/>
    }
    </>
  )
}

export default App;