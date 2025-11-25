// Task Routes
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

// Home page route
router.get('/', taskController.home);

// View all tasks
router.get('/tasks', taskController.getAllTasks);

// Show add task form
router.get('/tasks/add', taskController.showAddForm);

// Create new task (POST from add form)
router.post('/tasks/add', taskController.createTask);

//  edit task form
router.get('/tasks/edit/:id', taskController.showEditForm);

// Update task 
router.post('/tasks/edit/:id', taskController.updateTask);

// Show delete confirmation
router.get('/tasks/delete/:id', taskController.showDeleteConfirm);

// Delete task 
router.post('/tasks/delete/:id', taskController.deleteTask);

module.exports = router;