import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const fetchTodos = async () => {
    const fetchedTodos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tododata = fetchedTodos.data;
    console.log(tododata);
    setTodos(tododata);
    setAllTodos(tododata);
    setPendingTodos(tododata.filter((todo) => !todo.completed));
    setCompletedTodos(tododata.filter((todo) => todo.completed));
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const filterName = e.target.value;
    switch (filterName) {
      case "Pending":
        setTodos(pendingTodos);
        break;
      case "Completed":
        setTodos(completedTodos);
        break;
      default:
        setTodos(allTodos);
        break;
    }
  };

  const handleOrderClick = (e) => {
                // Pro level code 
    // let order;
    // if (id === "Ascending") {
    //   order = [...todos].sort((a, b) => a.title.localeCompare(b.title));
    // } else {
    //   order = [...todos].sort((a, b) => b.title.localeCompare(a.title));
    // }
    // setTodos(order);

    const id = e.target.id;
    if (id === "Ascending") {
      const ascend = [...todos].sort((a, b) => a.title.localeCompare(b.title));
      setTodos(ascend);
    } else {
      const decend = [...todos].sort((a, b) => b.title.localeCompare(a.title));
      setTodos(decend);
    }

    // console.log(id);
  };
  

  return (
    <>
      <h1>Todo-List</h1>
      <h6>
        All todos-{allTodos.length} Pending-{pendingTodos.length} Completed-
        {completedTodos.length}
      </h6>
      <select onChange={handleOnChange}>
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <input
        type="radio"
        name="order"
        id="Ascending"
        onClick={handleOrderClick}
      />
      <label for="Ascending">Ascending</label>
      <input
        type="radio"
        name="order"
        id="Descending"
        onClick={handleOrderClick}
      />
      <label for="Descending">Descending</label>
      <div
        style={{
          height: "400px",
          border: "1px  solid green",
          overflowX: "scroll",
        }}
      >
        <ol>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <li
                key={index}
                style={{ color: todo.completed ? "green" : "red" }}
              >
                {todo.title}
                <button>Delete</button>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
};
export default App;
