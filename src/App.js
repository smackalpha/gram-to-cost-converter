import AppBar from './components/AppBar';
import BasicDetails from './components/BasicDetails';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [pricePerKg, setPricePerKg] = useState("")
  const [optionSelected, setOptionSelected] = useState("Price")
  const [valueToCalculate, setValueToCalculate] = useState("")
  const [result, setResult] = useState("")

  return (
    <div style={{backgroundColor:"#fadfe3", height:"100vh"}}>
      <AppBar />
      <BasicDetails
        pricePerKg={pricePerKg}
        setPricePerKg={setPricePerKg}
      />
      <Calculator
        pricePerKg={pricePerKg}
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        valueToCalculate={valueToCalculate}
        setValueToCalculate={setValueToCalculate}
        result={result}
        setResult={setResult}
      />
      <Result
        result={result}
      />
    </div>
  );
}

export default App;
