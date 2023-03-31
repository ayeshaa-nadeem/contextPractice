import React, { useEffect, useRef, useState, useContext } from 'react';
import Child from '../Child/Child';

const Parent = () => {
  // const nameRef=useRef();
  // useEffect(()=>{
  //   console.log("===P",nameRef.current)
  // },[nameRef.current])
return(
  <div>
    {/* {nameRef.current} */}
    {/* {userName} */}
    {console.log("===1")}
    {/* using context api */}
    <Child/>  
    {/* <Child setUserName={setUserName}/>  // using props */}
    {/* <Child nameRef={nameRef}/> */}
  </div>
)
}
export default Parent;