import { createContext, useMemo, useReducer } from "react";
import Reducer, { initialState } from "./Reducer";

export const ContextGlobal = createContext(initialState);

const ContextProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  const providerValue = useMemo(() =>({state, dispatch}),[state, dispatch])

  return (
    <ContextGlobal.Provider value={providerValue}>
        {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;