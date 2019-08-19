const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bloodSchema = new Schema({
    blood_group: {type: String}
});

module.exports = mongoose.model('Blood', bloodSchema);