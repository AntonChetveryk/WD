import React from "react";
import { Link } from "react-router-dom";
import AppContextHOC from "../../HOC/AppContextHOC";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <nav className="my-4">
          <Link to="/" className="mr-2">
            Counter
          </Link>
          <Link to="/tabs" className="mr-2">
            Tabs
          </Link>
          <Link to="/form" className="mr-2">
            Form
          </Link>
          <Link to="/hoc" className="mr-2">
            HOC
          </Link>
          <Link to="/buttons-hoc" className="mr-2">
            ButtonsHOC
          </Link>
          <Link to="/react-hoc" className="mr-2">
            ReactHOC
          </Link>
          <Link to="/todo-app" className="mr-2">
            TodoApp
          </Link>
        </nav>
        {children}
      </div>
    );
  }
}

export default AppContextHOC(Layout);
