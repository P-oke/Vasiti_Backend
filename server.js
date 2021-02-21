const express=require("express")
const dotenv=require('dotenv')
const expresslayout = require("express-ejs-layouts");
const path=require("path")
const connectDB=require("./config/db")

const app=express()

dotenv.config({path: "./config/.env"})

app.use(express.json())

connectDB()

//middleware
app.use(expresslayout);
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

//routes
app.use("/", require("./routes/product"))

app.use(express.static(path.join(__dirname, "public")))

const port=process.env.PORT||5000

app.listen(port, (req, res)=>{
    console.log(`App runing on port ${port}`);
})