import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./components/structure";

function App() {
  //states
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  //function to add a task
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prev) => {
        return [...prev, { id: Date.now(), todo: todo, isDone: false }];
      });
      setTodo("");
    }
  };
  return (
    <div className="m-autoflex flex-col justify-center">
      <h2 className="text-lg mb-5">Task Board</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
