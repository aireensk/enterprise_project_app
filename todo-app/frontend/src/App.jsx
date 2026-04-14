import { useState } from "react";
import Auth from "./components/Auth";
import TodoApp from "./components/TodoApp";
import "./index.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="app">
      <div className="navbar">My Todo App</div>
      {!token ? <Auth setToken={setToken} /> : <TodoApp />}
    </div>
  );
}

export default App;