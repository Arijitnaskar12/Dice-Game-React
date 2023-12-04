import styled from "styled-components";

 export const Button=styled.button`
width: 220px;
height:44px;
padding: 10px 18px 10px 18px;
border-radius: 5px;
gap: 10px;
background-color: #000000;
color:white;
float: right;
font-size: 16px;
transition: 0.6s all;
border:1px solid transparent;
 &:hover{
  background-color: white;
  color:black;
  border:1px solid black;
  transition: 0.6s all;
 }
`;

export const OutlinedButton=styled(Button)`

background-color: white;
color:black;
font-size: 16px;
transition: 0.6s all;
border:1px solid black;
 &:hover{
  background-color: black;
  color:white;
  transition: 0.6s all;
 }
`;
