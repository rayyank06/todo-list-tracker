//  Handles all task related operations (
const Task = require('../models/task');

// Home page 
exports.home = (req, res) => {
    res.render('home', { title: 'Home' });
};

// Display all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ dueDate: 1 });
        res.render('tasks/list', { 
            title: 'All Tasks', 
            tasks: tasks 
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to fetch tasks',
            error: error
        });
    }
};

//  form to add new task
exports.showAddForm = (req, res) => {
    res.render('tasks/add', { title: 'Add New Task' });
};

// Create new task 
exports.createTask = async (req, res) => {
    try {
        //  new task from form data
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            status: req.body.status
        });
        
        // Save to database
        await newTask.save();
        console.log('✅ Task created:', newTask.title);
        
        // Redirect to task list
        res.redirect('/tasks');
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to create task',
            error: error
        });
    }
};

//  form to edit existing task
exports.showEditForm = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).render('error', { 
                title: 'Error',
                message: 'Task not found',
                error: { status: 404 }
            });
        }
        
        res.render('tasks/edit', { 
            title: 'Edit Task', 
            task: task 
        });
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to fetch task',
            error: error
        });
    }
};

// Update existing task 
exports.updateTask = async (req, res) => {
    try {
        // Find task and update with new data
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                dueDate: req.body.dueDate,
                priority: req.body.priority,
                status: req.body.status
            },
            { new: true, runValidators: true } 
        );
        
        if (!updatedTask) {
            return res.status(404).render('error', { 
                title: 'Error',
                message: 'Task not found',
                error: { status: 404 }
            });
        }
        
        console.log('✅ Task updated:', updatedTask.title);
        res.redirect('/tasks');
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to update task',
            error: error
        });
    }
};

// Show delete confirmation page
exports.showDeleteConfirm = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).render('error', { 
                title: 'Error',
                message: 'Task not found',
                error: { status: 404 }
            });
        }
        
        res.render('tasks/delete', { 
            title: 'Delete Task', 
            task: task 
        });
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to fetch task',
            error: error
        });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        
        if (!deletedTask) {
            return res.status(404).render('error', { 
                title: 'Error',
                message: 'Task not found',
                error: { status: 404 }
            });
        }
        
        console.log('✅ Task deleted:', deletedTask.title);
        res.redirect('/tasks');
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).render('error', { 
            title: 'Error',
            message: 'Unable to delete task',
            error: error
        });
    }
};