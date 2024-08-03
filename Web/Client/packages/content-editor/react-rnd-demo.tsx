import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Toolbox from "./toolbox";
import RNDComponent from "./rnd-component";

const ReactRndDemo = () => {
    const [cards, setCards] = useState<cardContent[]>([]);
    function removeCard(key : string){
        const filteredCards = cards.filter(x => x.key != key);
        setCards(filteredCards);
    }

    function addCard(){
        let newCard : cardContent= {id: uuidv4(), key: uuidv4(), content:"", position: {x: 12, y:200}};
        setCards([...cards, newCard]);
    }
    return (
      <>
          <Toolbox addCard={addCard}/>
          <div>
              {cards.map((card) => (
                <RNDComponent key={card.key} card={card} removeCard={removeCard}/>
              ))}
          </div>
      </>  
    );
    
};

export default ReactRndDemo
