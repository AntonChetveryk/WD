import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import Counter from "./pages/Counter";
import Tabs from "./pages/Tabs";
import Form from "./pages/Form";
import HOC from "./pages/HOC";
import Buttons from "./Layout/Buttons";
import ReactHOC from "./pages/ReactHOC/ReactHOC";

export const AppContext = React.createContext();

class App extends React.Component {
  state = {
    user: "anton",
  };

  testFunc = () => console.log("test");

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, testFunc: this.testFunc }}>
        <Router>
          <Switch>
            <Layout>
              <Route exact path="/" component={Counter} />
              <Route path="/Tabs" component={Tabs} />
              <Route path="/Form" component={Form} />
              <Route path="/hoc" component={HOC} />
              <Route path="/buttons-hoc" component={Buttons} />
              <Route path="/react-hoc" component={ReactHOC} />
            </Layout>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
