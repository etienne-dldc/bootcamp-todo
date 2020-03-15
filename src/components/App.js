import React from "react";

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      name: "Todo 1",
      done: false
    },
    {
      name: "Todo 2",
      done: false
    },
    {
      name: "Todo 3",
      done: false
    }
  ]);
  const [newTodo, setNewTodo] = React.useState("Todo 4");

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => {
          let textDeco = "none";
          if (todo.done === true) {
            textDeco = "line-through";
          }
          return (
            <li
              key={index}
              style={{ textDecoration: textDeco }}
              onClick={() => {
                // copier le tableau todos pour pouvoir le modifier
                const nextTodos = [...todos];
                // copier l'object todo dans nextTodos[index] pour pouvoir le modifier
                nextTodos[index] = { ...nextTodos[index] };
                // on peut maintenant modifier l'object car on l'a créer nous meme
                nextTodos[index].done = !nextTodos[index].done;
                setTodos(nextTodos);
              }}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
      <input
        value={newTodo}
        onChange={event => {
          setNewTodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const nextTodos = [...todos];
          nextTodos.push({ name: newTodo, done: false });
          setTodos(nextTodos);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
