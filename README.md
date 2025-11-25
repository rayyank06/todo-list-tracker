To-Do List Tracker
A simple task management application built with Node.js, Express, MongoDB, and Bootstrap for INFR3120.
Live Demo
Hosted at: 
GitHub: https://github.com/rayyank/todo-list-tracker
About
This is a to-do list tracker where users can add, edit, complete, and delete tasks. All tasks are saved in MongoDB so they persist between sessions. The app demonstrates full CRUD operations and uses responsive design to work on any device.
Technologies

Node.js & Express.js
MongoDB Atlas & Mongoose
EJS templating
Bootstrap 5 & Font Awesome
Method Override for PUT/DELETE

Features

Add tasks with title, description, due date, and priority
Edit and update existing tasks
Mark tasks as complete or not done
Delete tasks with confirmation page
Color-coded priority levels (High, Medium, Low)
Responsive design for mobile and desktop

Installation

Clone the repo:

bashgit clone https://github.com/rayyank/todo-list-tracker.git
cd todo-list-tracker

Install dependancies:

bashnpm install

Run the app:

bashnpm run dev

Open browser to http://localhost:3000

Routes

GET / - Home page
GET /tasks - View all tasks
GET /tasks/add - Add task form
POST /tasks/add - Create task
GET /tasks/edit/:id - Edit form
POST /tasks/edit/:id - Update task
GET /tasks/delete/:id - Delete confirmation
POST /tasks/delete/:id - Delete task

Project Structure
config/        
controllers/    
models/      
public/       
routes/       
views/         
app.js       
package.json
Database Schema
Tasks include:

Title 
Description 
Due date 
Priority
Status
Timestamps

Security

MongoDB URI stored in environment variables
.env excluded from git via .gitignore
Input validation on forms
Error handling throughout app

Rayyan Khan
INFR3120 - Web and Script Programming
