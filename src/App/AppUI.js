import React from 'react';
import {TodoContext } from '../TodoContext/TodoContex';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';
import {CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import {Modal} from '../Modal/Modal'
import './App.css';
import { TaskList } from '../Modal/ContentLoader';


function AppUi(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
    return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/> 
        <TodoList>
        {error && <p>Desespérate, hubo un error...</p>} 
        {loading &&  <TaskList/>} 

        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>} 

        {searchedTodos.map(todo =>(
          <TodoItem
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
        </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}


      <CreateTodoButton
        setOpenModal = {setOpenModal}
        openModal = {openModal}
      />

      </ React.Fragment>
    );
}

export {AppUi};