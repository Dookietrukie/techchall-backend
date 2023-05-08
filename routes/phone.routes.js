const express = require('express');
const router = express.Router();

// require the Phone model to interact with it on the DB
const Phone = require('../models/Phone.model');

// GET /api/phones -- get a list of all the phones
router.get('/phones', (req, res, next) => {
    Phone.find()
        .then( phonesFromDB => {
            res.status(200).json(phonesFromDB)
        })
        .catch( error => {
            res.status(500).json({
                message: 'Error getting the list of phones...', 
                error: error
            })
        }
    );
});

// GET /api/phones/:phoneId -- get info of a specific phone
router.get('/phones/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;

    Phone.findById(phoneId)
        .then( phoneFromDB => {
            res.status(200).json(phoneFromDB)
        })
        .catch( error => {
            res.status(500).json({
                message: 'Error getting the specified phone.', 
                error: error
            })
        }
    );
});

module.exports = router;