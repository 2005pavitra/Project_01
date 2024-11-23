const express = require("express");
const {  
    handleGetAllUsers,
    getUserById,
    UpdateUserById,
    deleteUserById,
    createNewUser} = require("../controllers/users");

const router = express.Router();


router.route("/:id")

.get(getUserById)
.patch(UpdateUserById)
.delete(deleteUserById)

router.get("/", handleGetAllUsers).post("/users", createNewUser)



module.exports = router;