const express = require("express");
const connectDB=require("./config/connectDB");
const dotenv=require ("dotenv").config();
const mongoose=require("mongoose");
const app = express();
const Task=require("./models/taskModel");
const taskRoutes=require("./routes/taskRoute");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(taskRoutes); 

//Routes
// app.get("/", (req,res)=>{
//     res.send("Homepage");
// });

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(async ()=>{
            app.listen(PORT,()=>{
                console.log(`Server running on port ${PORT}`);
            })
    })
    .catch((err)=>{
        console.log(err);
    })