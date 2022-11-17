const express = require("express");
const connectDB=require("./config/connectDB");

const app = express();



app.get("/", (req,res)=>{
    res.send("Homepage");
});

connectDB();
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

