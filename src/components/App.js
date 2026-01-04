import React, { useState, useMemo, memo } from "react";
import "../styles/App.css";

const TodoItem = memo(({ todo }) => <li>{todo}</li>);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const totalTodos = useMemo(() => todos.length, [todos]);
  const addTodo = () => setTodos([...todos, "New todo"]);

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

      {/* Default todo */}
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

      {/* Total todos */}
      <h4>Total Todos: {totalTodos}</h4>

      {/* Todos list */}
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
