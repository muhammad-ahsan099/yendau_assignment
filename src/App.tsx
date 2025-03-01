import React from 'react';
import { CounterProvider } from "./context/CounterContext";
import { ChakraProvider } from "@chakra-ui/react";
import Home from './pages/home/Home';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CounterProvider>
        <Home />
      </CounterProvider>
    </ChakraProvider>
  );
};

export default App;