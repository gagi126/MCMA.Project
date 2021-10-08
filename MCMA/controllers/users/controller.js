const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Admin:dbcaldar@cluster0.hhvym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then((result) =>{
        console.log('Database connected')
    })
    .catch((error)=>{
        console.log('Database not connected, error: ' , error)
    })
const uSchema = require('../../models/User')
const rSchema =require('../../models/Rol')

const indexClients = async (req,res) =>{
    try{
        const user = await uSchema.find().populate('rol');
        return res.status(200).json(user);
        }
    catch(error){
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}
const indexRol = async (req,res) =>{
    try{
        const response = await rSchema.find()
        return res.status(200).json({
            response: response,
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
const addRol = async (req,res) =>{
    try {
        const Rol = new rSchema ({
            role_id : req.body._id,
            description: req.body.description
        })
        const newRol = await Rol.save(); 
        return res.status(201).json({
            data : {role_id : newRol._id,
                    description : newRol.description},
            error: false
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
        console.log(req.body.rol);

        const User = new uSchema ({
            name : req.body.name,
            address : req.body.address,
            location : req.body.location,
            rol : req.body.rol,
        });

        const newUser = await User.save();        
        const response = await newUser.populate('rol')
        return res.status(201).json({
            data: response,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: error,
            message: error,
        })        
    }
}
/*const getUserById = async(req,res) => {
    try {
        const response = await uSchema.findOne({_id : req.params._id})
        return res.status(200).json({
            data: response,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error,
        })        
    }
}*/
module.exports ={
    indexClients,
    addUser,
    addRol,
    indexRol
}