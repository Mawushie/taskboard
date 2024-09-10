import { Todo } from "./structure";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  todo: Todo;
  //   todos: Todo[];
  //   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>{todo.todo}</div>
      <div className="flex gap-1">
        {" "}
        <span>
          <CiEdit />
        </span>
        <span>
          <MdDeleteOutline />
        </span>
        <span>
          <IoCheckmark />
        </span>
      </div>
    </div>
  );
}
