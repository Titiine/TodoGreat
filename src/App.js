import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [entry, setEntry] = useState("");
  const [todolist, setTodolist] = useState([
    { name: "faire les courses", done: false },
    { name: "faires exercices react", done: false },
  ]);

  return (
    <div className="App">
      <span>TODOLIST TITRE</span>
      {todolist.map((item) => {
        return <div className="item"> {item.name} </div>;
      })}

      <input
        value={entry}
        type="text"
        placeholder="entrez un nouvel item"
        onChange={(event) => {
          setEntry(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // faire une copie du tableau state
          const todolistCopy = [...todolist];
          todolistCopy.push({ name: entry, done: false });
          setTodolist(todolistCopy);
          setEntry("");
        }}
      >
        Ajouter le nouvel item
      </button>
    </div>
  );
}

export default App;
