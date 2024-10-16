import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import type { Todo } from "../TodoList";
import Button from "./button/Button";

type FilterType = "all" | "active" | "completed";

type FooterProps = {
  clearCompleted: () => void;
  todos: Todo[];
  setFilter: Dispatch<SetStateAction<FilterType>>;
  filter: string;
};

export default function Footer({
  todos,
  setFilter,
  filter,
  clearCompleted,
}: FooterProps) {
  return (
    <footer className="todo-footer">
      <Typography variant="body1" padding={1} color="#777">
        {todos.filter((todo) => !todo.completed).length} items left
      </Typography>
      <div className="footer_center">
        <Button
          onClick={() => setFilter("all")}
          isActive={filter === "all"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("active")}
          isActive={filter === "active"}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter("completed")}
          isActive={filter === "completed"}
        >
          Completed
        </Button>
      </div>
      <Button onClick={clearCompleted} isActive={false}>Clear completed</Button>
    </footer>
  );
}
