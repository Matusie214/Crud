const express =require("express")
const app= express()
const mysql= require("mysql")

const db =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database: "movies"
})



app.get('/',(req,res)=>{
   // const sqlInsert= "INSERT INTO `movies_reviews` (`ID`, `movie`, `review`) VALUES (NULL, 'siema', 'test2');"
   // db.query(sqlInsert,(err,result)=>{
   //     res.send("Hello world2")

//    })
})


app.listen(3001,()=>{
    console.log("running on 3001");
})