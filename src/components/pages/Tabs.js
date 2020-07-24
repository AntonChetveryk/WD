import React from "react";
import Buttons from "../../utils/ButtonsConfig";

class Tabs extends React.Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    let activeTab = Number(e.target.getAttribute("data-name"));
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="my-2">
        {Buttons.map(({ title, dataName }) => (
          <button
            key={dataName}
            data-name={dataName}
            className="btn btn-primary mr-2"
            onClick={this.handleTab}
          >
            {title}
          </button>
        ))}
        <span style={{ color: "red" }}>
          {`Active tab is ${activeTab === 1 ? 1 : activeTab === 2 ? 2 : 3}`}
        </span>
      </div>
    );
  }
}

export default Tabs;
