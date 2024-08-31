const express = require('express');
const { createTask, fetchAllTask, updateTaskById, deleteTaskById } = require('../controllers/TaskController');
const router = express.Router();

router.get('/',fetchAllTask
);

router.post('/', createTask);

router.put('/:id',updateTaskById);

router.delete("/:id",deleteTaskById);

module.exports = router;