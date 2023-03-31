import React from "react";
import GrandChild from "../GrandChild/GrandChild";

const Child = () => {
    return(
        <>
    {console.log("===2")}
    {/* <button>click me</button> */}
    {/* /using context api */}
    <GrandChild/>
     {/* <GrandChild setUserName={setUserName}/>  //using props */}
     {/* <GrandChild nameRef={nameRef}/> */}
    </>
    )

}
export default Child;