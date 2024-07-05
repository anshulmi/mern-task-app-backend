const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRouter = require("./routes/taskRoutes")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.use(cors({
    origin: ["http://localhost:3000","https://frontend-u6bt.orrender.com"]
}));
app.use("/api/tasks",taskRouter)


app.get("/",(req, res) => {
    res.send("Home page");
});


const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT,() => {
        console.log(`server is running on ${PORT}`);
    });
})
.catch((err) => console.log(err));

// const startServer = async () => {
//     try {
//         await connectDB();     
//         app.listen(PORT,() => {
//             console.log(`server is running on ${PORT}`);
//         })
                   
//     } catch (error) {
//         console.log(error);
//     }
// };

// startServer();

//mongodb+srv://anshulmishra1985:Love@123@mishracluster0.admidyf.mongodb.net/
//mongodb+srv://anshulmishra1985:Love@123@mishracluster0.admidyf.mongodb.net/?retryWrites=true&w=majority&appName=mishraCluster0