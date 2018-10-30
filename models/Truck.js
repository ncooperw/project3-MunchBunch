    const mongoose = require ('mongoose')


const Schema = mongoose.Schema
const truckSchema = new Schema({
    name: String,
    imgLink: String,
    foodType: String,
    description: String,
    menuLink: String,
    price: String,
    latitude: Number,
    longitude: Number
})
const Truck = mongoose.model('Truck', truckSchema)
module.exports = Truck