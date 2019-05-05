import React from 'react';

class App extends React.Component {
  state = {
    newTodo: 'Todo 4',
    todos: [
      {
        name: 'Todo 1',
        done: false,
      },
      {
        name: 'Todo 2',
        done: false,
      },
      {
        name: 'Todo 3',
        done: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map((todo, index) => {
            let textDeco = 'none';
            if (todo.done === true) {
              textDeco = 'line-through';
            }
            return (
              <li
                key={index}
                style={{ textDecoration: textDeco }}
                onClick={() => {
                  // copier le tableau todos pour pouvoir le modifier
                  const nextTodos = [...this.state.todos];
                  // copier l'object todo dans nextTodos[index] pour pouvoir le modifier
                  nextTodos[index] = { ...nextTodos[index] };
                  // on peut maintenant modifier l'object car on l'a créer nous meme
                  nextTodos[index].done = !nextTodos[index].done;
                  this.setState({ todos: nextTodos });
                }}
              >
                {todo.name}
              </li>
            );
          })}
        </ul>
        <input
          value={this.state.newTodo}
          onChange={event => {
            this.setState({ newTodo: event.target.value });
          }}
        />
        <button
          onClick={() => {
            const nextTodos = [...this.state.todos];
            nextTodos.push({ name: this.state.newTodo, done: false });
            this.setState({ todos: nextTodos, newTodo: '' });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
