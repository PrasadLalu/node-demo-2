const db = require('../models');
const Task = db.tasks;

// Get all tasks
exports.getAllTasks = async (req, res) => {
    // Find all Tasks
    const tasks = await Task.findAll({});

    // Send response
    res.status(200).send({
        success: true,
        data: tasks
    });
}

// Create new task
exports.createTask = async (req, res) => {
    const {title, priority, description} = req.body;

    // Empty check
    if (!title || !priority || !description) {
        return res.status(400).send({
            success: false,
            error: 'Missing task contents.'
        });
    }

    // Create new task
    const task = await Task.create({
        title,
        priority,
        description
    });

    // Send response
    res.status(201).send({
        success: true,
        data: task
    });
}

// Get a single task
exports.getTask = async(req, res) => {
    // Find task
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);

    // Check task
    if (!task) {
        return res.status(404).send({
            success: false,
            error: `Task is not found with the Id: ${taskId}.`
        });
    }

    // Send response
    res.status(200).send({
        success: true,
        data: task
    });
}

// Update task
exports.updateTask = async(req, res) => {
    const taskId = req.params.id;
    const task = await Task.update(req.body, { where: {id: taskId}});

    if (task[0] === 0) {
        return res.status(400).send({
            success: false,
            error: `Something went wrong while updating task with Id: ${taskId}.`
        });
    }

    // Send response
    res.status(200).send({
        success: true
    });
}

// Delete task
exports.deleteTask = async(req, res) => {
    const taskId = req.params.id;
    const task = await Task.destroy({ where: {id: taskId}});

    if (task === 0) {
        return res.status(400).send({
            success: false,
            error: `Something went wrong while deleting task with Id: ${taskId}.`
        });
    }

    // Send response
    res.status(200).send({
        success: true
    });
}
