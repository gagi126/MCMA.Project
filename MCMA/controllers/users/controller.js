const mongoose = require('mongoose')
const uSchema = require('../../models/User')

const userSchema = new mongoose.Schema({ user_id: mongoose.ObjectId})

const indexClients = async (req,res) =>{
    try{
        const response = await uSchema.find()
        return res.status(200).json({
            data: userSchema,
            error: false,
        })
    }
    catch(error){
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}
/*const indexRol = async (req,res) =>{
    try{
        const response = await uSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
        })
    }
    catch(error){
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}
*/
const addRol = async (req,res) =>{
    try {
        const Rol = new uSchema (req.body)
        const newRol = await Rol.save()
        return res.status(200).json({
            data: newRol,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error,
        })        
    }
}

const addUser = async (req,res) =>{
    try {
        const User = new uSchema (req.body)
        const newUser = await User.save()
        return res.status(200).json({
            data: newClient,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error,
        })        
    }
}

module.exports ={
    indexClients,
    addUser,
    addRol,
 //   indexRol
}