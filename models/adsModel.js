const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    id : Number,
    companyId: Number,
    primaryText : String,
    headLine : String,
    description : String,
    cta : String,
    imageUrl : String,
})

module.exports = mongoose.model('Ads', adsSchema );