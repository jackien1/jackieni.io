import React, { Component } from "react";
import { Icon, Card, Tag, Timeline } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

const Photo = styled.img`
  width: 250px;
  height: 322.5px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
`;

const photos = [
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/One.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Two.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Three.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Four.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Five.jpg"
];

const photosAlt = [
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Six.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Seven.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Eight.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Nine.jpg",
  "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Ten.jpg"
];

class Memes extends Component {
  render() {
    const { Meta } = Card;

    /*      "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/10.jpg",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/11.jpg",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/15.jpg",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/3.png",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/5.jpg",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/heart-revised.png",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/meme2.png",
          "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Regular+Meme+1.png",
        */

    return (
      <div>
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
              width: "100vw"
            }}
          >
            <div style={{ display: "column" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "4vw",
                  color: this.props.batmode ? "white" : "black",
                  textAlign: "center",
                  marginBottom: "2vw"
                }}
              >
                Gallery
              </div>

              <div style={{ width: "90vw" }}>
                <Marquee velocity={25}>
                  {times(5, Number).map(id => {
                    return (
                      <Photo
                        src={photos[id]}
                        style={{
                          marginLeft: "80px"
                        }}
                      />
                    );
                  })}
                </Marquee>
              </div>

              <div style={{ height: "2vw" }} />

              <div style={{ width: "90vw" }}>
                <Marquee velocity={25}>
                  {times(5, Number).map(id => {
                    return (
                      <Photo
                        src={photosAlt[id]}
                        style={{
                          marginLeft: "7px",
                          marginRight: "80px"
                        }}
                      />
                    );
                  })}
                </Marquee>
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

export default connect(mapStateToProps)(Memes);
