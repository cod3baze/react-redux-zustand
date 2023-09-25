import { useAppSelector } from "../store";

export function TodoList() {
  const todos = useAppSelector((state) => state.todo);

  return (
    <ul>
      {todos.map((todo: string) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
