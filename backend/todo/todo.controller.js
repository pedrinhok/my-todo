const express = require("express")
const router = express.Router()

const Todo = require("./todo.model")

router.get("/", (req, res) => {
  Todo.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

router.post("/", (req, res) => {
  const todo = new Todo(req.body)
  todo.save()
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

router.all("/:id", (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
    .then(todo => {
      req.todo = todo
      next()
    })
    .catch(err => res.send(err))
})

router.get("/:id", (req, res, next) => {
  res.send(req.todo)
})

router.put("/:id", (req, res) => {
  const body = req.body
  const todo = req.todo
  Object.assign(todo, body)
  todo.save()
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

router.delete("/:id", (req, res) => {
  Todo.remove({ _id: req.params.id })
    .then(data => res.send(204))
    .catch(err => res.send(err))
})

module.exports = router
