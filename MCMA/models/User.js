const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    address: String,
    location: String,
    rol : {
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    },
})
module.exports = mongoose.model('User',userSchema);