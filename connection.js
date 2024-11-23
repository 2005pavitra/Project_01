const mongoose  = require("mongoose");

async function connectMongoDb(){
  return  mongoose.connect('url')
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo Error", err))

}


module.exports = {
    connectMongoDb,
}