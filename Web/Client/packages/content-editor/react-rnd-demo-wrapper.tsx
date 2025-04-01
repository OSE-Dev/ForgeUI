import React from "react";
import ReactRndDemo from "./react-rnd-demo";
import {SomeContextProvider} from "./SomeContext";

export const ReactRndDemoWrapper = () =>{
  return (
      <SomeContextProvider>
          <ReactRndDemo />
      </SomeContextProvider>
  )  
};
