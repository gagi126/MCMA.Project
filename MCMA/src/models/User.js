const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Rol = require('./Rol');

 
const userSchema = new Schema({
    user_id: String,
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: String,
    role: [{ type: Schema.ObjectId, ref: Rol}]
})

module.exports = mongoose.model("user", userSchema);