import React from "react";
import Counter from "./containers/pages/Counter";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>REDUX</h1>
          <hr />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
