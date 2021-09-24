const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
    role_id: mongoose.ObjectId,
    description:{
        type: String,
    }
})
module.exports = mongoose.model('Rol',rolSchema)

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    location: String,
    rol : {
        type: mongoose.ObjectId,
        ref: 'Rol'
    },
})
module.exports = mongoose.model('User',userSchema);