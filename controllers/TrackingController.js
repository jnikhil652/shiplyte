const axios = require('axios');
const { response } = require('express');

module.exports.getTrackingDetails = async (req, res) => {
    axios.post('/track?oid=1', {
        "orders": [req.body.orderId]
    }).then((response) => {
        res.send(response);
    });
};