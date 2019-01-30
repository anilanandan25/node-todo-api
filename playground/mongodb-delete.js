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

//deleteMany -
 // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
 //   console.log(result);
 // });

 //DeleteOne
 // db.collection('Todos').deleteOne({text:"Eat Lunch"}).then((result)=>{
 //   console.log(result);
 // });

 //findOneAndDelete
 // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
 //  console.log(result);
 //  });
// ***************************************************

const db=client.db('Users')
//deleteMany -
  //  db.collection('PersonDetails').deleteMany({name:'Anil Kumar A'}).then((result)=>{
  //    console.log(result);
  // });

 //DeleteOne
  // db.collection('PersonDetails').deleteOne({_id: new ObjectID("5c4b14fce2a9720d6c7f7a52"}).then((result)=>{
  //    console.log(result);
  //  });


 //findOneAndDelete
   // db.collection('PersonDetails').deleteOne({_id: new ObjectID('5c4b14fce2a9720d6c7f7a52'}).then((results)=>{
   // console.log(JSON.stringify(results,undefined,2));
   //  });

//client.close();

});
