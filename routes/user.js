const express = require("express")

const router = express.Router();


router.route("/:id")

.get(async (req, res) =>{
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({msg:"User not found"});
    return res.json(user);

})
.patch(async (req,res) =>{
    await User.findByIdAndUpdate(req.params.id, {lastName:'changed'})
    return res.json({status:"Success"})
})
.delete(async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"})
})

router.get("/",async(req,res) =>{
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
})

router.post("/users", async(req,res) =>{
  const body = req.body;
  
  if(
    !body || !body.first_name || !body.last_name || !body.email || !body.gender 
  ){
    return res.status(400).json({msg:"Al fields are required..."})
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender

  });
})

modules.exports = router;