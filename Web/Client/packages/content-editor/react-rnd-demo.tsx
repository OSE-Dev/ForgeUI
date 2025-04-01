import React, {use, useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Toolbox from "./toolbox";
import RNDComponent from "./rnd-component";
import useCardController from "./useCardController";
import {SomeContext, SomeContextProvider, useSomeContext} from "./SomeContext";
import {SomeComponent} from "./SomeComponent";
import {SelectButton} from "primereact/selectbutton";

const ReactRndDemo = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const {saveCards} = useCardController();
    useEffect(() => {
        loadCards();
    },[])

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("autosaving");
            saveCards(cards);
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, []);
    
    const loadCards = () => {
      const storedCards = localStorage.getItem("cards");
      if(!storedCards) return [];
      setCards(JSON.parse(storedCards));
    };
    
    function removeCard(key : string){
        const filteredCards = cards.filter(x => x.key != key);
        setCards(filteredCards);
    }

    function addCard(){
        const newCard : CardData= {id: uuidv4(), key: uuidv4(), content:"", position: {x: 12, y:200}, size: {height: 200, width: 400}};
        setCards([...cards, newCard]);
    }
    
    function updateCard(key: string, updatedCard: CardData){
        setCards(cards.map((item: CardData) => item.key === key ? updatedCard : item));
        saveCards(cards);
    }
    const {value, setValue} = useSomeContext();
    const [displayValue, setDisplayValue] = useState<number | null>();
    useEffect(() => {
        setDisplayValue(value);
    }, [value]);

    const [displayNumber, setDisplayNumber] = useState<number>(0);
    const timer = () => setDisplayNumber(displayNumber + 1);
    useEffect(() => {
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [displayNumber]);
    
    function handleOnClick() {
        const newValue = value ? value + 1 : 1;
        setValue(newValue);
    }
    
    return (
      <>
          <div style={{display:"flex",flexDirection: "column-reverse"}}>
            <Toolbox addCard={addCard}/>
              <SomeComponent/>
              <p>
              Value: {displayValue}
              </p>
              <SelectButton onClick={handleOnClick} style={{backgroundColor:"darkgoldenrod", height:"50px"}} >
                  local value: {value} 
                  display value: {displayValue}
              </SelectButton>
          </div>
          <div>
              {cards.map((card : CardData) => (
                <RNDComponent key={card.key} id={card.key} card={card} removeCard={removeCard} updateCard={updateCard}/>
              ))}
          </div>
      </>  
    );
    
};

export default ReactRndDemo
