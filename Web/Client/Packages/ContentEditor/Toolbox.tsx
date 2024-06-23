import * as React from "react";
import {Button} from "primereact/button";

type Props = {
    addCard: Function
}
const Toolbox = ({addCard = () => {}}: Props) =>{
    function onClick (){
        addCard();    
    }
    
    return (
        <div className={"sidebar"}>
            <Button onClick={onClick}>Add Box</Button>
        </div>
    );
}

export default Toolbox;
