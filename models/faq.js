const mongoose = rqeuire('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    faq: {type: String},
    answer: {type: String},
    status: {type:Boolean}
});

module.exports = mongoose.model('Faq', faqSchema);