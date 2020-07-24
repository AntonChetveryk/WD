import React from "react";
import LoadingHOC from "../../HOC/LoadingHOC";

class AppComponentUI extends React.Component {
  render() {
    return <div>{this.props.data.title}</div>;
  }
}

const AppComponent = LoadingHOC("data", "text")(AppComponentUI);

class HOC extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => this.updateState(data));
  }

  updateState = (data) => {
    setTimeout(() => {
      this.setState({ data });
    }, 3000);
  };

  render() {
    const { data } = this.state;
    return (
      <div style={{ position: "relative" }}>
        <AppComponent data={data} />
      </div>
    );
  }
}

export default HOC;
