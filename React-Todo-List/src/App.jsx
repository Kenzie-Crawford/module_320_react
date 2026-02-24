import { useReducer } from 'react';
import Heading from './Components/Heading';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import TodoList from './Components/ToDoList';


function reducer(state, action) {

  switch (action.type) {

    case "ADD_TODO":
      return [
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          editing: false
        },
        ...state
      ];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter(
        todo => todo.id !== action.payload
      );

    case "START_EDIT":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, editing: true }
          : todo
      );

    case "SAVE_EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              editing: false
            }
          : todo
      );

    default:
      return state;

  }

}


function App() {

  const [todos, dispatch] = useReducer(reducer, [

    {id: 1, text: 'Slay Dragon', completed: false, editing: false},

    {id: 2, text: 'Make Second Breakfast', completed: true, editing: false},

    {id: 3, text: 'Destroy the One Ring', completed: false, editing: false},

  ]);


  function addToDo(input) {

    dispatch({

      type: "ADD_TODO",

      payload: input

    });

  }


  return (

    <>

      <Heading />

      <ToDoForm addToDo={addToDo} />

      <TodoList

        todos={todos}

        dispatch={dispatch}

      />

    </>

  );

}


export default App;