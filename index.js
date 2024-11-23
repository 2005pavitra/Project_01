const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require ("fs");
const mongoose = require("mongoose");
const { type } = require("os");
const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection")

app.set('view engine', 'ejs')

const PORT = 8000;

//connection with mongodb
connectMongoDb("mongodb://127.0.0.1:27017/project1")

//Schema


//model

//middleware- plugin



//Router
app.use("/user",userRouter);


// app.patch("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);

//   // Find the index of the user
//   const userIndex = users.findIndex((user) => user.id === userId);

//   // If user is not found, return 404
//   if (userIndex === -1) {
//       return res.status(404).json({ error: "User not found" });
//   }

//   // Update the user with new fields from req.body
//   const updatedFields = req.body;
//   users[userIndex] = { ...users[userIndex], ...updatedFields };

//   // Save the updated data to MOCK_DATA.json
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
//       if (err) {
//           console.error("Error in updating the user:", err);
//           return res.status(500).json({ error: "Failed to update user" });
//       }

//       // Respond with the updated user
//       res.json({ status: "success", user: users[userIndex] });
//   });
// });


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
