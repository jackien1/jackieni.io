import React, { Component } from "react";
import { Button, Icon, Tag, Card, Divider } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";

class Projects extends Component {
  render() {
    const { Meta } = Card;

    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: this.props.batmode ? "black" : "white"
          }}
        >
          <div
            style={{
              marginTop: "4vw",
              fontWeight: "bold",
              fontSize: "2vw",
              color: this.props.batmode ? "white" : "black"
            }}
          >
            Masterpieces
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw"
            }}
          >
            <div style={{ width: "25vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                DimeDrop.io 🏀
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.9vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A decentralized fantasy basketball game where you can
                  buy/sell/trade cartoon animals and play then in
                  tournament-style leagues.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="orange">
                    Socket.io
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="cyan">
                    Loom
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="purple">
                    MongoDB
                  </Tag>
                  <div style={{ marginTop: "0.5vw" }}>
                    <Tag style={{ fontSize: "0.7vw" }} color="volcano">
                      Firebase
                    </Tag>
                  </div>
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag color="#f50">
                    AngelHack 2018 LA Hackathon Grand Prize Winner
                  </Tag>
                  <Tag color="#2db7f5">
                    AngelHack HACKcelerator 2018 Finalist
                  </Tag>
                  <Tag color="#87d068">
                    500 Startups Award (at Global Demo Day 2018)
                  </Tag>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.7vw" }}
                    onClick={() => window.open("https://dimedrop.io", "_blank")}
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <img
              width="45%"
              src={
                "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/dime.png"
              }
            />
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw"
            }}
          >
            <img
              width="40%"
              src={
                "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/fairlegal.png"
              }
            />

            <div style={{ width: "25vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                FairLegal ⚖️
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.9vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A platform that facilitates communications between
                  underemployed lawyers and underprivileged clients (Uber for
                  Lawyers).
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="orange">
                    Socket.io
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="cyan">
                    Loom
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="purple">
                    MongoDB
                  </Tag>
                </div>
                <div style={{ marginTop: "0.5vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="lime">
                    Clarifai
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="geekblue">
                    Agora.io
                  </Tag>
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag color="#108ee9">
                    Developerweek Hackathon 2019 Top 5 Team
                  </Tag>
                  <Tag color="brown">
                    2019 Congressional App Challenge Winner (District 48)
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.7vw" }}
                    onClick={() =>
                      window.open(
                        "https://fairlegal-react.herokuapp.com",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw"
            }}
          >
            <div style={{ width: "25vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                SaddlePoint 🎒
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.9vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A decentralized platform that allows students to join/make
                  clubs, communicate within those clubs, donate funds, and
                  transparently use those funds for necessary expenses.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="orange">
                    Socket.io
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="cyan">
                    Loom
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="gold">
                    TensorflowJS
                  </Tag>
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag color="#6a0dad">HackSocal 2nd Place</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.7vw" }}
                    onClick={() =>
                      window.open(
                        "https://saddle-point.herokuapp.com",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <img
              width="35%"
              src={
                "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/saddlepoint.png"
              }
            />
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw"
            }}
          >
            <img
              width="30%"
              src={
                "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/memedb.png"
              }
            />
            <div style={{ width: "25vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                MemeDB 🤠
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "1vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  An application that uses machine learning to classify memes.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.7vw" }} color="volcano">
                    Firebase
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.7vw" }}
                    onClick={() =>
                      window.open(
                        "https://meme-database.jackie-ni.now.sh",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60vw"
            }}
          >
            <div style={{ width: "25vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1.1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Flappy Jackie 🐔
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.9vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A better version of Flappy Bird.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.7vw" }} color="red">
                    React Native
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.7vw" }}
                    onClick={() =>
                      window.open(
                        "https://jackien1.github.io/flappyjackie/",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>

            <img
              width="15%"
              src={
                "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/flappyjackie.png"
              }
            />
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

export default connect(mapStateToProps)(Projects);
