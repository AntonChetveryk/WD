import React from "react";
// import Counter from "./Counter";
// import PropTypes from "prop-types";

const names = ["Anton", "John", "Leo"];

class Form extends React.Component {
  //   static propTypes = {};
  //   static defaultProps = {};

  state = {
    inputText: "",
    name: "",
    RefText: "",
    showData: {
      showText: "",
      showName: "",
    },
  };

  handleShow = (e) => {
    const { inputText, name } = this.state;
    e.preventDefault();
    if (inputText && name) {
      this.setState({
        inputText: "",
        name: "",
        showData: {
          showText: inputText,
          showName: name,
        },
      });
    } else alert("fill al the inputs");
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  RefonChange = () => {
    let value = this.inputRef.current.value;
    this.setState({ RefText: value });
  };

  setName = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  inputRef = React.createRef();

  render() {
    const {
      inputText,
      name,
      RefText,
      showData: { showText, showName },
    } = this.state;
    return (
      <>
        <h2>Form</h2>
        <form>
          <label>
            Input
            <input
              type="text"
              className="ml-2"
              id="inputText"
              value={inputText}
              name="inputText"
              onChange={this.onChange}
              // ref={(node) => (this.el = node)} старый метод
              ref={this.inputRef}
            />
          </label>

          <label>
            RefInput
            <input
              type="text"
              className="ml-2"
              id="RefText"
              value={RefText}
              onChange={this.RefonChange}
              // ref={(node) => (this.el = node)} старый метод
              ref={this.inputRef}
            />
          </label>
          <label>
            Select name:
            <select className="ml-2" value={name} onChange={this.setName}>
              <option>Choose the name</option>
              {names.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <button
            style={{ display: "block" }}
            className="btn btn-primary"
            onClick={this.handleShow}
          >
            Show
          </button>
          <h3>{showText && showName ? `${showText} and ${showName}` : null}</h3>
        </form>
      </>
    );
  }
}

export default Form;
