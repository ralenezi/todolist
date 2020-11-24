import React from "react";
import todoStore from "../stores/todoStore";
import TodoItem from "./TodoItem.jsx";
import { observer } from "mobx-react";

const TodoList = () => {
  const todoList = todoStore.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return <div>{todoList}</div>;
};

export default observer(TodoList);
