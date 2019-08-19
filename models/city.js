const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    c_name : {type: String, required: true},
    postcode: {type:String, required:true},
    district: {type:String},
    state: {type:String}
});

module.exports = mongoose.model("City", CitySchema);