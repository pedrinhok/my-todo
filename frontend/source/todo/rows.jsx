import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { index } from "./redux/actions"
import Row from "./row"

class Rows extends Component {

  componentWillMount() {
    const index = this.props.index
    index()
  }

  render() {
    return (this.props.rows || [])
      .map((todo, index) => (
        <Row key={index} todo={todo} />
      ))
  }

}

const mapState = state => ({
  rows: state.todo.rows
})

const mapDispatch = dispatch => bindActionCreators({ index }, dispatch)

export default connect(mapState, mapDispatch)(Rows)
