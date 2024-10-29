import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const fetchedTodos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const tododata = fetchedTodos.data;
    console.log(tododata);
    setTodos(tododata);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Pending") {
      const pendingTodos = todos.filter((todo) => todo.completed === false);
      console.log(pendingTodos);
      setTodos(pendingTodos)
    }
    else{
      const completedTodos= todos.filter((todo)=>todo.completed===true);
      setTodos(completedTodos)
    }
  };

  return (
    <>
      <h1>Todo-List</h1>
      <select onChange={handleOnChange}>
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <ol>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <li key={index} style={{ color: todo.completed ? "green" : "red" }}>
              {todo.title}
            </li>
          ))}
      </ol>
    </>
  );
};
export default App;
