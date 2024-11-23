const mongoose = require("mongoose")

async function main(){
  await  mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

main()
.then(() =>{
    console.log("MongoDB connected successfully")
})
.catch(() =>{
    console.log("Error in mongodb conncection")
})

