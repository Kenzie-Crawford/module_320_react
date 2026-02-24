import { useState } from 'react'



function ToDoForm({addToDo}) {
    const [{input, setInput}] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addToDo(input);
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            />

            <button type="submit">Add To-Do</button>


        </form>
    )
}
export default ToDoForm;