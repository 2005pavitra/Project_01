const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require ("fs");
const mongoose = require("mongoose");
const { type } = require("os");
const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection")
const {myLogger} = require("./middlewares")

require("dotenv").config();
// app.set('view engine', 'ejs')

const PORT = 8000;

//connection with mongodb
main()
.then(() =>
  {console.log("Mongodb connected")
  })
.catch(() =>
  {console.log("Mongodb connection error")
  })

async function main(){
 await mongoose.connect("mongodb://127.0.0.1:27017/project1")
}

//Schema


//model

//middleware- plugin
app.use(myLogger("log.txt"))


//Router
app.use("/user",userRouter);



app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
