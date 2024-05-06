const express = require("express");
const router = express.Router();

const ContactForm = require("./controlllers/contact-controllers");

router.route("/contact").post(ContactForm);

module.exports = router;