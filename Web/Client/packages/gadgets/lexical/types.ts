type CardData = {
    id:string,
    key:string,
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
