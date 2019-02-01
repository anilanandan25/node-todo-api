//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err) {
  console.log('Unable to Connect to MongoDB server');
}
 console.log('Connected to MongoDB server');


const db=client.db('Users')

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c519cc8917fd845ea029326')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

//To Update the Document and Set the name field and Age field---- Important for learniing
db.collection('PersonDetails').findOneAndUpdate({
  _id:new ObjectID('5c4b14fce2a9720d6c7f7a52')
 },{
    $set:{
       name:"Anil"
  },
   $inc: {
     age: -1
  },
},{
  returnOriginal:false
}).then((result)=>{
    console.log(result);
  });

//client.close();
});
