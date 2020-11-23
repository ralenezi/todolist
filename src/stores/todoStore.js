import { makeAutoObservable } from "mobx";
// import todos from "../todos";
import axios from "axios";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos");
      this.todos = response.data;
    } catch (error) {
      console.error("todoStore -> fetchTodos -> error", error);
    }
  };
}
const todoStore = new TodoStore();
todoStore.fetchTodos();
export default todoStore;
