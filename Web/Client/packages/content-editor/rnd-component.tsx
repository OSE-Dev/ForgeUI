import React, {useState} from 'react';
import {Rnd} from "react-rnd";
import LexicalCard from "../gadgets/lexical/lexical-card";
import {CardData} from "common";

const RNDComponent = ({id, card, removeCard, updateCard}:
                      {
                          id:string, 
                          card:CardData,
                          removeCard: (key:string) => void, 
                          updateCard: (key:string, updatedCard: CardData) => void }) => {
    const [dimensions, setDimensions] = useState({
        width: 400,
        height: 200,
        x: 10,
        y: 10,
    });
    // todo: load dimensions and position from store if present

    return (
        <Rnd
            size={{ width: dimensions.width, height: dimensions.height }}
            position={{ x: dimensions.x, y: dimensions.y }}
            onDragStop={(e, d) => {
                // todo: write to store
                console.log("drag: id:", id, ", x: ", d.x, ", y: ", d.y, " width: ", dimensions.width, ", height: ", dimensions.height);
                setDimensions({ x: d.x, y: d.y, width: dimensions.width, height: dimensions.height});
                card.position!.x = d.x;
                card.position!.y = d.y;
                updateCard(id,card);
            }}
            onResize={(e, direction, ref, delta, position) => {
                // todo: write to store
                console.log("resize:", direction, ref, delta, position);
                setDimensions({
                    width: parseFloat(ref.style.width),
                    height: parseFloat(ref.style.height),
                    ...position,
                });
                card.size!.width = dimensions.width;
                card.size!.height = dimensions.height;
                updateCard(id,card);
            }}
            className={"rnddemo"}
            resizeGrid={[100,100]}
            dragGrid={[100,100]}
        >
            <LexicalCard props={{id:card.id, key:card.key, content:"", height:dimensions.height-90+"px"}} removeCard={removeCard}/>
        </Rnd>
    );
}

export default RNDComponent
