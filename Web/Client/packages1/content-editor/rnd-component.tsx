import React, {useState} from 'react';
import {Rnd} from "react-rnd";
import LexicalCard from "../Gadgets/Lexical/LexicalCard";

const RNDComponent = ({card}:{card:cardContent}) => {
    const [dimensions, setDimensions] = useState({
        width: 200,
        height: 200,
        x: 10,
        y: 10,
    });
    
    function removeCard(id : string){
        const [cards, setCards] = useState<cardContent[]>([]);
        const filteredCards = cards.filter(x => x.id != id);
        setCards([...filteredCards]);
    }
    
    
    return (
    <>
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
            <LexicalCard props={{id:card.id, key:card.id, content:"", height:dimensions.height-90+"px"}} removeCard={removeCard}/>

        </Rnd>
    </>
    );
}

export default RNDComponent
