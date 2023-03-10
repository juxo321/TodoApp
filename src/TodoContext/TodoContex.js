import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error
      }= useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo => {
          if(todo.text.toLowerCase().includes(searchValue.toLowerCase())){
            return todo;
          }
        })
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed : false,
          text,
        })
        saveTodos(newTodos);
      };
    
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};