import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [entry, setEntry] = useState(""); // ce state controlera l'input d'entrée d'un nouvel element

  const [todolist, setTodolist] = useState([
    { name: "faire les courses", done: false },
    { name: "faires exercices react", done: false },
  ]);
  // nous déclarons un state qui est un tableau d'objet. La clé/valeur name représente l'item en lui meme, et la clé/valeur done nous servira plus tard pour déterminer si il est dans l'état "fait" ou "pas fait", ce qui nous permettra de gérer du CSS pour barrer les items "faits". mais c'est pour la suite de l'exercice.
  // on initialise ce state-tableau avec deux entrees, simplement pour y voir plus clair tant qu'on code. lorsqu'on aura terminé, on pourra supprimer cette initialisation et initaliser le state par tableau vide []

  return (
    <div className="App">
      <span>TODOLIST TITRE</span>

      {/* on déroule les items du tableau dans un .map comme vu dans l'exercice avec les bags - ne pas oublier le return dans un .map lorsqu'on déroule les elements d'un tableau */}
      {todolist.map((item) => { // ici item représente un des objets du tableau, par exemple {name: "faire les courses", done: false}
        return <div className="item"> {item.name} </div>; // on récupere donc son nom avec la clé name
        /
      })}

      {/* Ici on controle l'input d'entree d'un nouvel element comme vu dans le cours sur les inputs */}
      <input
        value={entry}
        type="text"
        placeholder="entrez un nouvel item"
        onChange={(event) => {
          setEntry(event.target.value);
        }}
      />
      <button

      // ON CLICK, on veut ajouter un element à notre todolist, donc on veut ajouter un element dans notre tableau, donc on veut faire un PUSH dans notre state-tableau.
        onClick={() => {
          // Sauf qu'on ne peut pas toucher au state en lui meme sans passer par setTodolist. On doit donc DECOUPER CE PUSH EN 3 ETAPES

          // 1 - Faire une copie du tableau. On utilise le [...] spread operator pour faire une REELLE COPIE du tableau.
          const todolistCopy = [...todolist];
          // 2 - Faire le push dans la copie
          todolistCopy.push({ name: entry, done: false });
          // 3 - Maintenant on peut utiliser setTodolist en y plaçant notre copie de tableau pushée d'un nvel élement 
          setTodolist(todolistCopy);
          setEntry("");  // au passage de ce onlick, rien à voir avec les étapes précédentes, nous vidons notre champ d'entree
        }}
      >
        Ajouter le nouvel item
      </button>
    </div>
  );
}

export default App;
