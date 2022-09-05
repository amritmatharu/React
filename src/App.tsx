import React, { useState } from "react";

import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    console.log("newTodo", newTodo);
    setTodos((preTodo) => {
      return preTodo.concat(newTodo);
    });
  };
  const deleteTodoItem = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodoHandler} />
      <Todos items={todos} deleteTodoItem={deleteTodoItem} />
    </div>
  );
}

export default App;
