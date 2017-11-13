import React from "react"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import "modules/bootstrap/dist/css/bootstrap.min.css"
import "../assets/font-awesome-4.7.0/css/font-awesome.min.css"
import "./main.css"

import Content from "./content"
import reducers from "./redux/reducers"

const store = applyMiddleware(thunk)(createStore)(reducers)

export default props => (
  <Provider store={store}>
    <HashRouter>
      <Content />
    </HashRouter>
  </Provider>
)
