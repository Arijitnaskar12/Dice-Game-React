import React, { useState } from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import DiceContainer from './DiceContainer';
import { Button, OutlinedButton } from './Styled/Button';
import RulesContainer from './RulesContainer';
const MainContainer=styled.div`
padding-top:30px;
.top_section{
    display: flex;
    justify-content: space-around;
}
.btns{
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
}
`;


const GamePlay = () => {
    const[diceNumber,setDiceNumber]=useState(1);
    const[selectedNumber,setSelectedNumber]=useState();
    const[error,setError]=useState();
    const[score,setScore]=useState(0);
    const[showRules,setShowRules]=useState(false);
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const rollDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        const randomNumber=random(1,7);
        setDiceNumber(randomNumber);
        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber("");
    }
    const resetScore=()=>{
        setScore(0);
    }
   const toggle=()=>{
    setShowRules(!showRules);
   }
  return (
    <MainContainer>
    <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}/>
    </div>
    <DiceContainer diceNumber={diceNumber} rollDice={rollDice}/>
    <div className='btns'>
    <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
    <Button onClick={toggle}>{showRules?"Hide":"Show"} Rules</Button>
    </div>
    {
        showRules && <RulesContainer/>
    }
    
    </MainContainer>
  )
}

export default GamePlay;
