const express = require("express");
const Task=require("../models/taskModel");
const router= express.Router();
const {createTask, getTasks} = require("../controllers/taskcontroller");

//Create tasks
router.post("/api/tasks",createTask);

// Get/Read Data
router.get("/api/tasks", getTasks);

module.exports=router;