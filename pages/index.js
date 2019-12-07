import React, { Component } from "react";
import { Icon, Button } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";
import LandingOne from "../src/components/landingOne";
import LandingTwo from "../src/components/landingTwo";
import dynamic from "next/dynamic";
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
          backgroundColor: this.props.batmode ? "black" : "white"
        }}
      >
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
