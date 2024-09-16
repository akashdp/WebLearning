const express = require('express');
const { addMessage, getAllMessages } = require('../controller/message.controller');
const router = express.Router();


router.post('/contactUs',addMessage);
router.get('/contacts',getAllMessages);

module.exports= router;