import React, { createContext, useState } from "react";
import { CounterContextType, CounterProviderProps } from "./types";

const CounterContext = createContext<CounterContextType | undefined>(undefined);


export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;