import React from "react";
import ButtonsHOC from "../../HOC/ButtonsHOC";

class ButtonPrm extends React.Component {
  render() {
    const { showId, id, onClick, title } = this.props;
    return (
      <>
        <button className="btn btn-primary" onClick={onClick}>
          {title}
        </button>
        <h2 className="text-center">{showId ? id : null}</h2>
      </>
    );
  }
}

export default ButtonsHOC(ButtonPrm);
