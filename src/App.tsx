import { Container } from "@mui/material";
import "./App.scss";
import TodoList from "./components/TodoList";



function App() {
  return <Container className="todo-app" maxWidth="sm">
    <TodoList />
  </Container>;
}

export default App;
