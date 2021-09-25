const express = require('express')
const mongoose = require('mongoose')
var user = require('../../models/User')


const indexClient = (req, res) =>{
    user.find({}, function(err,user){
        Rol.populate(user,{ path:"rol_id"})
    })
}

module.exports ={
    indexClient,
}