import React, { useState, useMemo, memo } from "react";
import "../styles/App.css";

// React.memo component for individual todo
const TodoItem = memo(({ todo }) => <li>{todo}</li>);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  // useMemo to calculate total todos
  const totalTodos = useMemo(() => todos.length, [todos]);

  // Add default todo
  const addTodo = () => setTodos([...todos, "New todo"]);

  // Add custom todo if > 5 chars
  const addCustomTodo = () => {
    if (task.length > 5) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div id="main">
      <h2>Task Management</h2>

      {/* Counter */}
      <p>Count: {count}</p>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Add default todo */}
      <button id="addTodo" onClick={addTodo}>
        Add Todo
      </button>

      {/* Custom todo input */}
      <input
        id="taskInput"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="submitTask" onClick={addCustomTodo}>
        
         Submit
      </button>

      {/* useMemo display */}
      <h4>Total Todos: {totalTodos}</h4>

      {/* Todos list using React.memo */}
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
