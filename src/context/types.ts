import { ReactNode } from "react";

export interface CounterContextType {
    count: number;
    increment: () => void;
}

export interface CounterProviderProps {
  children: ReactNode;
}
