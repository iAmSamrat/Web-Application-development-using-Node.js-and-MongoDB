var express = require('express');
var router = express.Router();
var todoModel = require("../schema/todo");
var mongoose = require("mongoose");

/* GET home page. */
router.get("/",(req,res)=>{
  todoModel.find((err,data)=>{
      if(err) throw err
      else{
          res.render("index",{data:data})
      }
  })
})

router.post("/submit",(req,res)=>{
  const {todo, date} = req.body
  todoModel.create({
      todo, date
  }).then(()=>{
      res.status(200);
      console.log("Data inserted successfully!")
      res.redirect("/");
  })
  
})

router.post("/delete/:id",(req,res)=>{
  todoModel.findOneAndDelete({_id: req.params.id},(err,data)=>{
      if(err) throw err
      else{
          res.redirect("/");
      }
  });
});

router.post("/update/:id",(req,res)=>{
  todoModel.findOne({_id: req.params.id}, (err,data)=>{
      if(err) throw err
      else{
          res.render("update",{data:data})
      }
  })
});

router.post("/save-and-update/:id",(req,res)=>{
  const {todo,date} = req.body
  todoModel.findOneAndUpdate({_id: req.params.id},{todo,date},(err,data)=>{
      if(err) throw err
      else{
          res.redirect("/");
      }
  })
})

module.exports = router;
