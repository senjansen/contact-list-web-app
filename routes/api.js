const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact');

router.get('/contacts', ContactController.getContacts);
router.post('/contacts', ContactController.postContact);
router.put('/contacts/:id', ContactController.putContact);
router.delete('/contacts/:id', ContactController.deleteContact);

module.exports = router;