
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require ('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

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

//Middleware
app.use(express.json())
app.use(cors())

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

//For a new Truck owner to add their info to the database
app.post("/api/trucks", function(req, res) {
  // Create a new Truck using req.body
  db.Truck.create(req.body)
    .then(function(dbTruck) {
      // If saved successfully, send the the new User document to the client
      res.json(dbTruck);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// router.use("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


//NEED HELP WITH THIS!!

// // Route for updating a Truck's location
// app.post("/api/location", function(req, res) {
/// Route for updating a Truck's location
app.put("/api/trucks", function(req, res) {
  // Update the location where the truck name matches the name of the truck the user enters
  db.Truck.findOneAndUpdate(
    { name: req.body.truckName }, 
    {location: req.body.location}, 
    // { note: dbNote._id },
    { new: true }
     )
    
    .then(function(dbLocation) {
      // If we were able to successfully update the location, send it back to the client
      res.json(dbLocation);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  })


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
