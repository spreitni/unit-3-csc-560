let mongoose = require('mongoose')
const server = 'mongodb://127.0.0.1:27017/'
const database = 'Unit2'

mongoose.connect(`mongodb://${server}/${database}`)
let CustomerSchema = new mongoose.Schema({
name: String,
email: {
    type: String,
    required: true,
    unique: true
}

})

module.exports = mongoose.model('Customer', CustomerSchema)