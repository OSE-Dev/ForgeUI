import {ComponentTypes} from "common";
import LexicalCard from "@open-source-education/gadget-lexical/lexicalCard";
import React from "react";
import {CardProps} from "common/types";

const useComponentFactory = () => {
    const createComponent = (card: CardProps) => {
        
        switch (card.type) {
            case ComponentTypes.Lexical:
                return <LexicalCard props={card} />;
            default:
                throw new Error(`Unsupported component type: ${card.type}`);
        }
        
    };
    
    return { createComponent };
}

export { useComponentFactory };
