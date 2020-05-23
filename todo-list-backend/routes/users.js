const express = require('express');
const router = express.Router();

// register
router.get('/register', (req, res, next) => {
  res.send("Register")
})


const todoController = require('../controller/todoController'); 

// create log
router.post('/log', todoController.createTodo);

module.exports = router;
