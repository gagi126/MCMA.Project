const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
    role_id: mongoose.ObjectId,
    description: String
})

module.exports = mongoose.model('Rol', rolSchema)