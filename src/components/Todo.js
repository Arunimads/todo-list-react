import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { Sort } from "./Sort";
const Todos = () => {
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
  };

  const handleDelete = (e) => {
    const todoDelete = e.target.value;
    const todoDeleted = todos.filter(
      (todo) => parseInt(todo.id) !== parseInt(todoDelete)
    );
    setTodos(todoDeleted);
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
      <Sort label="Ascending" id="Ascending" handleClick={handleOrderClick} />
      <Sort label="Descending" id="Descending" handleClick={handleOrderClick} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
};
export default Todos;
