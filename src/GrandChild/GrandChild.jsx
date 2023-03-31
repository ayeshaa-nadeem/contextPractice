import React, { useContext } from "react";
import { AppContext } from "../Context";

const GrandChild = () => {
    const {userName, setUserName} = useContext(AppContext);
  return (
    <div>
      {console.log("===3")}
      {userName}
      <button onClick={()=>{setUserName("ali")}}>Click</button>
      {/* <button onClick={()=>{console.log("nameref",nameRef.current);nameRef.current="umerrr"}}>Click</button> */}
    </div>
  );
};
export default GrandChild;
