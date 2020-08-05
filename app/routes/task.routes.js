var router = require('express').Router();
const { 
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask 
} = require('../controllers/task.controller');

router
    .route('/')
    .post(createTask)
    .get(getAllTasks);

router
    .route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;