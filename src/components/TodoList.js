import React from "react";

export const TodoList = ({ todos, handleDelete }) => {
  return (
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
            <li key={index} style={{ color: todo.completed ? "green" : "red" }}>
              {todo.title}
              <button value={todo.id} onClick={handleDelete}>
                Delete
              </button>
              <button>Edit</button>
            </li>
          ))}
      </ol>
    </div>
  );
};
