import {useSomeContext} from "./SomeContext";
import Button from "primereact/button";
import {SelectButton} from "primereact/selectbutton";
import React from "react";

export const SomeComponent = () => {
    const { value, setValue } = useSomeContext();
    function handleOnClick() {
        const newValue = value ? value + 1 : 1;
        setValue(newValue);
    }
    
    return (
        <>
            <SelectButton onClick={handleOnClick} style={{backgroundColor:"blueviolet", height:"50px"}} >
               somecomponent: {value}
            </SelectButton>
        </>
    );
};
