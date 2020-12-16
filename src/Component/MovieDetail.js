import React, { Component } from "react";
import Navbar from "body/navbar/Navbar";
import IndexHeader from "header/IndexHeader";
import Single from "body/Detail/Single";

class MovieDetail extends Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <Navbar />
        <Single/>
      </div>
    );
  }
}

export default MovieDetail;
