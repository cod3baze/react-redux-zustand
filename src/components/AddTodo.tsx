import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { add } from "../store";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(
      add({
        newTodo,
      })
    );
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
