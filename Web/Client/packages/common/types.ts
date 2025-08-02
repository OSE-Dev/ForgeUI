import {ComponentTypes} from "./componentTypes";

export type CardData = {
    id:string,
    key:string,
    type: ComponentTypes,
    content:string, //todo: content needs to be extracted and support other types
    position?: {
        x: number,
        y: number
    },
    size?:{
        width:number,
        height:number
    }
}

export type CardProps  = {
    removeCard?: (key:string) =>void;
} & CardData
