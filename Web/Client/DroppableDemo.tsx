import React, {ReactElement} from 'react';
import {useDroppable} from '@dnd-kit/core';

export function DroppableDemo(props:any) {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : 'red',
        height:500,
        borderInlineColor: isOver ? 'green' :'red',
        borderStyle: 'solid'
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}
