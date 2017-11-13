import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { done, remove, update } from "./redux/actions"

class Row extends Component {

  constructor(props) {
    super(props)
    this.blur = this.blur.bind(this)
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      todo: this.props.todo.name
    }
  }

  blur(event) {
    if (event.target.value) {
      const todo = this.props.todo
      const update = this.props.update
      update(todo, {
        name: event.target.value,
      })
    }
  }

  change(event) {
    this.setState({
      todo: event.target.value
    })
  }

  submit(event) {
    if (event.which === 13) {
      event.target.blur()
    }
  }

  render() {
    return (
      <div className="row todo-row">
        <div className="col-sm">
          <input type="text" value={this.state.todo}
            onBlur={this.blur}
            onChange={this.change}
            onKeyPress={this.submit} />
        </div>
        <div className="col-sm-auto todo-actions">
          <span className={`fa fa-check ${this.props.todo.done ? "done" : "undone"}`}
            onClick={() => this.props.done(this.props.todo)}>
          </span>
          <span className="fa fa-remove"
            onClick={() => this.props.remove(this.props.todo)}>
          </span>
        </div>
      </div>
    )
  }

}

const mapDispatch = dispatch => bindActionCreators({ done, remove, update }, dispatch)

export default connect(null, mapDispatch)(Row)
