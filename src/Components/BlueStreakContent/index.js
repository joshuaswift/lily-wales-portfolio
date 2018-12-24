import React, { Component } from "react";
import "./BlueStreakContent.css";
import bs1 from "./bs1.jpg";
import bs2 from "./bs2.jpg";
import bsgif1 from "./bs1.gif";
import bsgif2 from "./bs2.gif";
import bsgif3 from "./bs3.gif";

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
            <br /> Locks in WIllenhal.
          </p>
        </div>
        <img className="bs1" src={bs1} alt="Blue Streak" />
        <img className="bsgif1" src={bsgif1} alt="Blue Streak" />
        <img className="bsgif2" src={bsgif2} alt="Blue Streak" />
        <img className="bsgif3" src={bsgif3} alt="Blue Streak" />
        <img className="bs2" src={bs2} alt="Blue Streak" />
      </div>
    );
  }
}

export default BlueStreakContent;
