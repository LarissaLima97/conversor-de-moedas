import React from 'react';
import './styles/global.scss';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Box>
        <Header>Conversor de Moedas</Header>
        <Input></Input>
      </Box>
    </div>
  );
}

export default App;
