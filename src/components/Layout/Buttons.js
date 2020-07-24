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

const ButtonContainer = (props) => (
  <AppContext.Consumer>
    {(context) => {
      return (
        <Buttons user={context.user} testFunc={context.testFunc} {...props} />
      );
    }}
  </AppContext.Consumer>
);

ButtonContainer.displayName = "ButtonContainer";

export default ButtonContainer;
