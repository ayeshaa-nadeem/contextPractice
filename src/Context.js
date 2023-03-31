import React,{useState, createContext} from 'react';

const AppContext = createContext(null);

const ContextProvider = ({children}) => {
  const [userName, setUserName]= useState("PedroTech")
  return (
  <AppContext.Provider value={{userName,setUserName}}>
    {children}
  </AppContext.Provider>
  );
}

export {AppContext,ContextProvider}
// export default App;
