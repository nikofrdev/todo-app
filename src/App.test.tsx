import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("добавление новой задачи", () => {
  render(<App />);

  const input = screen.getByRole("textbox", {
    name: /What needs to be done?/i,
  });
  fireEvent.change(input, { target: { value: "Тестовое задание" } });
  fireEvent.submit(input);
  expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
});

test("фильтрация по активным задачам", () => {
  render(<App />);

  const input = screen.getByRole("textbox", {
    name: /What needs to be done?/i,
  });
  fireEvent.change(input, { target: { value: "Активная задача" } });
  fireEvent.submit(input);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const activeFilter = screen.getByText("Active");
  fireEvent.click(activeFilter);

  expect(screen.queryByText("Активная задача")).not.toBeInTheDocument();
});

test("очистка завершённых задач", () => {
  render(<App />);

  const input = screen.getByRole("textbox", {
    name: /What needs to be done?/i,
  });
  fireEvent.change(input, { target: { value: "Завершённая задача" } });
  fireEvent.submit(input);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const clearButton = screen.getByText(/Clear completed/i);
  fireEvent.click(clearButton);

  expect(screen.queryByText("Завершённая задача")).not.toBeInTheDocument();
});

test("попытка добавить пустую задачу", () => {
  render(<App />);

  const input = screen.getByRole("textbox", {
    name: /What needs to be done?/i,
  });
  fireEvent.change(input, { target: { value: "" } });
  const initialTodoCount = screen.queryAllByRole("listitem").length;
  fireEvent.submit(input);

  const updatedTodoCount = screen.queryAllByRole("listitem").length;
  expect(updatedTodoCount).toBe(initialTodoCount);
});
