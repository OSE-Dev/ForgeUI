import * as React from 'react';
import Toolbox from "./Toolbox";
import {
    ForwardedRef,
    forwardRef,
    ReactElement,
    ReactNode,
    useEffect,
    useImperativeHandle, useLayoutEffect,
    useRef,
    useState
} from "react";
import {Card} from "primereact/card";
import LexicalCard from "./LexicalCard";
import { v4 as uuidv4 } from 'uuid';
import {DndContext} from "@dnd-kit/core";
import {DroppableDemo} from "./DroppableDemo";
import {DraggableDemo} from "./DraggableDemo";
import {Coordinates} from "@dnd-kit/utilities";
import { Resizable } from 'react-resizable';

const DndkitPage = () =>{
    const [cards, setCards] = useState<cardContent[]>([]);


    function addCard(){
        let newCard : cardContent= {id: uuidv4(), key: uuidv4(), content:"", position: {x: 12, y:200}};
        setCards([...cards, newCard]);
    }

    function removeCard(id : string){
        const filteredCards = cards.filter(x => x.id != id);
        setCards([...filteredCards]);
    }

    function handleDragEnd(event: any) {
        const card = cards.find((x) => x.id === event.active.id);
        if(!card){
            return;
        }
        
        card.position.x += event.delta.x;
        card.position.y += event.delta.y;
        const _cards = cards.map((x) => {
            if (x.id === card.id) return card;
            return x;
        });
        
        setCards(_cards);
    }
    const [dimensions, setDimensions] = useState({width: 300, height: 300});
    const onResize = (event:any, {node, size, handle}:{node:any, size:any, handle:any})  => {
        setDimensions({width: size.width, height: size.height});
    };

    const [width, setWidth] = React.useState(200);

    const [height, setHeight] = React.useState(200);
    return (
        <>
            <Toolbox addCard={addCard}/>
            <Resizable
                width={width}
                height={height}
                onResize={(event:any, {element, size}:{element:any, size:any}) => {
                    setWidth(size.width);
                    setHeight(size.height);
                }}>
                <h1>Hello, world!</h1>
            </Resizable>
            <DndContext onDragEnd={handleDragEnd}>
                    {/*<DroppableDemo>*/}
                        {cards.map((card) => (
                            <DraggableDemo
                            styles={{
                                position: "absolute",
                                left: `${card.position.x}px`,
                                top: `${card.position.y}px`,
                            }}
                            key={card.id}
                            id={card.id}
                            content={card.id}
                            removeCard={removeCard}
                            />
                        ))}
                    {/*</DroppableDemo>*/}
            </DndContext>
        </>
    );
}


export default DndkitPage;
