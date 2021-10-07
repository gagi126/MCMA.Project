const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    location: String,
    rol : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rol'
    },
})
module.exports = mongoose.model('User',userSchema);