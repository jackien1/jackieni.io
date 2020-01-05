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
              width: "100vw"
            }}
          >
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Dime 🏀
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A decentralized fantasy basketball game where you can
                  buy/sell/trade cartoon animals and play then in
                  tournament-style leagues.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="cyan">
                    Loom
                  </Tag>
                  <div style={{ marginTop: "0.5vw" }}>
                    <Tag style={{ fontSize: "0.6vw" }} color="purple">
                      MongoDB
                    </Tag>
                    <Tag style={{ fontSize: "0.6vw" }} color="volcano">
                      Firebase
                    </Tag>
                  </div>
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="#f50">
                    AngelHack 2018 LA Hackathon Grand Prize Winner
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="#2db7f5">
                    AngelHack HACKcelerator 2018 Finalist
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="#87d068">
                    500 Startups Award (at Global Demo Day 2018)
                  </Tag>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() => window.open("https://dimedrop.io", "_blank")}
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
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
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A platform that facilitates communications between
                  underemployed lawyers and underprivileged clients (Uber for
                  Lawyers).
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="cyan">
                    Loom
                  </Tag>
                </div>
                <div style={{ marginTop: "0.5vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="purple">
                    MongoDB
                  </Tag>
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="#108ee9">
                    Developerweek Hackathon 2019 Top 5 Team
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="brown">
                    2019 Congressional App Challenge Winner (District 48)
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
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
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
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
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A platform that allows students to join/make clubs,
                  communicate within those clubs, and transparently donate/use
                  funds for expenses.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="cyan">
                    Loom
                  </Tag>
                </div>
                <div style={{ marginTop: "0.5vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="gold">
                    TensorflowJS
                  </Tag>
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="#6a0dad">
                    HackSocal 2nd Place
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
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
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.7vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
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
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  An open database that allows users to add new memes and
                  classify memes using machine learning.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="volcano">
                    Firebase
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
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
              width: "100vw"
            }}
          >
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
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
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A parody of Flappy Bird that uses my face as the bird.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="red">
                    React Native
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
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
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Meme Trends 📈
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A mobile application that tracks the popularity of different
                  meme formats.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="red">
                    React Native
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open(
                        "https://expo.io/@eln1n0/memetrends",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Sage Exit 🤖
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  An SMS bot that helps students at Sage Hill obtain QR code
                  exit passes to safely exit campus faster.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.6vw" }} color="purple">
                    MongoDB
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    href="tel:916-438-9774"
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="geekblue">
                Event
              </Tag>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                SageHack 🖥️
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  Sage Hill School's First Hackathon. An event that hopes to
                  promote Computer Science and develop solutions to local issues
                  within Orange County.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() => window.open("https://sagehack.io", "_blank")}
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
              width: "100vw"
            }}
          >
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                ACEing Autism 🎾
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A website that helps participants register, donate, or learn
                  more about ACEing Autism (an organization that teaches tennis
                  to children with autism).
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="blue">
                    Next.js
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open("https://sageaceingautism.org", "_blank")
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Flare Magazine 🎀
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A website that showcases articles from Sage Hill School’s
                  Flare Magazine, which promotes female empowerment through
                  fashion.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="lime">
                    Wordpress
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open("http://shsflaremag.com", "_blank")
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Philanthropy Club 💵
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A website that details the exploits of Sage Hill's
                  Philanthropy Club (an organization that combats problems
                  within the community through donations and volunteering).
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="lime">
                    Wordpress
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open("http://shsphilanthropyclub.org", "_blank")
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="orange">
                Hardware
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Prom Robot 🐑
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A moving robot that looks like a Christmas present and opens
                  up to reveal a prom poster as well as a plush lamb. Used to
                  ask a friend out to prom dance.
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=QebG41_WthY",
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
              width: "100vw"
            }}
          >
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="orange">
                Hardware
              </Tag>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Screaming Roomba 😱
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A roomba that screams in agonizing pain whenever it bumps into
                  anything.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=RXyDz6TEi-E",
                        "_blank"
                      )
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div style={{ width: "20vw" }}>
              <Tag style={{ fontSize: "0.6vw" }} color="orange">
                Hardware
              </Tag>
              <Tag style={{ fontSize: "0.6vw" }} color="magenta">
                Software
              </Tag>
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Voice-Activated Drone 🎤
              </div>
              <Card
                style={{
                  backgroundColor: this.props.batmode ? "black" : "white"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  A drone that listen to voice commands from my laptop: go,
                  stop, up, down, right, and left.
                </div>
                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.6vw" }} color="green">
                    Node.js
                  </Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.6vw" }}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=f50FJ_ZXtGM",
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
