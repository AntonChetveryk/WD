import React from "react";
import ButtonPrm from "./ButtonPrm";
import ButtonDrk from "./ButtonDrk";
import { AppContext } from "../App";

class Buttons extends React.Component {
  componentDidMount() {
    this.props.testFunc();
  }

  render() {
    return (
      <>
        <ButtonDrk title="Dark" />
        <ButtonPrm title="Primary" />
      </>
    );
  }
}

export default () => (
  <AppContext.Consumer>
    {(context) => {
      return <Buttons user={context.user} testFunc={context.testFunc} />;
    }}
  </AppContext.Consumer>
);
