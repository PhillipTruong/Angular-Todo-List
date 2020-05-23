// const mongoose = require("mongoose");
const Todo = require("../models/todo");

exports.createTodo = function(req, res) {
  let todo = new Todo(
    {
        title: req.body.title,
        body: req.body.body,
        completedBool: req.body.completedBool
    }
  );

  console.log("body title: ", req.body.title);
    
  todo.save(function(err) {
    if (err) {
      console.log("error creating todo: " + err);
      return next({ error: err });
    }
    res.send({ message: "Created todo: " + todo.title });
  });
};
