import React, {createContext, Dispatch, ReactNode, SetStateAction, use, useState} from "react";
import {CardData} from "common";
interface ICardContext {
    cards: CardData[] | null,
    setCards: Dispatch<SetStateAction<CardData[] | null>>,
}

const CardContext = createContext<ICardContext>({
    cards: null,
    setCards: () => {
    },
});

export const CardContextProvider = ({ children  } : { children : ReactNode}) => {
    const [cards, setCards] = useState<CardData[] | null>(null);
    return (
        <CardContext value={{cards, setCards}}>
            {children}
        </CardContext>
    )
};

export const useCardContext = () => use(CardContext);
