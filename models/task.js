// Task Model - Defines the structure of tasks in MongoDB
const mongoose = require('mongoose');

// Define the schema (structure) for a task
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    dueDate: {
        type: Date,
        required: [true, 'Due date is required']
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['Not Done', 'Done'],
        default: 'Not Done'
    }
}, {
    timestamps: true
});

// Create the model from the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;