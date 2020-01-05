import React, { Component } from "react";
import { Icon, Button } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";
import LandingOne from "../src/components/landingOne";
import LandingTwo from "../src/components/landingTwo";
import dynamic from "next/dynamic";
import Particles from "react-particles-js";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../src/components/viewer"),
  { ssr: false }
);
import Footer from "../src/components/footer";

class Index extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "transparent"
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 30
              },
              size: {
                value: 5
              },
              color: {
                value: this.props.batmode ? "#ffffff" : "#2196f3"
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: this.props.batmode ? "#ffffff" : "#2196f3"
                }
              }
            }
          }}
          width="100vw"
          height="50vh"
          style={{
            display: "flex",
            position: "absolute",
            zIndex: -1,
            backgroundColor: this.props.batmode ? "black" : "white"
          }}
        />
        <LandingOne />
        {this.props.batmode ? <DynamicComponentWithNoSSR /> : <LandingTwo />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { batmode } = state.theme;
  return { batmode };
};

export default connect(mapStateToProps)(Index);
