import React from 'react'
import * as Styled from './styles';

function BasicDetails( props) {
  const {pricePerKg, setPricePerKg} =props

  return (
    <Styled.MainContainer>
      <Styled.Text>BasicDetails</Styled.Text>
      <Styled.Line />
      <Styled.OverallPriceBlock>
        <div>Enter Price of 1 KG</div>
        <Styled.OverallPriceInput value={pricePerKg} placeholder='Enter Price' type={"number"} onChange={(e)=>setPricePerKg(e.target.value)}/>
      </Styled.OverallPriceBlock>
    </Styled.MainContainer>

  )
}

export default BasicDetails