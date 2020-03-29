import { isValidObjectId } from "mongoose";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://testuser:IrU9Dwn1tbZGp78U@orrakemporium-9auk6.mongodb.net/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { };
  dbo.collection("devices").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

console.log('Welcome to the Sandbox')

