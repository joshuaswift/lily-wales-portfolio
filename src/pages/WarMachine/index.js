import React, { Component } from "react";
import LilyWales from "./../../Components/LilyWales";
import WMContent from "./../../Components/WMContent";
import HomeButton from "./../../Components/HomeButton";
import BackToTop from "./../../Components/BackToTop";
import ProjectTitle from "./../../Components/ProjectTitle";
import MediaQuery from "react-responsive";

class WarMachine extends Component {
  render() {
    return (
      <div>
        <WMContent />
        <ProjectTitle title="War Machine" color="rgb(245, 27, 236)" />
        <LilyWales color={"rgb(0, 41, 255)"} />
        <MediaQuery minWidth={900}>
          <HomeButton top={"649%"} right={"5.5%"} paddingBottom={"17px"} />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={899} minWidth={600}>
          <HomeButton top={"441%"} right={"9%"} paddingBottom={"28px"} />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <HomeButton top={"665%"} right={"5.5%"} paddingBottom={"27px"} />{" "}
        </MediaQuery>
        <MediaQuery minWidth={900}>
          <BackToTop top={"645%"} right={"5.5%"} />{" "}
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={899}>
          <BackToTop top={"438%"} right={"9%"} />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <BackToTop top={"662%"} right={"5.5%"} />{" "}
        </MediaQuery>
      </div>
    );
  }
}

export default WarMachine;
