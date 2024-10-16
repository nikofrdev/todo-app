import {
  CheckCircleOutlineRounded,
  PanoramaFishEyeRounded,
} from "@mui/icons-material";
import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import type { Todo } from "../TodoList";

type TodoProps = {
  toggleTodo: (id: number) => void;
  todos: Todo[];
};

export default function TodoItem({ toggleTodo, todos }: TodoProps) {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} className={todo.completed ? "completed" : ""}>
          <Checkbox
            icon={<PanoramaFishEyeRounded fontSize="large" />}
            checkedIcon={<CheckCircleOutlineRounded fontSize="large" />}
            sx={{
              color: green[300],

              "&.Mui-checked": {
                color: green[300],
              },
            }}
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <ListItemText
            primary={todo.text}
            primaryTypographyProps={{
              style: {
                fontSize: "2rem",
                fontFamily: "sans-serif",
                fontStyle: "normal",
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
