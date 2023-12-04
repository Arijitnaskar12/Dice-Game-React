import React from 'react'
import styled from 'styled-components';
const Rules=styled.div`
background-color: #FBF1F1;
max-width: 800px;
margin: 0 auto;
margin-top: 10px;
padding:20px;
border-radius: 20px;
`;
const RulesContainer = () => {
  return (
    <Rules>
    <h2>How to play dice game</h2>
     <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
     </div>
    </Rules>
  )
}

export default RulesContainer;