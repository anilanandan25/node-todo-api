var mongoose =require('mongoose');

var Todo=mongoose.model('Todo', {
  text:{
    type:String,
    required:true,// Value is must
    minlength:1, //Value value should be min 1
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default: null // Setting up a default Value
  }
});

module.exports={Todo};
