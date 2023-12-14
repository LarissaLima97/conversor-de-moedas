import React, { useState } from 'react';
import './styles/global.scss';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { DropDown } from './components/DropDown';
import { Button } from './components/Button';
import {convertValue} from './services/api';

function App() {
  let arr: string[] = [];
  arr = ['','BRL', 'USD', 'EUR']; 

  const [stateValue, setStateValue] = useState({
    userValue: 0,
    currencyFrom:'',
    currencyTo:'',

  });

  const [resultValue, setResultValue] = useState('');

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setStateValue({...stateValue, 
      [e.currentTarget.name]: value
    });
  }

  const handleResult = async (currencyFrom: string, currencyTo: string, userValue: number) =>{
    if(currencyFrom === '' || currencyTo === '' || userValue === 0) {
      alert('Todos os campos precisam ser preenchidos!')
    }
    else {
      const res = await(convertValue(currencyFrom, currencyTo, userValue));
      setResultValue(res);
    }
  }
  return (
    <div className="App">
      <Box>
        <Header>Conversor de Moedas</Header>
        <Label>
          Valor        
          <Input
            name="userValue"
            value={stateValue.userValue}
            onChange={handleChange}
          />
        </Label>
        <Label>
          De
          <DropDown
            name='currencyFrom'
            value={stateValue.currencyFrom}
            onChange={handleChange}
          >
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </DropDown>
        </Label>
        <Label>
          Para
          <DropDown
            name='currencyTo'
            value={stateValue.currencyTo}
            onChange={handleChange}
          >
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </DropDown>
        </Label>
        <Button onClick={()=> handleResult(stateValue.currencyFrom, stateValue.currencyTo, stateValue.userValue)}>Converter</Button>
        <Label>{resultValue}</Label>
      </Box>
    </div>
  );
}

export default App;
