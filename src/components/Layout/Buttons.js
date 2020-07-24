import React from "react";
import ButtonPrm from "./ButtonPrm";
import ButtonDrk from "./ButtonDrk";
import { AppContext } from "../App";

class Buttons extends React.Component {
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
      console.log(context);
      return <Buttons user={context} />;
    }}
  </AppContext.Consumer>
);
