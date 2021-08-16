import { createContext, useReducer } from 'react';
import initialAuthStates from './initialStates/auth';
import authReducer from './reducers/auth';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthStates);

  return (
    <GlobalContext.Provider value={{ authState, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
