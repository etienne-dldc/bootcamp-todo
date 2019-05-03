import React from 'react';

class App extends React.Component {
  state = {
    newTodo: 'Todo 4',
    todos: ['Todo 1', 'Todo 2', 'Todo 3'],
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
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
            nextTodos.push(this.state.newTodo);
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
