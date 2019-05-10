import React, { Component } from "react";
import LilyWales from "./../../Components/LilyWales";
import ProjectTitle from "./../../Components/ProjectTitle";
import ContactContent from "./../../Components/ContactContent";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <ContactContent />
          <ProjectTitle title="Contact" color="rgb(0,179,255)" />
          <LilyWales color="rgb(255,89,94)" />
        </div>
      </div>
    );
  }
}

export default Contact;
