import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import users from "./users";
// import {appStyle, lainStyle} from "./component/style/";

class App extends Component {
  state = {
    nama: "",
    fullName: "",
    shortName: "",
    todos: [],
    todo: "",
    page: 0,
    edit: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePagination = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  };

  handleInput = e => {
    if (e.key === `Enter` && this.state.todo) {
      this.setState(state => {
        return {
          todos: [
            ...state.todos,
            { id: Date.now(), name: state.todo, status: false, edit: false }
          ],
          todo: ""
        };
      });
    }
  };

  handleEdit = item => {
      console.log(item)
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === item.id ? { ...todo, ...item } : todo
      )
    }));
  };

  render() {
    return (
      <div className="items">
        <div className="items-column">
          <input
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            onKeyPress={this.handleInput}
          />
          <div>
            {this.state.todos.map(todo => (
              <div
                key={todo.id}
                className="items-content"
                onDoubleClick={() =>
                  this.handleEdit({ id: todo.id, edit: !todo.edit })
                }
              >
                {todo.edit ? (
                  <input
                    autoFocus
                    onBlur={() =>
                      this.handleEdit({ id: todo.id, edit: !todo.edit })
                    }
                  />
                ) : (
                  <div>{todo.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
