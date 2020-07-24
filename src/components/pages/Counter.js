import React from "react";
// import PropTypes from "prop-types";

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onClick = () => {
    this.setState(
      (state) => ({ counter: state.counter++ })
      // () => console.log(this.state) // Актуальное состояние через callback
    );
  };
  // static propTypes = {
  //   counter: PropTypes.number.isRequired,
  //   sayHi: PropTypes.func,
  // };

  // static defaultProps = {
  //   sayHi: () => console.log("Default sayHi"),
  // };

  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>{`Counter component. Counter value is: ${counter}`}</h1>
        <button onClick={this.onClick} className="btn btn-primary">
          +1
        </button>
      </>
    );
  }
}

//Для функциональных компонентов

// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   sayHi: PropTypes.func,
// };

//Для задания дефолтных значений, которые вы можете заыбть передать

// Counter.defaultProps = {
//   sayHi: () => console.log("Default sayHi"),
// };

export default Counter;
