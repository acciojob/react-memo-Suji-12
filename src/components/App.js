import React, { useState, useMemo, useCallback, memo } from "react";
import "../styles/App.css";

const TodoItem = memo(({ todo }) => <li>{todo}</li>);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const totalTodos = useMemo(() => todos.length, [todos]);
  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  }, []);

  const addCustomTodo = useCallback(() => {
    if (task.length > 5) {
      setTodos((prevTodos) => [...prevTodos, task]);
      setTask("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  }, [task]);

  return (
    <div id="main">
      <h2>Task Management</h2>

      {/* Counter */}
      <p>Count: {count}</p>
      <button id="increment" onClick={() => setCount((prev) => prev + 1)}>
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
        placeholder="Enter custom task"
      />
      <button id="submitTask" onClick={addCustomTodo}>
        Submit
      </button>

      {/* Total todos */}
      <h4>Total Todos: {totalTodos}</h4>

      {/* Todo list */}
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
