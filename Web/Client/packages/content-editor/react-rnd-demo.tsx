import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Toolbox from "./toolbox";
import RNDComponent from "./rnd-component";

const ReactRndDemo = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    function removeCard(key : string){
        const filteredCards = cards.filter(x => x.key != key);
        setCards(filteredCards);
    }

    function addCard(){
        const newCard : CardData= {id: uuidv4(), key: uuidv4(), content:"", position: {x: 12, y:200}};
        setCards([...cards, newCard]);
    }
    
    function updateCards(key: string, updatedCard: CardData){
        setCards(cards.map((item: CardData) => item.key === key ? updatedCard : item));
    }
    
    return (
      <>
          <Toolbox addCard={addCard}/>
          <div>
              {cards.map((card : CardData) => (
                <RNDComponent key={card.key} id={card.key} card={card} removeCard={removeCard} setCards={setCards}/>
              ))}
          </div>
      </>  
    );
    
};

export default ReactRndDemo
