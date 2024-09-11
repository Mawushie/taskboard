import { Todo } from "./structure";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoItem({ todo, todos, setTodos }: Props) {
  const handleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-between items-center">
      <div> {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}</div>
      <div className="flex gap-3">
        {" "}
        <span>
          <CiEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline />
        </span>
        <span onClick={() => handleCompleted(todo.id)}>
          <IoCheckmark />
        </span>
      </div>
    </div>
  );
}
