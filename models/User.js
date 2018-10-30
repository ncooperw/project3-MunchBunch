const mongoose = require ('mongoose')


const Schema = mongoose.Schema
const consumerSchema = new Schema({
   id: Number,
    name: String,
    email: String,
    favCuisine: String,
    reviews: String,
    favTrucks: String, 
    
})
const Consumer = mongoose.model('Consumer', consumerSchema)
module.exports = Consumer

