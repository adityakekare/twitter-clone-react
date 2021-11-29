import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import Practice from "./components/a7/Practice";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import Home from "./components/a7/Build/HomeScreen";
import Build from "./components/a7/Build"
import A6 from './components/a6';
import A7 from './components/a7';
import A8 from './components/a8';
import Components from './components';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact={true}>
            <Components />
          </Route>
          <Route path="/a6">
            <A6 />
          </Route>
          <Route path="/a7" >
            <A7 />
          </Route>
          <Route path="/a8" >
            <A8 />
          </Route>
        </div>
      </BrowserRouter>
  )
}

export default App;
