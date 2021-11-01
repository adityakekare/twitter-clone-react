import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList.js"
import TodoItem from "./Todo/TodoItem"

const Practice = () => {
    return(
    	<div>
        <h1>Practice!</h1>
        <Link to="/a6/hello">
              Hello
          </Link> |
          <Link to="/a6/twitter/home">
              Home
          </Link> | 
          <Link to="/a6/twitter/explore">
              Explore
          </Link>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <TodoList/>
           </div>
    )
};

export default Practice;