const express = require('express');
const router = express.Router();
const cors = require('cors');

const options={
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
};

//router.use('/rest', require('./rest/'));
router.use(cors(options));
router.use('/rest/search', require('./rest/recruits'));

module.exports = router;