const mongoose = require('mongoose');

const contactUs = new mongoose.Schema({
    fullName: {
        type:String,
        required: true,
    },
    email: {
        
            type: String,
            required: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    message: {
        type :String,
        required:true,
        minLength: 5,
        maxLength: 500 
    }
});

    const Contact = mongoose.model('Contactus',contactUs);
    module.exports = Contact;


