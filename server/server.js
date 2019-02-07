//Program to Create Mongoose Connection and add the Data
var mongoose =require('mongoose');

mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// We are  using Model as the functiom to create a collection
var Todo=mongoose.model('Todo', {
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:Number
  }
});

// Creating a new Object

var newTodo = new Todo({
  text:"Cook Dinner"
});
newTodo.save().then((doc)=>{
console.log('Saved todo',doc);
},(e) =>{
  console.log('Unable to Save todo')
});

//Creating a new todo- Like creating a new Object
var otherTodo=new Todo({
text:"Feed the Cat",
completed:true,
completedAt:123
});

otherTodo.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(e) =>{
  console.log('unable to save'.e);
});
