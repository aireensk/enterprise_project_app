import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo, toggleTodo } from "../api";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // LOAD TODOS
  const fetchTodos = async () => {
    try {
      const res = await getTodos();

      console.log("API RESPONSE:", res.data); // 🔍 debug

      // 🔥 handles BOTH cases (array OR paginated)
      setTodos(res.data.results || res.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setTodos([]); // 🛟 prevents crash
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ADD TODO
  const handleAdd = async () => {
    if (!input) return;

    try {
      await createTodo(input);
      setInput("");
      fetchTodos();
    } catch (err) {
      console.error("ADD ERROR:", err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  // TOGGLE COMPLETE
  const handleToggle = async (todo) => {
    try {
      await toggleTodo(todo);
      fetchTodos();
    } catch (err) {
      console.error("TOGGLE ERROR:", err);
    }
  };

  return (
    <div className="card">
      <h2>Todos</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} style={{ marginTop: "10px" }}>
              <span
                onClick={() => handleToggle(todo)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {todo.name}
              </span>

              <button onClick={() => handleDelete(todo.id)}>❌</button>
            </li>
          ))
        ) : (
          <p>No todos yet 💭</p>
        )}
      </ul>
    </div>
  );
}