import React from "react";
import DeleteButton from "./buttons/DeleteButton";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <li>
        Name: {todo.name} - Status: {todo.status} - Priority: {todo.priority}
      </li>
      <DeleteButton todoId={todo.id} />
    </div>
  );
};

export default TodoItem;
