import React, { Component } from "react";
import { Icon, Card, Tag, Timeline } from "antd";
import { connect } from "react-redux";
import Navigation from "../src/components/navigation";

class Memes extends Component {
  render() {
    const { Meta } = Card;

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
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              height: "95vh",
              paddingBottom: "5vh"
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                color: this.props.batmode ? "white" : "black"
              }}
            >
              Featured Works
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Card
                  style={{
                    width: "18vw",
                    marginRight: "1vw",
                    padding: "1vw",
                    backgroundColor: this.props.batmode ? "black" : "white"
                  }}
                  cover={<img alt="example" src="/static/EstateMeme.png" />}
                >
                  <div
                    style={{
                      fontSize: "1.2vw",
                      fontWeight: "bold",
                      color: this.props.batmode ? "white" : "black"
                    }}
                  >
                    Estate Meme
                  </div>
                  <Tag style={{ fontSize: "0.8vw" }} color="magenta">
                    Student Council Election
                  </Tag>
                </Card>
                <Card
                  style={{
                    width: "18vw",
                    marginRight: "1vw",
                    padding: "1vw",
                    backgroundColor: this.props.batmode ? "black" : "white"
                  }}
                  cover={<img alt="example" src="/static/Boat.png" />}
                >
                  <div
                    style={{
                      fontSize: "1.2vw",
                      fontWeight: "bold",
                      color: this.props.batmode ? "white" : "black"
                    }}
                  >
                    Boat Meme
                  </div>
                  <Tag style={{ fontSize: "0.8vw" }} color="magenta">
                    Student Council Election
                  </Tag>
                </Card>
                <Card
                  style={{
                    width: "18vw",
                    padding: "1vw",
                    backgroundColor: this.props.batmode ? "black" : "white"
                  }}
                  cover={<img alt="example" src="/static/1percent.png" />}
                >
                  <div
                    style={{
                      fontSize: "1.2vw",
                      fontWeight: "bold",
                      color: this.props.batmode ? "white" : "black"
                    }}
                  >
                    Bernie Meme
                  </div>
                  <Tag style={{ fontSize: "0.8vw" }} color="blue">
                    Pep Rally
                  </Tag>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100vh",
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
            Meme Club
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100vw",
              justifyContent: "space-evenly"
            }}
          >
            <img style={{ width: "20vw" }} src={"/static/image1.png"} />
            <Card
              style={{
                width: "30vw",
                backgroundColor: this.props.batmode ? "black" : "white"
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.8vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                What is it?
              </div>
              <div
                style={{
                  fontSize: "1vw",
                  color: this.props.batmode ? "white" : "black"
                }}
              >
                I started Meme Club along with some of my good friends at my
                high school because I saw the need for humor on campus and the
                potential of memes as the next medium of communication.
                Officially, we are a society of woke individuals who analyze
                contemporary meme trends and encourage the spread of meme
                culture. So far, we have performed at town meetings with skits
                such as the Columbus Diss Track, led discussions about
                controversial topics (Harambe), and presented the evolution of
                memes at Sage Hill's Annual Multicultural Symposium.
              </div>
            </Card>
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
