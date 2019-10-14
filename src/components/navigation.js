import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { changeBatmode } from "../redux/actions";
import Router from "next/router";
import { Button } from "antd";

class Navigation extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "5vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1vw"
        }}
      >
        <Button
          type="link"
          style={{
            fontSize: "1vw",
            color: this.props.batmode ? "white" : "black"
          }}
          onClick={() => Router.push("/")}
        >
          jackieni.io
        </Button>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Button
            type="link"
            style={{
              fontSize: "1vw",
              color: this.props.batmode ? "white" : "black"
            }}
            onClick={() => Router.push("/memes")}
          >
            Memes
          </Button>

          <Button
            type="link"
            style={{
              fontSize: "1vw",
              color: this.props.batmode ? "white" : "black"
            }}
            onClick={() => Router.push("/projects")}
          >
            Projects
          </Button>

          <Button
            type="link"
            style={{
              fontSize: "1vw",
              color: this.props.batmode ? "white" : "black"
            }}
          >
            Thoughts
          </Button>

          <Button
            style={{
              backgroundColor: this.props.batmode ? "white" : "black",
              color: "white",
              display: "flex",
              alignItems: "center",
              borderColor: "transparent"
            }}
            onClick={() => {
              if (!this.props.batmode) {
                this.props.changeBatmode(true);
              } else {
                this.props.changeBatmode(false);
              }
            }}
          >
            <img
              src={`/static/${
                this.props.batmode ? "batarang" : "whiteBatarang"
              }.png`}
              style={{
                width: "1.6vw"
              }}
            />
            <div
              style={{
                fontSize: "1vw",
                marginLeft: "0.4vw",
                color: this.props.batmode ? "black" : "white"
              }}
            >
              Batmode
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { batmode } = state.theme;
  return { batmode };
};

export default connect(
  mapStateToProps,
  { changeBatmode }
)(Navigation);
