import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../../redux/actions/counterActions";

class Counter extends React.Component {
  render() {
    const { counter } = this.props.counter;
    const { increment, decrement } = this.props;
    return (
      <div>
        <h2>Counter Component</h2>
        <h3>{`Counter : ${counter}`}</h3>

        <div>
          <button onClick={increment}>INCREMENT</button>
          &nbsp;
          <button onClick={decrement}>DECREMENT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
