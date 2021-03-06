import React, { Component } from "react";
import MediaQuery from "react-responsive";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import BackToTop from "./../../Components/BackToTop";
import HomeButton from "./../../Components/HomeButton";
import BlueStreakContent from "./../../Components/BlueStreakContent";

class BlueStreak extends Component {
  render() {
    return (
      <div>
        <BlueStreakContent />
        <MediaQuery minWidth={900}>
          <ProjectTitle title="Blue Streak" color="rgb(0, 33, 255)" />
        </MediaQuery>
        <MediaQuery minWidth={600} maxWidth={899}>
          <ProjectTitle
            title="Blue Streak"
            color="rgb(0, 33, 255)"
            top="65.5px"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={599}>
          <ProjectTitle
            title="Blue Streak"
            color="rgb(0, 33, 255)"
            top="37px"
          />
        </MediaQuery>
        <LilyWales color="rgb(38, 235, 34)" />
        <MediaQuery minWidth={900}>
          <BackToTop color="rgb(0, 33, 255)" top="888.5%" left="4.8%" />
        </MediaQuery>
        <MediaQuery maxWidth={899} minWidth={601}>
          <BackToTop color="rgb(0, 33, 255)" top="530.5%" left="4.8%" />
        </MediaQuery>
        <MediaQuery maxWidth={600} minWidth={321}>
          <BackToTop color="rgb(0, 33, 255)" top=" 453%" left="4.8%" />
        </MediaQuery>
        <MediaQuery maxWidth={320}>
          <BackToTop color="rgb(0, 33, 255)" top=" 469%" left="4.8%" />
        </MediaQuery>
        <MediaQuery minWidth={900}>
          <HomeButton
            color="rgb(0, 33, 255)"
            top="893%"
            left="4.8%"
            paddingBottom="50px"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={899} minWidth={601}>
          <HomeButton
            color="rgb(0, 33, 255)"
            top="534.5%"
            left="4.8%"
            paddingBottom="50px"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={600} minWidth={321}>
          <HomeButton
            color="rgb(0, 33, 255)"
            top=" 456%"
            left="4.8%"
            paddingBottom="50px"
          />{" "}
        </MediaQuery>
        <MediaQuery maxWidth={320}>
          <HomeButton
            color="rgb(0, 33, 255)"
            top=" 473%"
            left="4.8%"
            paddingBottom="50px"
          />{" "}
        </MediaQuery>
      </div>
    );
  }
}

export default BlueStreak;
