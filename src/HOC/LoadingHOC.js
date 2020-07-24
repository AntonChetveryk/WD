import React, { Component } from "react";
import "./LoadingHOC.css";

const isEmpty = (prop) =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const LoadingHOC = (loadingProp, text) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ? (
        <div className="loader" />
      ) : (
        <>
          <WrappedComponent {...this.props} />
          <span>{text}</span>
        </>
      );
    }
  };
};

export default LoadingHOC;
