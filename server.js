const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const ObjectID = mongodb.objectID;

// const db = mongo.connect("mongodb://localhost:27017/MunchBunch", { useNewUrlParser: true }, function(err, response){
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Connected to ' + db, '+', response);
//     }
// });

const app = express();

//Serve static files
app.use(express.static( './dist/project3-munchBunch'));

//Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join( './dist/project3-munchBunch/index.html'));
});

app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();  
});
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  app.get("/api/trucks", function(req, res) {
    db.collection(TRUCKS_COLLECTION).find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get trucks.");
      } else {
        res.status(200).json(docs);
      }
    });
  });

  app.post("/api/trucks", function(req, res) {
    var newTruck = req.body;
    newTruck.createDate = new Date();
  
    if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    } else {
      db.collection(TRUCKS_COLLECTION).insertOne(newTruck, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new Truck.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
    }
  });

  
//var Schema = mongo.Schema;

// var consumerSchema = new Schema({  

//     name: { type: "string" },
//     email: { type: "string" },
//     favCuisine: { }       
      
      
    
//     "_id": number,
//     "name": string,
//     "email": string,
//     "favCuisine": string,
//     "reviews": string,
//     "favTrucks": string,
// }
     
//    var model = mongo.model('consumer', consumerSchema, 'consumer');  
     
//    app.post("/api/saveConsumer",function(req,res){   
//     var mod = new model(req.body);  
//     if(req.body.mode =="Save")  
//     {  
//        mod.save(function(err,data){  
//          if(err){  
//             res.send(err);                
//          }  
//          else{        
//              res.send({data:"Record has been Inserted..!!"});  
//          }  
//     });  
//    }  
//    else   
//    {  
//     model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
//       function(err,data) {  
//       if (err) {  
//       res.send(err);         
//       }  
//       else{        
//              res.send({data:"Record has been Updated..!!"});  
//         }  
//     });  
     
     
//    }  
//     })  
     
//     app.post("/api/deleteConsumer",function(req,res){      
//        model.remove({ _id: req.body.id }, function(err) {    
//         if(err){    
//             res.send(err);    
//         }    
//         else{      
//                res.send({data:"Record has been Deleted..!!"});               
//            }    
//     });    
//       })  
     
     
     
//     app.get("/api/getConsumer",function(req,res){  
//        model.find({},function(err,data){  
//                  if(err){  
//                      res.send(err);  
//                  }  
//                  else{                
//                      res.send(data);  
//                      }  
//              });  
//      })  
     

    //default Heroku port

//    app.listen(process.env.PORT || 5000, function () {  
       
//     console.log('Example app listening on port 5000!')  
//    })  

