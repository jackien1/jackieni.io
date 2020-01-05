import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Avatar } from "antd";

class LandingTwo extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: "50vh",
          backgroundColor: "#1890ff"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                color: "white",
                textAlign: "center"
              }}
            >
              Ni-hilism.
            </div>
            <div
              style={{
                display: "flex",
                width: "100vw",
                justifyContent: "space-around"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Avatar
                  icon="apple"
                  size={150}
                  style={{ backgroundColor: "white", color: "black" }}
                />
                <div
                  style={{
                    fontSize: "2vw",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Food
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Avatar
                  icon="smile"
                  size={150}
                  style={{ backgroundColor: "white", color: "black" }}
                />
                <div
                  style={{
                    fontSize: "2vw",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Humor
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Avatar
                  icon="control"
                  size={150}
                  style={{ backgroundColor: "white", color: "black" }}
                />
                <div
                  style={{
                    fontSize: "2vw",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Balance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { batmode } = state.theme;
  return { batmode };
};

export default connect(mapStateToProps)(LandingTwo);
