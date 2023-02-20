import React from 'react'
import * as Styled from './styles';


function Result(props) {
  const {result} = props
  return (
    <Styled.MainContainer style={{display: result === ""?"none":"flex"}}>
      <Styled.ResultBlock>
        <Styled.Text>{result}</Styled.Text>
      </Styled.ResultBlock>
    </Styled.MainContainer>
  )
}

export default Result