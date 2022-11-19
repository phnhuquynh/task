const express = require("express");
const Task=require("../models/taskModel");
const router= express.Router();
const {createTask, getTasks, getTask, deleteTask, updateTask} = require("../controllers/taskcontroller");

//Create tasks
router.post("/api/tasks",createTask);

// Get/Read Data
router.get("/api/tasks", getTasks);

// Get single task
router.get("/api/tasks/:id", getTask);

// delete task
router.delete("/api/tasks/:id", deleteTask);

// update task
router.put("/api/tasks/:id", updateTask);

module.exports=router;