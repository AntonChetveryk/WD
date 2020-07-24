import React from "react";

export default (Component) =>
  class ButtonsHOC extends React.Component {
    state = {
      id: null,
      showId: false,
    };

    onClick = () => {
      this.setState((state) => ({ showId: !state.showId }));
    };

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => response.json())
        .then(({ id }) => this.setState({ id }));
    }

    render() {
      const { id, showId } = this.state;
      const { title } = this.props;
      return (
        <div>
          <Component
            id={id}
            showId={showId}
            onClick={this.onClick}
            title={title}
          />
        </div>
      );
    }
  };
