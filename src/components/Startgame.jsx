import React from 'react'
import styled from 'styled-components';
import { Button } from './Styled/Button';
const Container=styled.div`
max-width: 1182px;
display: flex;
height: 100vh;
margin:0 auto;
align-items: center;

.content {
  h1{
    font-size: 96px;
  }
}
`;
const Startgame = ({toggle}) => {
  return (
    <>
      <Container>
      <div>
        <img src='/images/dices.png' alt='Dice photo'/>
      </div>
        <div className='content'>
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  )
}

export default Startgame;