import React from 'react';
import './styles/global.scss';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Select } from './components/Select';

function App() {
  let arr: string[] = [];
  arr = ['Oi', 'dois', 'três']; 
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
          <Select>
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </Select>
        </Label>
        <Label>
          Para
          <Select>
            {arr.map(item => (
              <option>{item}</option>
            ))}
          </Select>
        </Label>
      </Box>
    </div>
  );
}

export default App;
