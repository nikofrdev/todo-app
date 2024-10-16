import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Input from "./Ui/Input";
import TodoItem from "./Ui/TodoItem";
import Footer from "./Ui/Footer";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <Typography variant="h1" className="title">
        todos
      </Typography>
      <Box bgcolor={"white"}>
        <Input addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
        <TodoItem toggleTodo={toggleTodo} todos={filteredTodos} />
        <Footer
          clearCompleted={clearCompleted}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
      </Box>
    </>
  );
}
