import React, { Component } from "react";
import IndexHeader from "header/IndexHeader";
import Navbar from "body/navbar/Navbar";
import BannerInfo from "body/banner/BannerInfo";
import BannerBottom from "body/banner/BannerBottom";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <Navbar />
        <BannerInfo />
        <BannerBottom />
      </div>
    );
  }
}

export default Home;
