import "./css/bootstrap.css";
import "./css/styles.css";
import "./css/contactstyle.css";
import "./css/faqstyle.css";
import "./css/flexslider.css";
import "./css/font-awesome.min.css";
import "./css/googlefont.css";
import "./css/jquery.slidey.min.css";
import "./css/medile.css";
import "./css/news.css";
import "./css/owl.carousel.css";
import "./css/popuo-box.css";
import "./css/single.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from 'Component/Home'
import MovieDetail from 'Component/MovieDetail';


function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/detail/:movieId`}>
            <MovieDetail />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route>  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
