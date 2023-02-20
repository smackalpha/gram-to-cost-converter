import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0px 10px;
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
  margin-top: 30px;
`;

export const Text = styled.div`
  font-weight:500; 
  font-size:18px;
`;

export const Line = styled.div`
  background-color: gray; 
  height: 1px;
  opacity: 0.6;
  border-radius: 10px;
`;

export const OverallPriceBlock = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  margin-top: 10px;
`;

export const OverallPriceInput = styled.input`
  height: 35px; 
  font-size: 18px;
`;