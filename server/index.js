const express =require("express")
const bodyParser= require('body-parser')
const app= express()
const mysql= require("mysql")
const cors=require('cors')

const db =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database: "movies"
})



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get',(req,res)=>{
    
    const sqlSelect="SELECT * FROM `movies_reviews` ;"
    db.query(sqlSelect, (err,result)=>{
        console.log(result)

    })
})
app.post('/api/insert',(req,res)=>{
    const moveName=req.body.movieName
    const movieReview=req.body.movieReview
    const sqlInsert=
    "INSERT INTO `movies_reviews` (`ID`, `movie`, `review`) VALUES (NULL, ?, ?);"
    db.query(sqlInsert,[moveName,movieReview], (err,result)=>{
        console.log(result)

    })
})

//app.get('/',(req,res)=>{
   // const sqlInsert= "INSERT INTO `movies_reviews` (`ID`, `movie`, `review`) VALUES (NULL, 'siema', 'test2');"
   // db.query(sqlInsert,(err,result)=>{
   //     res.send("Hello world2")

//    })
//})


app.listen(3001,()=>{
    console.log("running on 3001");
})