import React from "react"
import { TodoContext } from "../TodoContext/TodoContex";
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input
            className="TodoSearch" 
            placeholder="Introduce el TODO"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch}