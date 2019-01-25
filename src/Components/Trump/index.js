import React, { Component } from "react";
import "./trump.css";
import chin from "./chin.png";
import hair from "./hair.png";
import leftEar from "./leftEar.png";
import leftEye from "./leftEye.png";
import leftHand from "./leftHand.png";
import mouth from "./mouth.png";
import nose from "./nose.png";
import rightEye from "./rightEye.png";
import rightHand from "./rightHand.png";
import Sound from "react-sound";

const styles = {
  hair: {
    position: "absolute",
    top: "5%",
    height: "30%",
    left: "20%"
  }
};

const content = [
  { src: hair, name: "hair", audio: "/grab-em-by-the-pussy.wav" },
  { src: leftEar, name: "leftEar", audio: "/stupid.wav" },
  { src: leftEye, name: "leftEye", audio: "/china.wav" },
  { src: nose, name: "nose", audio: "/american-dream.wav" },
  { src: rightEye, name: "rightEye", audio: "/potatos.wav" },
  { src: mouth, name: "mouth", audio: "/money.wav" },
  { src: rightHand, name: "rightHand", audio: "/nice.wav" },
  { src: leftHand, name: "leftHand", audio: "/dying.wav" },
  { src: chin, name: "chin", audio: "/rich.wav" }
];

const convertNameToAlt = name => {
  let words = name.split(/(?=[A-Z])/);
  //uppercase first word
  return words.join(" ");
};

class Trump extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
  }

  handleClick = item => {
    this.setState(prevState => ({
      audio: item.audio,
      status: "PLAYING"
    }));
  };

  onEnter = name => {
    this.setState(prevState => ({
      active: name
    }));
  };

  onLeave = () => {
    this.setState(prevState => ({
      active: ""
    }));
  };

  render() {
    return (
      <div className="trump-wrapper">
        {content.map(item => (
          <img
            onMouseEnter={() => this.onEnter(item.name)}
            onMouseLeave={() => this.onLeave()}
            onClick={() => this.handleClick(item)}
            // className={this.state.active ? 'shake' : ''}
            className={`${item.name} ${
              this.state.active === item.name ? "shake" : ""
            }`}
            src={item.src}
            styles={styles[item.name]}
            alt={convertNameToAlt(item.name)}
          />
        ))}
        <Sound
          url={this.state.audio}
          playStatus={this.state.status}
          playFromPosition={0}
          onFinishedPlaying={() =>
            this.setState(prevState => ({ status: "STOPPED" }))
          }
        />
      </div>
    );
  }
}

export default Trump;
