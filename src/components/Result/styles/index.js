import styled from 'styled-components';

export const MainContainer = styled.div`
   display: flex; 
   justify-content: center;
   margin-top :30px ;
`;

export const ResultBlock = styled.div`
   display: flex; 
  height: 100px; 
  width: 100%; 
  border: 2px solid #F16767; 
  margin: 0px 10px; 
  border-radius: 20px; 
  justify-content: center; 
  align-items: center;
  background-color: transparent; //Or you can use any color you want
`;

export const Text = styled.div`
  color: black; 
  font-size: 24px; 
  text-align: center;
`;