import React, { useState } from 'react'
import styled from 'styled-components';
const Rolldice=styled.div`
margin-top:10px;
display:flex;
flex-direction: column;
align-items: center;
.dice{
  cursor:pointer;
  }
  p{
    font-size: 24px;
  }
`;
const DiceContainer = ({diceNumber,rollDice}) => {
  return (
    <Rolldice>
    <div className='dice' onClick={rollDice}>
    <img src={`/images/dices/dice_${diceNumber}.png`} alt='dice_1'/>
    </div>
    <p>Click on Dice to roll</p>
    </Rolldice>
  )
}

export default DiceContainer;