import { Todo } from "./structure";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoItem({ todo, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    //to focus the input box when the edit button is clicked
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex justify-between items-center"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      <div>
        {edit ? (
          <input
            ref={inputRef}
            type="text"
            className="border rounded"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>
      <div className="flex gap-3">
        <span
          onClick={() => {
            //only allow edit when the task is not completed
            if (!todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <CiEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline />
        </span>
        <span onClick={() => handleCompleted(todo.id)}>
          <IoCheckmark />
        </span>
      </div>
    </form>
  );
}
