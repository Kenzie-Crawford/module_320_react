import {useState, useEffect} from 'react'
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

function TodoList({todos, dispatch}) {

  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </ul>
  );

}

export default TodoList;