const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    id : Number,
    name : String,
    Url : String,
})


module.exports = mongoose.model('Company', companySchema );