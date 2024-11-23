const mongoose  = require ('mongoose')


const userSchema = new mongoose.Schema({
    firstName:{
      type: String,
      required:true,
    },
    lastName:{
      type:String,
    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    gender:{
      type:String,
    }
  },{timestamps:true})

  const User = mongoose.model("user", userSchema)

  // const user1 = new User({
  //   firstName:"Pavitra",
  //   lastName:"Pandey",
  //   email:"pjh@gmail.com",
  //   gender:"male"

  // })

  // user1.save();

  module.exports = User;
  