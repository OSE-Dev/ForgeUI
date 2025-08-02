import React, {useEffect, useState} from 'react';
import {Rnd} from "react-rnd";
import {CardData} from "common";
import {DEFAULT_HEIGHT, DEFAULT_WIDTH, DEFAULT_X, DEFAULT_Y} from "./constants";
import {useComponentFactory} from "../component-factory";

type DraggableCardProps = {
    id: string,
    card: CardData,
    removeCard: (key: string) => void,
    updateCard: (key: string, updatedCard: CardData) => void,
}

const DraggableCard = (props: DraggableCardProps) => {
    const { id, card, removeCard, updateCard} = props;
    const { createComponent } = useComponentFactory();
    
    const cardComponent = createComponent(card);
    
    const [dimensions, setDimensions] = useState({
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        x: DEFAULT_X,
        y: DEFAULT_Y,
    });
    
    useEffect(() => {
        if (card) {
            setDimensions({
                x: card?.position?.x ?? DEFAULT_X,
                y: card?.position?.y ?? DEFAULT_Y,
                width: card?.size?.width ?? DEFAULT_WIDTH,
                height: card?.size?.height ?? DEFAULT_HEIGHT
            });
        }
    },[card]);

    return (
        <Rnd
            size={{ width: dimensions.width, height: dimensions.height }}
            position={{ x: dimensions.x, y: dimensions.y }}
            onDragStop={(e, d) => {
                console.log("drag: id:", id, ", x: ", d.x, ", y: ", d.y, " width: ", dimensions.width, ", height: ", dimensions.height);
                setDimensions({ x: d.x, y: d.y, width: dimensions.width, height: dimensions.height});
                card.position!.x = d.x;
                card.position!.y = d.y;
                updateCard(id,card);
            }}
            onResize={(e, direction, ref, delta, position) => {
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
            resizeGrid={[100,100]} //todo: make this dynamic
            dragGrid={[100,100]}    // todo: make this dynamic
        >
            {cardComponent}
        </Rnd>
    );
}

export default DraggableCard
