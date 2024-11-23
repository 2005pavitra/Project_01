const User = require("../models/users")

async function handleGetAllUsers(req,res){
    const allDbUSers = await User.find({})
    return res.json(allDbUSers)
}

async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({msg:"User not found"});
    return res.json(user);
}

async function UpdateUserById(req,res){
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {lastName:'changed'})
    return res.status(200).json(updatedUser);
}

async function deleteUserById(req, res){
    const deleteUserById= await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(deleteUserById)
}

async function createNewUser(req,res){
    const body = req.body;
  
  if(
    !body || !body.first_name || !body.last_name || !body.email || !body.gender 
  ){
    return res.status(400).json({msg:"All fields are required..."})
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender

  });

  return res.status(200).json({msg:"success", id: result._id})
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    UpdateUserById,
    deleteUserById,
    createNewUser
}