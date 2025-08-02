import React from "react";
import ReactRndDemo from "./reactRndDemo";
import {CardContextProvider} from "./cardContext";

export const ReactRndDemoWrapper = () =>{
  return (
      <CardContextProvider>
          <ReactRndDemo />
      </CardContextProvider>
  )  
};
