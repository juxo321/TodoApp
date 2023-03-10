import React from "react"
import './TodoItem.css';
import {BsCheckCircle} from "react-icons/bs"
import { IoRemoveCircleOutline} from "react-icons/io5";

function TodoItem(props){

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BsCheckCircle/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <IoRemoveCircleOutline/>
            </span>
        </li>
    );
}

export {TodoItem}