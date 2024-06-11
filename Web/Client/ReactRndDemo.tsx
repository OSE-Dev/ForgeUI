import React, {useState} from 'react';
import {Rnd} from "react-rnd";
import LexicalCard from "./LexicalCard";
import {v4 as uuidv4} from "uuid";
import Toolbox from "./Toolbox";
import RNDComponent from "./RNDComponent";
const ReactRndDemo = () => {
    const [cards, setCards] = useState<cardContent[]>([]);



    function addCard(){
        let newCard : cardContent= {id: uuidv4(), key: uuidv4(), content:"", position: {x: 12, y:200}};
        setCards([...cards, newCard]);
    }
    
    return (
      <>
          <Toolbox addCard={addCard}/>
          <div>
              {cards.map((card) => (
                    <RNDComponent card={card}/>
              ))}
          </div>
      </>  
    );
    
};

export default ReactRndDemo
