import React, { useState } from 'react'
import styled from 'styled-components';
const NumberSelectorContainer=styled.div`
width: 552px;
height: 138px;
display:flex;
flex-direction: column;
align-items: end;
   .flex {
    display: flex;
    gap:24px;
     }
     p{
        font-size: 24px;
        font-weight:700;
     }
     .error{
        color: red;
        font-size: 16px;
        font-weight:500;
     }
`;
const Box=styled.div`
width: 72px;
height: 72px;
display: grid;
place-items: center;
border: 1px solid black;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>props.isSelected?"black":"white"};
color:${(props)=>!props.isSelected?"black":"white"};
transition: 0.5s linear all;

`;
const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const array=[1,2,3,4,5,6];
    const NumberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {
                array.map((value,i)=>{
                    return (
                        <Box key={i} isSelected={value===selectedNumber} onClick={()=>NumberSelectorHandler(value)}>{value}</Box>
                    )
                })
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;