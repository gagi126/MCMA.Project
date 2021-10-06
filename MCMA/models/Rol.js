const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolSchema = new mongoose.Schema({
    role_id: mongoose.ObjectId,
    description:{
        type: String,
    }
})

module.exports = mongoose.model('Rol',rolSchema)