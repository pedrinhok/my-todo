import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { create } from "./redux/actions"

class Form extends Component {

  submit(event) {
    if (event.which === 13 && event.target.value) {
      const create = this.props.create
      create({
        name: event.target.value,
        done: false
      })
      event.target.value = ""
    }
  }

  render() {
    return (
      <div className="row todo-row">
        <div className="col-sm">
          <input type="text" placeholder="What needs to be done?"
            onKeyPress={this.submit.bind(this)} />
        </div>
      </div>
    )
  }

}

const mapDispatch = dispatch => bindActionCreators({ create }, dispatch)

export default connect(null, mapDispatch)(Form)
