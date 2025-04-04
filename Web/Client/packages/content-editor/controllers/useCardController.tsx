import { CardData } from "common";

const useCardController = () =>{
    const saveCards = (cards: CardData[] | null) => {
        localStorage.setItem("cards", JSON.stringify(cards));
    };
    
    return {
        saveCards,
    }
};

export default useCardController;
