import React from 'react'
import * as Styled from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Calculator(props) {
  const { pricePerKg, optionSelected, setOptionSelected, valueToCalculate, setValueToCalculate, result, setResult } = props

  const onOptionChange = (value) => {
    setOptionSelected(value)
    setResult("")
    setValueToCalculate("")
  }

  const onCalculateBtnClick = () => {
    if (pricePerKg === "") {
      toast.warn("Please Enter the Price of 1KG")
      return
    }
    if (optionSelected === "Price") {
      const conversionRate = 1000; // grams per kilogram
      const price = valueToCalculate;
      const costPerGram = pricePerKg / conversionRate;
      const amountInGrams = price / costPerGram;
      if(amountInGrams>1000){
        setResult(Math.round(amountInGrams) + " grams ≈ "+ (amountInGrams/1000)+ " Kgs")
        return
      }
      setResult(Math.round(amountInGrams) + " grams")
    }
    if (optionSelected === "Grams") {
      const conversionRate = 1000; // grams per kilogram
      const amountInGrams = valueToCalculate;
      const amountInKg = amountInGrams / conversionRate;
      const costForAmount = amountInKg * pricePerKg;
      setResult("Price : "+Math.round(costForAmount))
    }
    if (optionSelected === "KiloGrams") {
      const costForAmount = valueToCalculate * pricePerKg;
      setResult("Price : "+Math.round(costForAmount))
    }
  }
  return (
    <Styled.MainContainer>
      <Styled.Text>Calculator</Styled.Text>
      <Styled.Line />

      <Styled.ChooserBlock>
        <div>Choose One to Calculate</div>
        <select style={{ height: "40px", fontSize: "18px" }} value={optionSelected} onChange={(e) => { onOptionChange(e.target.value); }}>
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

      <ToastContainer position="bottom-center" />
    </Styled.MainContainer>
  )
}

export default Calculator