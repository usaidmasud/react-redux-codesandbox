import React from "react";
import Counter from "./containers/pages/Counter";
import "./styles.css";

const initialTodos = [
  { id: 1, name: "React" },
  { id: 2, name: "HTML" },
  { id: 3, name: "SCSS" },
  { id: 4, name: "Laravel" }
];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: initialTodos
    };
  }

  render() {
    return (
      <div className="App">
        <h1>REDUX</h1>
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
