const express = require('express');
const CompanyModel = require('../models/companyModel');
const AdsModel = require('../models/adsModel');
const router = express.Router();

router.get('/search/:token', async (req, res) => {
    try {
        const data = await AdsModel.find({headline: req.params.token});
        if(data && data.length){
            res.json(data)
        } else {
            res.status(400).json({message: 'No results found!'})
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})






module.exports = router;