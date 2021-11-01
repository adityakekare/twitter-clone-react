import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import Practice from "./components/a6/Practice";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen"
import Home from "./components/a6/Build/HomeScreen"
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
      <Practice />
    </Route>
    <Route path={["/a6/twitter/explore"]} exact={true}>
      <ExploreScreen />
       </Route>

       <Route path={["/a6/twitter/home"]} exact={true}>
      <Home />
       </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
