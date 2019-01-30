//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err) {
  console.log('Unable to Connect to MongoDB server');
}
 console.log('Connected to MongoDB server');

 // const db=client.db('TodoApp')

 // db.collection('Todos').find({
 //   _id: new ObjectID ('5c4ad5d5e4aa772db82d933b')
 // }).toArray().then((docs)=>{
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs,undefined,2));
 // },(err) =>{
 //   console.log('Unable to Fetch todos',err);
 // })

 // db.collection('Todos').find().count().then((count)=>{
 //   console.log(`Todos count: ${count}`);
 // },(err) =>{
 //   console.log('Unable to Fetch todos',err);
 // })

//client.close();

//  const db=client.db('Users')
  db.collection('PersonDetails').find({name: 'Anil Kumar A'}).toArray().then((docs)) => {
    console.log(JSON.stringify(docs,undefined,2));

});
