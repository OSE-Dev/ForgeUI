import React from "react";
import ReactRndDemo from "./react-rnd-demo";
import {CardContextProvider} from "./CardContext";

export const ReactRndDemoWrapper = () =>{
  return (
      <CardContextProvider>
          <ReactRndDemo />
      </CardContextProvider>
  )  
};
