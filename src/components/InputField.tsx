//props interface/type
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
export default function InputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <form className="flex" onSubmit={handleAdd}>
      <input
        className="border rounded h-10 w-full p-1"
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="border rounded p-1" type="submit">
        Add
      </button>
    </form>
  );
}
