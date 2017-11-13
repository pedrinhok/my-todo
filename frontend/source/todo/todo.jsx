import React, { Component } from "react"

import "./todo.css"
import Form from "./form"
import Rows from "./rows"

export default props => (
  <div className="container todo-container">
    <Form />
    <Rows />
  </div>
)
