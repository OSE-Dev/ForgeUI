import * as React from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import { v4 as uuidv4 } from 'uuid';
import Toolbox from "./Toolbox";
import {useState} from "react";
import {Card} from "primereact/card";
import LexicalCard from "./LexicalCard";
const ResponsiveGridLayout= WidthProvider(Responsive);

const Page = () =>{
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
        { i: "b", x: 1, y: 0, w: 3, h: 2 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    
    
    const [cards, setCards] = useState<cardContent[]>([]);
    
    function addCard(){
        let newCard : cardContent= {id: uuidv4(), content:""};
        setCards([...cards, newCard]);
    }
    
    return (
        <div className="grid-container">
            <Toolbox addCard={addCard}/>
            <ResponsiveGridLayout
                className={"page layout"}
                layouts={{lg:layout}}
                cols={{lg:50, md: 30, sm: 20, xs: 5, xxs: 5}}
                rowHeight={30}
                width={1000}
                allowOverlap={true}
                isDroppable={true}
                isResizable={true}
                compactType={null}
                resizeHandles={['s', 'se']}
                onLayoutChange={(currentLayout, allLayouts) => console.log(allLayouts)}
                >
                {/*{cards.map((card) => <Card key={card.id} id={card.id} content={card.content} />)}*/}
                {cards.map((card) => (<div key={card.id} id={card.id}><LexicalCard key={card.id} id={card.id} content={card.content}/></div>))}
                {/*{cards.map((card) => <div className={"lexical-card"} key={card.id} id={card.id} content={card.content}/>)}*/}
            </ResponsiveGridLayout>
        </div>
    );
}

export default Page;
