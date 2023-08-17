import React from 'react';
import './styles/global.scss';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Label } from './components/Label';

function App() {
  return (
    <div className="App">
      <Box>
        <Header>Conversor de Moedas</Header>
        <Label>Valor
          <Input></Input>
        </Label>
      </Box>
    </div>
  );
}

export default App;
