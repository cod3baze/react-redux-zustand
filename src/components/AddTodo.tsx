import { FormEvent, useState } from "react";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    console.log(newTodo);
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Novo to-do"
        id="todo"
        name="todo"
      />
      <button type="submit">Adiconar</button>
    </form>
  );
}
