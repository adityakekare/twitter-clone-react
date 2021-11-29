import React from "react";
import {Link} from "react-router-dom"

const HelloWorld = () => {
    return(
    	<div>
        <h1>Hello World!</h1>
        <Link to="/a6/practice">
              Practice
          </Link> |
          <Link to="/a6/twitter">
              Build
          </Link>
 </div>
    )
};

export default HelloWorld;
