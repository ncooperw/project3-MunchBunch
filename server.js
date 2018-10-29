const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');

const db = mongo.connect("mongodb://localhost:27017/MunchBunch", { useNewUrlParser: true }, function(err, response){
    if (err){
        console.log(err);
    } else {
        console.log('Connected to ' + db, '+', response);
    }
});

const app = express();

//Serve static files
app.use(express.static( './dist/project3-munchBunch'));

//Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join( './dist/project3-munchBunch/index.html'));
});


app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();  
});

var Schema = mongo.Schema;

var consumerSchema = new Schema({      
    name: { type: String   },       
    address: { type: String   },   
   },{ versionKey: false });  
      
     
   var model = mongo.model('consumer', consumerSchema, 'consumer');  
     
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
     
    app.post("/api/deleteConsumer",function(req,res){      
       model.remove({ _id: req.body.id }, function(err) {    
        if(err){    
            res.send(err);    
        }    
        else{      
               res.send({data:"Record has been Deleted..!!"});               
           }    
    });    
      })  
     
     
     
    app.get("/api/getConsumer",function(req,res){  
       model.find({},function(err,data){  
                 if(err){  
                     res.send(err);  
                 }  
                 else{                
                     res.send(data);  
                     }  
             });  
     })  
     

    //default Heroku port

   app.listen(process.env.PORT || 5000, function () {  
       
    console.log('Example app listening on port 5000!')  
   })  

