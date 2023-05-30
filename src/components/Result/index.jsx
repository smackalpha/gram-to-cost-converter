import React from 'react'
import * as Styled from './styles';
import styled from 'styled-components';


function Result(props) {
  const {result, optionSelected,valueToCalculate} = props
  const BoldText = styled.span`
  font-weight: bold;
  color:#F16767
`;

  const resultContent = optionSelected==="Price"?<>
    For <BoldText>₹ {valueToCalculate}</BoldText> , you get <BoldText>{result}</BoldText> 
  </>
:optionSelected==="Grams"?<>
    The Cost of <BoldText>{valueToCalculate} grams</BoldText> is <BoldText>₹ {result}</BoldText>
  </>
:<>
    The Cost of <BoldText>{valueToCalculate} Kgs</BoldText> is <BoldText>₹ {result}</BoldText>
  </>
  return (
    <Styled.MainContainer style={{display: result === ""?"none":"flex"}}>
      <Styled.ResultBlock>
        <Styled.Text>{resultContent}</Styled.Text>
      </Styled.ResultBlock>
    </Styled.MainContainer>
  )
}

export default Result