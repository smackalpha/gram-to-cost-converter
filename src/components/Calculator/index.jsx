import React from 'react'
import * as Styled from './styles';

function Calculator(props) {
  const { pricePerKg, optionSelected, setOptionSelected, valueToCalculate, setValueToCalculate, result, setResult } = props

  const onOptionChange = (value) => {
    setOptionSelected(value)
    setResult("")
    setValueToCalculate("")
  }

  const onCalculateBtnClick = () => {
    if (pricePerKg === "") {
      alert("Please Enter the Price of 1KG")
      return
    }
    if (optionSelected === "Price") {
      const conversionRate = 1000; // grams per kilogram
      const price = valueToCalculate;
      const costPerGram = pricePerKg / conversionRate;
      const amountInGrams = price / costPerGram;
      setResult(Math.round(amountInGrams) + " grams")
    }
    if (optionSelected === "Grams") {
      const conversionRate = 1000; // grams per kilogram
      const amountInGrams = valueToCalculate;
      const amountInKg = amountInGrams / conversionRate;
      const costForAmount = amountInKg * pricePerKg;
      setResult("Price : "+Math.round(costForAmount))
      // console.log(costForAmount); // output: 60
    }
    if (optionSelected === "KiloGrams") {
      const costForAmount = valueToCalculate * pricePerKg;
      setResult("Price : "+Math.round(costForAmount))
      // console.log(costForAmount); // output: 60
    }
  }
  return (
    <Styled.MainContainer>
      <Styled.Text>Calculator</Styled.Text>
      <Styled.Line />

      <Styled.ChooserBlock>
        <div>Choose One to Calculate</div>
        <select style={{ height: "35px", fontSize: "18px" }} value={optionSelected} onChange={(e) => { onOptionChange(e.target.value); }}>
          <option value="Price">Price</option>
          <option value="Grams">Grams</option>
          <option value="KiloGrams">KiloGrams</option>
        </select>
      </Styled.ChooserBlock>

      <Styled.ChooserBlock>
        <div>Enter {optionSelected}</div>
        <Styled.Input type="number" value={valueToCalculate} placeholder={`Enter ${optionSelected}`} onChange={(e) => setValueToCalculate(e.target.value)} />
      </Styled.ChooserBlock>
      <Styled.Button onClick={onCalculateBtnClick}>Calculate</Styled.Button>


    </Styled.MainContainer>
  )
}

export default Calculator