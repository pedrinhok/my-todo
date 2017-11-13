import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./header"
import Todo from "../todo/todo"

export default props => (
  <div className="content">
    <Header />
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route path="/todo" component={Todo} />
    </Switch>
  </div>
)
