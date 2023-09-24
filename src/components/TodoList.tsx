import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((state) => state.todo);

  console.log(todos);

  return (
    <ul>
      {todos.map((todo: string) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
