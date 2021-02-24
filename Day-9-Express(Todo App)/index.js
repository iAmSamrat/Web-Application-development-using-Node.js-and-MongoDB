const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const todoModel = require("./schema/todo");

const app = express()
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/tododb",{useNewUrlParser: true, useUnifiedTopology: true})

app.get("/",(req,res)=>{
    todoModel.find((err,data)=>{
        if(err) throw err
        else{
            res.render("index",{data:data})
        }
    })
})

app.post("/submit",(req,res)=>{
    const {todo, date} = req.body
    todoModel.create({
        todo, date
    }).then(()=>{
        res.status(200);
        console.log("Data inserted successfully!")
    })
    res.redirect("/");
})

app.post("/delete/:id",(req,res)=>{
    todoModel.findOneAndDelete({_id: req.params.id},(err,data)=>{
        if(err) throw err
        else{
            res.redirect("/");
        }
    });
});

app.post("/update/:id",(req,res)=>{
    todoModel.findOne({_id: req.params.id}, (err,data)=>{
        if(err) throw err
        else{
            res.render("update",{data:data})
        }
    })
});

app.post("/save-and-update/:id",(req,res)=>{
    const {todo,date} = req.body
    todoModel.findOneAndUpdate({_id: req.params.id},{todo,date},(err,data)=>{
        if(err) throw err
        else{
            res.redirect("/");
        }
    })
})


const PORT = process.env.port || 5000

app.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`)
})