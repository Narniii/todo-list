import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, deleteTodo, toggleComplete } from './redux/todoSlice';

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={handleAddTodo} className='add-button'>add</button>
        <ul>

          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button onClick={() => handleToggleComplete(todo.id)}>
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button>edit</button>
              <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
