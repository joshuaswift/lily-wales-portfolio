import React, { Component } from "react";
import { Keyframes, Frame } from "react-keyframes";
import MediaQuery from "react-responsive";
import "./BlueStreakContent.css";
import bs1 from "./bs1.jpg";
import gifOne1 from "./gifOne1.jpg";
import gifOne2 from "./gifOne2.jpg";
import gifOne3 from "./gifOne3.jpg";
import gifOne4 from "./gifOne4.jpg";
import gifOne5 from "./gifOne5.jpg";
import gifOne6 from "./gifOne6.jpg";
import gifTwo1 from "./gifTwo1.jpg";
import gifTwo2 from "./gifTwo2.jpg";
import gifTwo3 from "./gifTwo3.jpg";
import gifTwo4 from "./gifTwo4.jpg";
import gifTwo5 from "./gifTwo5.jpg";
import gifTwo6 from "./gifTwo6.jpg";
import gifThree1 from "./gifThree1.jpg";
import gifThree2 from "./gifThree2.jpg";
import gifThree3 from "./gifThree3.jpg";
import gifThree4 from "./gifThree4.jpg";
import gifThree5 from "./gifThree5.jpg";
import gifThree6 from "./gifThree6.jpg";
import bs2 from "./bs2.jpg";
import bs3 from "./bs3.jpg";
import bs4 from "./bs4.jpg";
import bs5 from "./bs5.jpg";

const styles = {
  gif1: {
    position: "absolute",
    height: "87%",
    top: "75%",
    right: "5%"
  },
  gif1Ipad: {
    position: "absolute",
    height: "60%",
    top: "76%",
    right: "5%"
  },
  gif1PhoneL: {
    position: "absolute",
    height: "55%",
    top: "72%",
    right: "5%"
  },
  gif1PhoneS: {
    position: "absolute",
    height: "55%",
    top: "80%",
    right: "5%"
  },

  gif2: {
    position: "absolute",
    height: "87%",
    top: "127%",
    left: "5%"
  },

  gif2Ipad: {
    position: "absolute",
    height: "60%",
    top: "105%",
    left: "5%"
  },

  gif2PhoneL: {
    position: "absolute",
    height: "55%",
    top: "101%",
    left: "5%"
  },
  gif2PhoneS: {
    position: "absolute",
    height: "55%",
    top: "106%",
    left: "5%"
  },
  gif3: {
    position: "absolute",
    height: "87%",
    top: "180%",
    right: "5%"
  },
  gif3Ipad: {
    position: "absolute",
    height: "60%",
    top: "134%",
    right: "5%"
  },
  gif3PhoneL: {
    position: "absolute",
    height: "55%",
    top: "130%",
    right: "5%"
  },
  gif3PhoneS: {
    position: "absolute",
    height: "55%",
    top: "134%",
    right: "5%"
  }
};

class BlueStreakContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="BSTextWrapper">
          <p className="BSText">
            Blue Streak was a<br /> ballistic missile
            <br /> developed by Britain
            <br /> in the late 1950s. Due
            <br /> to spiralling costs
            <br /> and incompetency
            <br /> within the efficiency
            <br /> of the system, it was
            <br /> cancelled in 1960. The
            <br /> starting point for the
            <br /> work, which was
            <br /> produced under The
            <br /> New Art Gallery
            <br /> Walsall residency,
            <br /> came from the key
            <br /> used in the firing
            <br /> mechansim for Blue
            <br /> Streak, which was
            <br /> produced only 4
            <br /> miles away from the
            <br /> gallery at Century
            <br /> Locks in WIllenhall.
          </p>
        </div>
        <img className="bs1" src={bs1} alt="Blue Streak" />
        <MediaQuery minWidth={900}>
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif1}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img src={gifOne1} alt="Blue Streak" style={styles.gif1} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne2} alt="Blue Streak" style={styles.gif1} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne3} alt="Blue Streak" style={styles.gif1} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne4} alt="Blue Streak" style={styles.gif1} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne5} alt="Blue Streak" style={styles.gif1} />
              </Frame>
              <Frame duration={2500}>
                <img src={gifOne6} alt="Blue Streak" style={styles.gif1} />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif2}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img src={gifTwo1} alt="Blue Streak" style={styles.gif2} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo2} alt="Blue Streak" style={styles.gif2} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo3} alt="Blue Streak" style={styles.gif2} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo4} alt="Blue Streak" style={styles.gif2} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo5} alt="Blue Streak" style={styles.gif2} />
              </Frame>
              <Frame duration={2500}>
                <img src={gifTwo6} alt="Blue Streak" style={styles.gif2} />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif3}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img src={gifThree1} alt="Blue Streak" style={styles.gif3} />
              </Frame>
              <Frame duration={250}>
                <img src={gifThree2} alt="Blue Streak" style={styles.gif3} />
              </Frame>
              <Frame duration={250}>
                <img src={gifThree3} alt="Blue Streak" style={styles.gif3} />
              </Frame>
              <Frame duration={250}>
                <img src={gifThree4} alt="Blue Streak" style={styles.gif3} />
              </Frame>
              <Frame duration={250}>
                <img src={gifThree5} alt="Blue Streak" style={styles.gif3} />
              </Frame>
              <Frame duration={2500}>
                <img src={gifThree6} alt="Blue Streak" style={styles.gif3} />
              </Frame>
            </Keyframes>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={899} minWidth={601}>
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif1Ipad}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img src={gifOne1} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne2} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne3} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne4} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifOne5} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
              <Frame duration={2500}>
                <img src={gifOne6} alt="Blue Streak" style={styles.gif1Ipad} />
              </Frame>
            </Keyframes>
          </div>
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif2Ipad}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img src={gifTwo1} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo2} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo3} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo4} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
              <Frame duration={250}>
                <img src={gifTwo5} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
              <Frame duration={2500}>
                <img src={gifTwo6} alt="Blue Streak" style={styles.gif2Ipad} />
              </Frame>
            </Keyframes>
          </div>{" "}
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif3Ipad}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifThree1}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree2}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree3}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree4}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree5}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifThree6}
                  alt="Blue Streak"
                  style={styles.gif3Ipad}
                />
              </Frame>
            </Keyframes>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={600} minWidth={321}>
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif1PhoneL}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifOne1}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne2}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne3}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne4}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne5}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifOne6}
                  alt="Blue Streak"
                  style={styles.gif1PhoneL}
                />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif2PhoneL}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifTwo1}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo2}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo3}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo4}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo5}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifTwo6}
                  alt="Blue Streak"
                  style={styles.gif2PhoneL}
                />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif3PhoneL}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifThree1}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree2}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree3}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree4}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree5}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifThree6}
                  alt="Blue Streak"
                  style={styles.gif3PhoneL}
                />
              </Frame>
            </Keyframes>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={320}>
          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif1PhoneS}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifOne1}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne2}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne3}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne4}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifOne5}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifOne6}
                  alt="Blue Streak"
                  style={styles.gif1PhoneS}
                />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif2PhoneS}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifTwo1}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo2}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo3}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo4}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifTwo5}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifTwo6}
                  alt="Blue Streak"
                  style={styles.gif2PhoneS}
                />
              </Frame>
            </Keyframes>
          </div>

          <div>
            <Keyframes
              component="pre"
              delay={300}
              loop={true}
              style={styles.gif3PhoneS}
            >
              <Frame alt="Blue Streak" duration={250}>
                <img
                  src={gifThree1}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree2}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree3}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree4}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
              <Frame duration={250}>
                <img
                  src={gifThree5}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
              <Frame duration={2500}>
                <img
                  src={gifThree6}
                  alt="Blue Streak"
                  style={styles.gif3PhoneS}
                />
              </Frame>
            </Keyframes>
          </div>
        </MediaQuery>

        <img className="bs2" src={bs2} alt="Blue Streak" />
        <img className="bs3" src={bs3} alt="Blue Streak" />
        <img className="bs4" src={bs4} alt="Blue Streak" />
        <img className="bs5" src={bs5} alt="Blue Streak" />
      </div>
    );
  }
}

export default BlueStreakContent;
