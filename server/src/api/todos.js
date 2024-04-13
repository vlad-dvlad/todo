const express = require("express");
const _ = require("lodash");
const todosArray = require("../../db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(todosArray);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400).send({
      message: "Bad request!",
    });
  }
  const todo = todosArray.todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.sendStatus(404).send({
      message: "Not Found item!",
    });
  }

  return res.send({
    todo,
  });
});

router.post("/", (req, res) => {
  if (_.isNull(req.body.title) || _.isNull(req.body.completed)) {
    return res.sendStatus(400).send({
      message: "Bad request!",
    });
  }
});

module.exports = router;
