import React, {useState} from 'react';
import {Rnd} from "react-rnd";
import LexicalCard from "../gadgets/lexical/lexical-card";

const RNDComponent = ({card, removeCard}:{card:cardContent, removeCard: (key:string) => void}) => {
    const [dimensions, setDimensions] = useState({
        width: 400,
        height: 200,
        x: 10,
        y: 10,
    });

    return (
        <Rnd
            size={{ width: dimensions.width, height: dimensions.height }}
            position={{ x: dimensions.x, y: dimensions.y }}
            onDragStop={(e, d) => {
                setDimensions({ x: d.x, y: d.y, width: dimensions.width, height: dimensions.height});
            }}
            onResize={(e, direction, ref, delta, position) => {
                setDimensions({
                    width: parseFloat(ref.style.width),
                    height: parseFloat(ref.style.height),
                    ...position,
                });
            }}
            className={"rnddemo"}
        >
            <LexicalCard props={{id:card.id, key:card.key, content:"", height:dimensions.height-90+"px"}} removeCard={removeCard}/>
        </Rnd>
    );
}

export default RNDComponent
