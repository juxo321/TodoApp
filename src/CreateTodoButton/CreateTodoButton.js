import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msj) => {
        alert(msj)
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Hola a todos")}
        >
            +
        </button>
    );
}


export {CreateTodoButton};