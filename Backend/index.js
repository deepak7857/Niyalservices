const express=require("express");
const userRouter=require("./routes/page")
const app=express();
const port=3000;
//app.use(express.urlencoded,{extended:false})
app.get("/",(req,res)=>{
  res.send("Hello From server");
})
app.use("/about",userRouter);

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})