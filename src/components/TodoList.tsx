import { Todo } from "./structure";
import TodoItem from "./TodoItem";

//interface props
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="flex flex-col  p-4">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
}
