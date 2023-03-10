import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton"
import { TodoContext } from "../TodoContext/TodoContex";


function Modal({children}){
    const {
        openModal,
        setOpenModal
      } = React.useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
            <CreateTodoButton
                setOpenModal = {setOpenModal}
                openModal = {openModal}
                className = "closeModal"
            />
        </div>,
        document.getElementById('modal')
    );
}


export { Modal }; 