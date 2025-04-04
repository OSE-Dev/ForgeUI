import React, {useCallback, useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
import Toolbox from "./toolbox";
import RNDComponent from "./rnd-component";
import useCardController from "./controllers/useCardController";
import { CardData } from "common";
import {useCardContext} from "./CardContext";
import {DEFAULT_HEIGHT, DEFAULT_WIDTH, DEFAULT_X, DEFAULT_Y} from "./constants";

const ReactRndDemo = () => {
    const { cards, setCards } = useCardContext();
    const {saveCards} = useCardController();
    
    const loadCards = useCallback(() => {
      const storedCards = localStorage.getItem("cards");
      if(!storedCards) return [];
      setCards(JSON.parse(storedCards));
    }, [setCards]);
    
    function removeCard(key : string){
        const filteredCards = cards?.filter(x => x.key != key) ?? null;
        setCards(filteredCards);
    }

    function addCard(){
        const newCard : CardData= {id: uuidv4(), key: uuidv4(), content:"", position: {x: DEFAULT_X, y:DEFAULT_Y}, size: {height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH}};
        setCards([...(cards ?? []), newCard]);
    }
    
    function updateCard(key: string, updatedCard: CardData){
        setCards(cards?.map((item: CardData) => item.key === key ? updatedCard : item) ?? null);
        saveCards(cards);
    }

    useEffect(() => {
        loadCards();
    },[loadCards]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("autosaving");
            saveCards(cards);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [cards, saveCards]);
    
    return (
      <>
        <Toolbox addCard={addCard}/>
        {cards?.map((card : CardData) => (
            <RNDComponent key={card.key} id={card.key} card={card} removeCard={removeCard} updateCard={updateCard}/>
        ))}
      </>  
    );
    
};

export default ReactRndDemo
