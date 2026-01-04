import React, { useState, useMemo, memo } from "react";
import "./styles.css";

const SkillsList = memo(({ skills }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };
  const addSkill = () => {
    if (input.length > 5) {
      setSkills([...skills, input]);
      setInput("");
    }
  };
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(1000000000), []);

  return (
    <div>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>

      <hr />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>

      <hr />

      <h2>React.memo</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>

      <SkillsList skills={skills} />
    </div>
  );
}

export default App;
