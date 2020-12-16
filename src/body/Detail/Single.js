import React, { useState, useEffect } from "react";
import MovieInfo from "body/Detail/MovieInfo";
import axios from "axios";
import { useParams } from "react-router-dom";

const Single = () => {
  const [movieChoosen, setMovieChoosen] = useState();
  let { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US`,
    })
      .then((res) => {
          setMovieChoosen(res);
          console.log(movieChoosen);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="single-page-agile-main">
        <div className="container">
          <div class="agileits-single-top">
            <ol class="breadcrumb">
              <li>
                <a href="">Home</a>
              </li>
              <li class="active">Single</li>
            </ol>
          </div>
          <div class="single-page-agile-info">
            <div class="show-top-grids-w3lagile">
              <div class="col-sm-8 single-left">
                <MovieInfo  />
                <div class="song-grid-right">
                  <div class="share">
                    <h5>Share this</h5>
                    <div class="single-agile-shar-buttons">
                      <ul>
                        <li>
                          <div
                            class="fb-like"
                            data-href="https://www.facebook.com/w3layouts"
                            data-layout="button_count"
                            data-action="like"
                            data-size="small"
                            data-show-faces="false"
                            data-share="false"
                          ></div>
                        </li>
                        <li>
                          <div
                            class="fb-share-button"
                            data-href="https://www.facebook.com/w3layouts"
                            data-layout="button_count"
                            data-size="small"
                            data-mobile-iframe="true"
                          >
                            <a
                              class="fb-xfbml-parse-ignore"
                              target="_blank"
                              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse"
                            >
                              Share
                            </a>
                          </div>
                        </li>
                        <li class="news-twitter">
                          <a
                            href="https://twitter.com/w3layouts"
                            class="twitter-follow-button"
                            data-show-count="false"
                          >
                            Follow @w3layouts
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/intent/tweet?screen_name=w3layouts"
                            class="twitter-mention-button"
                            data-show-count="false"
                          >
                            Tweet to @w3layouts
                          </a>
                        </li>
                        <li>
                          <div
                            id="___plusone_0"
                            style={{
                              position: "absolute",
                              width: "450px",
                              left: "-10000px",
                            }}
                          >
                            <iframe
                              ng-non-bindable=""
                              frameborder="0"
                              hspace="0"
                              marginheight="0"
                              marginwidth="0"
                              scrolling="no"
                              style={{
                                position: "absolute",
                                top: "-10000px",
                                width: "450px",
                                margin: "0px",
                                borderStyle: "none",
                              }}
                              tabindex="0"
                              vspace="0"
                              width="100%"
                              id="I0_1608093237712"
                              name="I0_1608093237712"
                              src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&amp;size=medium&amp;origin=file%3A%2F%2F&amp;url=file%3A%2F%2F%2FC%3A%2FUsers%2Ftrinhnhatminh%2FDownloads%2Fdata-html%2Fsingle.html%3F&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.xwJu9mnmcMg.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCPhziFv0ZUgwIM1cgUEDP9FSX8uzg%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1608093237712&amp;_gfid=I0_1608093237712&amp;parent=file%3A%2F%2F&amp;pfname=&amp;rpctoken=29455225"
                              data-gapiattached="true"
                            ></iframe>
                          </div>
                          <div
                            class="g-plusone"
                            data-size="medium"
                            data-gapiscan="true"
                            data-onload="true"
                            data-gapistub="true"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="clearfix"> </div>

                <div class="all-comments">
                  <div class="all-comments-info">
                    <a href="#">Comments</a>
                    <div class="agile-info-wthree-box">
                      <form>
                        <input type="text" placeholder="Name" required="" />
                        <input type="text" placeholder="Email" required="" />
                        <input type="text" placeholder="Phone" required="" />
                        <textarea placeholder="Message" required=""></textarea>
                        <input type="submit" value="SEND" />
                        <div class="clearfix"> </div>
                      </form>
                    </div>
                  </div>
                  <div class="media-grids">
                    <div class="media">
                      <h5>TOM BROWN</h5>
                      <div class="media-left">
                        <a href="#">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </a>
                      </div>
                      <div class="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<a href="#"> Admin </a>
                        </span>
                      </div>
                    </div>
                    <div class="media">
                      <h5>MARK JOHNSON</h5>
                      <div class="media-left">
                        <a href="#">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </a>
                      </div>
                      <div class="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<a href="#"> Admin </a>
                        </span>
                      </div>
                    </div>
                    <div class="media">
                      <h5>STEVEN SMITH</h5>
                      <div class="media-left">
                        <a href="#">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </a>
                      </div>
                      <div class="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<a href="#"> Admin </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 single-right">
                <h3>Up Next</h3>
                <div class="single-grid-right">
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m1.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m2.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views </p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m3.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m4.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m5.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/c5.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m6.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        By{" "}
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="single-right-grids">
                    <div class="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m15.jpg" alt="" />
                      </a>
                    </div>
                    <div class="col-md-8 single-right-grid-right">
                      <a href="single.html" class="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p class="author">
                        By{" "}
                        <a href="#" class="author">
                          John Maniya
                        </a>
                      </p>
                      <p class="views">2,114,200 views</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>

              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
