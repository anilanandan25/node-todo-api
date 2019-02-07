//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err) {
  console.log('Unable to Connect to MongoDB server');
}
 console.log('Connected to MongoDB server');
// const db=client.db('TodoApp')
//
// db.collection('Todos').insertOne({
//   text:"Something to do",
//   completed:false
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

//Insert new doc into Users(name,age,location)
//
// const db=client.db('Users')
// db.collection('PersonDetails').insertOne({
//   _id:123,
//   name:"Anil Kumar A",
//   age: 30,
//   location:"Bangalore"
// },(err,result) =>{
//   if(err){
//     return console.log('Unable to Insert into',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
client.close();
});
