import * as React from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import { v4 as uuidv4 } from 'uuid';
import Toolbox from "./Toolbox";
import {useState} from "react";
import {Card} from "primereact/card";
import LexicalCard from "./LexicalCard";
const ResponsiveGridLayout= WidthProvider(Responsive);
import { useResizeDetector } from 'react-resize-detector';
const Page = () =>{
    const {width, height, ref} = useResizeDetector();
    const [cards, setCards] = useState<cardContent[]>([]);
    
    function addCard(){
        let newCard : cardContent= {id: uuidv4(), key: uuidv4(), content:"", position:{x:0,y:0}};
        setCards([...cards, newCard]);
    }
    
    function removeCard(id : string){
        const filteredCards = cards.filter(x => x.id != id);
        setCards([...filteredCards]);
    }
    
    return (
        <div className="grid-container" ref={ref}>
            <Toolbox addCard={addCard}/>
            <ResponsiveGridLayout
                className={"page layout"}
                cols={{lg:50, md: 30, sm: 20, xs: 5, xxs: 5}}
                rowHeight={100}
                allowOverlap={true}
                isDroppable={true}
                isResizable={true}
                // compactType={null}
                resizeHandles={['s', 'se']}
                onLayoutChange={(currentLayout, allLayouts) => console.log(allLayouts)}
                draggableHandle={".drag-handle"}
                >
                {cards.map((card) => (
                    <div className={"lexical-card-container"} data-grid={{x: 0, y: 0, w: 13, h: 1, minW: 4, minH: 2}} key={card.key} id={card.id}>
                        <LexicalCard  props={card} removeCard={removeCard}/>
                    </div>
                    )
                )
                }
            </ResponsiveGridLayout>
        </div>
    );
}

export default Page;
