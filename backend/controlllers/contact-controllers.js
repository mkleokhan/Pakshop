const Contacts = require('../models/contact-model')

const contactForm = async (req, res)=>{
    try {
        const response = req.body;
        await Contacts.create(response);
        return res.status(200).json({message: "Message sent successfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({"error": error})
    }
}

module.exports = contactForm;