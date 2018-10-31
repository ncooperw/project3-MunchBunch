
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var PORT = 5000;

// Initialize Express
var app = express();

// Require all models
var db = require("./models");
//Serve static files

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB

let databaseUri = "mongodb://localhost/MunchBunchTrucks";

if (process.env.MONGODB_URI){
  
  mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });
}else{
  mongoose.connect(databaseUri,{ useNewUrlParser: true });
}

const database = mongoose.connection;

database.on("error", function(err){
  console.log("Mongoose Error: ", err);
});


database.once("open", function(){
  console.log("Mongoose connection successful.")
});

// Routes
// db.Truck.create({
//     name = req.body
// })
// app.post("api/new", function(req,res){
 // });
 app.get("/api/trucks", function(req,res){  
  console.log("Truck" + db.Truck);
  db.Truck.find({})
   .then(function(dbTruck) {
      console.log("db" + dbTruck);
    // If any Books are found, send them to the client
    res.json(dbTruck);
   
  })
  .catch(function(err) {
    // If an error occurs, send it back to the client
    res.json(err);
  });
})


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
