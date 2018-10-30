//import bodyParser from 'body-parser';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PORT = 8080;

var db = require("./models");



// , 

// function(err, response){
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Connected to ' + db, '+', response);
//     }
// });


var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

//not sure if we need the static with Angular
app.use(express.static(path.join(__dirname, "js")));

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();  
});


mongoose.connect("mongodb://localhost/MunchBunchTrucks", function(err, database){
    if (err){
        console.log(err)}
    else{
        console.log("database" + database)
    }
});
// var Schema = mongoose.Schema;

 
      
     
//    var model = mongoose.model('consumer', consumerSchema, 'consumer');  
     
   app.post("/api/saveConsumer",function(req,res){   
    var mod = new model(req.body);  
    if(req.body.mode =="Save")  
    {  
       mod.save(function(err,data){  
         if(err){  
            res.send(err);                
         }  
         else{        
             res.send({data:"Record has been Inserted..!!"});  
         }  
    });  
   }  
   else   
   {  
    model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
      function(err,data) {  
      if (err) {  
      res.send(err);         
      }  
      else{        
             res.send({data:"Record has been Updated..!!"});  
        }  
    });  
     
     
   }  
    })  
     
    app.post("/api/deleteUser",function(req,res){      
       model.remove({ _id: req.body.id }, function(err) {    
        if(err){    
            res.send(err);    
        }    
        else{      
               res.send({data:"Record has been Deleted..!!"});               
           }    
    });    
      })  
     
     
     
    app.get("/api/getUser",function(req,res){  
       model.find({},function(err,data){  
                 if(err){  
                     res.send(err);  
                 }  
                 else{                
                     res.send(data);  
                     }  
             });  
     })  

     app.get("/api/trucks",function(req,res){  
        db.Truck.find({})
        .then(function(dbTruck) {
          // If any Books are found, send them to the client
          res.json(dbTruck);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
      })  
     
     
   app.listen(PORT, function () {  
       
    console.log('Example app listening on port' + PORT + '!')  
   })  

