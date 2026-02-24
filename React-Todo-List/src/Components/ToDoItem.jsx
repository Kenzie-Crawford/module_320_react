import { useState } from 'react'


function TodoItem({ todo, dispatch }) {

  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    dispatch({
      type: "SAVE_EDIT",
      payload: {
        id: todo.id,
        text: editText
      }
    });
  }

  return (

    <li>

      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({
            type: "TOGGLE_TODO",
            payload: todo.id
          })
        }
      />

      
      {todo.editing ? (

        <>
          <input
            value={editText}
            onChange={(e) =>
              setEditText(e.target.value)
            }
          />

          <button onClick={handleSave}>
            Save
          </button>
        </>

      ) : (

        <>
          <span>
            
            {todo.text}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "START_EDIT",
                payload: todo.id
              })
            }
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                payload: todo.id
              })
            }
          >
            Delete
          </button>
        </>

      )}

    </li>

  );

}

export default TodoItem;
    