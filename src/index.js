import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="hello">
        <h1>{_.join(["Hello", "Web"], " ")}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
