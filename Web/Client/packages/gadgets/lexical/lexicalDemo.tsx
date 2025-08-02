import * as React from "react";
import LexicalCard from "./lexicalCard";
import {v4 as uuidv4} from "uuid";
const LexicalDemo = () =>{

    return (
        <div >
            <LexicalCard props={{id: uuidv4(), key: uuidv4(), content:""}} removeCard={()=> {}} />
        </div>
    );
};

export default LexicalDemo;
