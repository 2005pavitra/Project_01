const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) =>{
 console.log("Hello from middleware 1");
 next();
})

app.use((req,res,next)=>{
  console.log("Hello from middleware 2");
  return res.end("Hey")
  
})