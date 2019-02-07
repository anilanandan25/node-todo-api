// var mongoose =require('mongoose');
//
// mongoose.Promise =global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// We are  using Model as the functiom to create a collection

var express = require('express');
var bodyParser = require('body-parser');

var  {mongoose}=require('./db/mongoose.js')
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000,()=>{
console.log('Started on port 3000');
});

// var Todo=mongoose.model('Todo', {
//   text:{
//     type:String,
//     required:true,// Value is must
//     minlength:1, //Value value should be min 1
//     trim:true
//   },
//   completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default: null // Setting up a default Value
//   }
// });

// Creating a new Object
// var newTodo = new Todo({
//   text:"Cook Dinner"
// });
// newTodo.save().then((doc)=>{
// console.log('Saved todo',doc);
// },(e) =>{
//   console.log('Unable to Save todo')
// });


//Creating a new todo- Like creating a new Object
// var otherTodo=new Todo({
// text:true,
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e) =>{
//   console.log('unable to save'.e);
// });

//User model
//Email -Require , trim
//Type : String , Min len=1
//
// var User=mongoose.model('User',{
//   email:{
//     type:String,
//     required:true,
//     trim:true,
//     minlength:1
//   }
// });

// var user=new User({
//   email:"anil@example.com"
//
// });
// user.save().then((doc)=>{
//   console.log('User Saved',doc);
// },(e) =>{
//   console.log('Unable to save User',e);
//
// });
