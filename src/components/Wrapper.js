import React, { Component } from "react";
import Info from "./Info";
import Tickets from "./Tickets";

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper ui grid centered">
        <div className="fourteen wide column">
          <div className="ui center aligned inverted segment">
            <Info />
            <Tickets />
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
