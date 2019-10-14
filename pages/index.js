import React, { Component } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";

class Index extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: this.props.batmode ? "black" : "white"
        }}
      >
        <Navigation />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: "95vh",
            paddingBottom: "5vh"
          }}
        >
          <img
            style={{ width: "30%" }}
            src={`/static/${this.props.batmode ? "batFace.png" : "face.png"}`}
          />
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
                  fontSize: "6vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Greetings.
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "1.2vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                {`${this.props.batmode ? "I'm Batman!" : "Soy Jackie."}`}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2vw",
                width: "100%"
              }}
            >
              <Icon
                onClick={() =>
                  window.open("https://github.com/jackien1", "_blank")
                }
                type="github"
                style={{
                  fontSize: "2vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              />
              <Icon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jackie-ni-99b07016a/",
                    "_blank"
                  )
                }
                type="linkedin"
                style={{
                  fontSize: "2vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              />
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

export default connect(mapStateToProps)(Index);
