import React from 'react'

export const TodoHeaders = () => {
  return (
    <div>
        
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
    </div>
  )
}
