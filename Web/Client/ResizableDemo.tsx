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

const ResizableDemo = () =>{
    
    const [dimensions, setDimensions] = useState({width: 300, height: 300});
    const onResize = (event:any, {node, size, handle}:{node:any, size:any, handle:any})  => {
        setDimensions({width: size.width, height: size.height});
    };

    const [width, setWidth] = React.useState(200);

    const [height, setHeight] = React.useState(200);
    return (
        <>
            <Resizable
                width={width}
                height={height}
                onResize={(event:any, {element, size}:{element:any, size:any}) => {
                    setWidth(size.width);
                    setHeight(size.height);
                }}>
                <h1>Hello, world!</h1>
            </Resizable>

        </>
    );
}


export default ResizableDemo;
