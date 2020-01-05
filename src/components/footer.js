import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Avatar } from "antd";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "5vh",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: this.props.batmode ? "black" : "white"
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "1vw",
            fontWeight: "bold",
            color: this.props.batmode ? "white" : "black"
          }}
        >
          Not Real Copyright © 2019 Jackie Ni
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { batmode } = state.theme;
  return { batmode };
};

export default connect(mapStateToProps)(Footer);
