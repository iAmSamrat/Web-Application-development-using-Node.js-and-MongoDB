const express = require("express")
const path = require("path")
const members = require("./db")

const app = express()
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/find/:id",(req,res)=>{
    const user = members.some(member => member.id === parseInt(req.params.id))

    // if(user){
    //     res.status(200);
    //     res.json(members.filter(member => member.id === parseInt(req.params.id)))
    // }else{
    //     res.status(400)
    //     res.end("<h1>No members found.</h1>")
    // }
    if(user){
        var data = members.filter(member => member.id === parseInt(req.params.id))
        data = data[0]
        res.status(200);
        res.render("author", {data: data})
    }else{
        res.status(400)
        res.end("<h1>No data found</h1>")
    }
})
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`)
})