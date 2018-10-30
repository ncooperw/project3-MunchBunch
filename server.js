
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 8080;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/MunchBunchTrucks", { useNewUrlParser: true });



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
