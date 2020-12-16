import React, { useState } from "react";


const MovieInfo = (props) => {
  return (
    <div>
      <div class="song">
        <div class="song-info">
          <h3>{`{props.movie.title} - Official Trailer 2`}</h3>
        </div>
        <div class="video-grid-single-page-agileits">
          <div data-video="dLmKio67pVQ" id="video">
            {" "}
            <img src="images/5.jpg" alt="" class="img-responsive" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
