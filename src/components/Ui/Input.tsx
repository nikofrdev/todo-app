import React, { Dispatch, SetStateAction } from 'react';
import { TextField } from "@mui/material";

type InputProps = {
    addTodo: (e: React.FormEvent) => void;
    newTodo: string;
    setNewTodo: Dispatch<SetStateAction<string>>;
  };

export default function Input({ addTodo, newTodo, setNewTodo }: InputProps) {
  return (
    <form onSubmit={addTodo}>
      <TextField
        sx={{ fontSize: 14}}
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        label="What needs to be done?"
        variant="outlined"
        className="todo-input"
      />
    </form>
  );
}
