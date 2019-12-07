import React, { Component } from "react";
import "@google/model-viewer";

class Viewer extends Component {
  render() {
    return (
      <model-viewer
        src="../../static/out.glb"
        style={{ height: "50vh", width: "100vw" }}
        background-color="black"
        auto-rotate
        auto-rotate-delay={0}
      ></model-viewer>
    );
  }
}

export default Viewer;
