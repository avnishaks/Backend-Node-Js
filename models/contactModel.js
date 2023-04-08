const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
    },
},

    {
        timestamps: true,
    }

);


module.exports = mongoose.model('Contact', contactSchema);