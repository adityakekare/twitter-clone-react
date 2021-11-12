import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList.js"
import TodoItem from "./Todo/TodoItem"
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
    return(
    	<div>
        <h1>Practice!</h1>
          <Link to="/a7/twitter/home">Build</Link>
           | 
          <Link to="/a7/twitter/explore">
              Explore
          </Link>
          <ReduxExamples/>
           </div>
    )
};

export default Practice;