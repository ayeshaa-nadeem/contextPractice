import React,{useState, createContext, useEffect, useContext} from 'react';
import { AppContext } from './Context';
import Parent from './Parent';

function App() {
  const {setUserName} = useContext(AppContext);
  useEffect(() => {
    setUserName("ayesha")
  },[])
  return (
    <div className="App">
     <Parent/>
    </div>
  );
}


export default App;
