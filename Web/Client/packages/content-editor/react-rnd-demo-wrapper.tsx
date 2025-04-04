import React from "react";
import ReactRndDemo from "./react-rnd-demo";
import {SomeContextProvider} from "./SomeContext";
import {CardContextProvider} from "./CardContext";

export const ReactRndDemoWrapper = () =>{
  return (
      <CardContextProvider>
          <SomeContextProvider>
              <ReactRndDemo />
          </SomeContextProvider>
      </CardContextProvider>
  )  
};
