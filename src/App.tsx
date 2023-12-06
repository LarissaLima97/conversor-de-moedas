import React from 'react';
import './styles/global.scss';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { DropDown } from './components/DropDown';
import { Button } from './components/Button';
import {currencyInfo} from './services/api';

function App() {
  let arr: string[] = [];
  arr = ['BRL', 'USD', 'EUR']; 
  return (
    <div className="App">
      <Box>
        <Header>Conversor de Moedas</Header>
        <Label>
          Valor        
          <Input></Input>
        </Label>
        <Label>
          De
          <DropDown>
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </DropDown>
        </Label>
        <Label>
          Para
          <DropDown>
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </DropDown>
        </Label>
        <Button onClick={()=> currencyInfo('BRL', 'USD')}>Converter</Button>
      </Box>
    </div>
  );
}

export default App;
