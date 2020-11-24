import React from "react";
import todoStore from "../../stores/todoStore";

const DeleteButton = ({ todoId }) => {
  return (
    <div>
      <button onClick={() => todoStore.deleteTodo(todoId)}>
        Delete Button
      </button>
    </div>
  );
};

export default DeleteButton;
