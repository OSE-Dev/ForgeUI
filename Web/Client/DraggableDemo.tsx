import React, {ReactElement, useState} from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'
import LexicalCard from "./LexicalCard";
import { Resizable } from 'react-resizable';
export function DraggableDemo({id, content, styles, removeCard}: {
    id: string,
    content: any,
    styles: any,
    removeCard: (id: string) => void
}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id 
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
    
    // const style = {transform: CSS.Translate.toString(transform)}
    const [dimensions, setDimensions] = useState({width: 300, height: 300});
    const onResize = (event:any, {node, size, handle}:{node:any, size:any, handle:any})  => {
        setDimensions({width: size.width, height: size.height});
    };
    
    return (
        /*<Resizable height={dimensions.height} width={dimensions.width} onResize={onResize}>        */
        <div ref={setNodeRef} style={{...style, ...styles}}>
            <button   {...listeners} {...attributes}>drag handle 1</button>
            <LexicalCard props={{id:id, key:id, content:""}} removeCard={removeCard}/>
        </div>
        /*</Resizable>*/
    );
}
