import React, { Component } from "react";
import { Button, Icon, Tag, Card } from "antd";
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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "50vh",
            paddingBottom: "5vh",
            backgroundColor: this.props.batmode ? "black" : "white"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "80vw"
            }}
          >
            <div style={{ width: "30vw" }}>
              <Tag style={{ fontSize: "0.8vw" }} color="magenta">
                Featured
              </Tag>
              <div
                style={{
                  fontSize: "1.2vw",
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
                    fontSize: "1vw",
                    color: this.props.batmode ? "white" : "black"
                  }}
                >
                  I started working on this project during a hackathon in the
                  summer of 2018. It is a sports fantasy basketball game built
                  on the blockchain where users can trade, play, and develop
                  animated characters (non-fungible tokens). Currently, I
                  function as the CTO and continue to work on the back-end of
                  this application.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  <Tag style={{ fontSize: "0.8vw" }} color="green">
                    Node.js
                  </Tag>
                  <Tag style={{ fontSize: "0.8vw" }} color="orange">
                    Socket.io
                  </Tag>
                  <Tag style={{ fontSize: "0.8vw" }} color="blue">
                    Next.js
                  </Tag>
                  <Tag style={{ fontSize: "0.8vw" }} color="red">
                    Infura
                  </Tag>
                  <Tag style={{ fontSize: "0.8vw" }} color="cyan">
                    Loom
                  </Tag>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="link"
                    style={{ fontSize: "0.8vw" }}
                    onClick={() => window.open("https://dimedrop.io", "_blank")}
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>

            <img style={{ width: "50%" }} src={"/static/dimedrop.png"} />
          </div>
        </div>

        <div
          style={{
            backgroundColor: this.props.batmode ? "black" : "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "4vw",
              color: this.props.batmode ? "white" : "black"
            }}
          >
            Other Projects
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100vw",
              justifyContent: "space-evenly",
              marginTop: "2vw"
            }}
          >
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/aceingautism.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Sage ACEing Autism
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A website that showcases the club and allows participants to
                sign up.
              </div>
            </Card>
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/saddlepoint.jpeg" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                SaddlePoint
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A online platform that organizes clubs and allows members to
                communicate with and donate to all of their favorite activities.
              </div>
            </Card>
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/fairlegal.jpeg" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                FairLegal
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A decentralized application that facilitates communications
                between lawyers and clients.
              </div>
            </Card>
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/flaremag.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Sage Flare Magazine
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A website that displays articles written by members of the club.
              </div>
            </Card>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100vw",
              justifyContent: "space-evenly",
              marginTop: "2vw"
            }}
          >
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/philanthropyclub.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                Sage Philanthropy Club
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A website that illustrates the activities of the club.
              </div>
            </Card>
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/memedb.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                MemeDB
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                An application that uses machine learning to sort memes.
              </div>
            </Card>{" "}
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/wokefaucet.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                WokeFaucet
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A website that generates revenue through giving away free
                satoshi in exchange for ad viewers.
              </div>
            </Card>
            <Card
              style={{
                width: "20vw",
                padding: "1vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
              cover={<img src="/static/sageexit.png" />}
            >
              <div
                style={{
                  fontSize: "1vw",
                  fontWeight: "bold",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                SageExit
              </div>
              <div
                style={{
                  fontSize: "0.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                A SMS service that allows Sage students to leave school faster.
              </div>
            </Card>{" "}
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
