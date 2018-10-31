
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 5000;

// Initialize Express
var app = express();

// Require all models
var db = require("./models");
//Serve static files
// app.use(express.static( './dist/project3-munchBunch'));

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));



// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/MunchBunchTrucks", { useNewUrlParser: true });

let databaseUri = "mongodb://localhost/MunchBunchTrucks";

if (process.env.MONGODB_URI){
  
  mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });
}else{
  mongoose.connect(databaseUri,{ useNewUrlParser: true });
}

db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});


db.once("open", function(){
  console.log("Mongoose connection successful.")
});
// app.get("/api/trucks", function(req,res){  
//     console.log("Truck" + db.Truck);
//     db.Truck.find({})

//     .then(function(dbTruck) {
//         console.log("db" + dbTruck);
//       // If any Trucks are found, send them to the client
//       res.json(dbTruck);
     
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// })

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
app.get("/api/trucks/:id", function(req, res) {
  db.collection(trucks_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get truck");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/trucks/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(TRUCKS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update truck");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/trucks/:id", function(req, res) {
  db.collection(TRUCKS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete truck");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
