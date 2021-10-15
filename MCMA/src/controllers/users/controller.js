import uSchema, { find, findOne, findByIdAndDelete, findOneAndUpdate } from '../../models/User';
import rSchema, { find as _find } from '../../models/Rol';

const indexClients = async (req,res) =>{
    try{
        const user = await find().populate('rol');
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
        const response = await _find()
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

const getUserById = async(req,res) => {
    try {
        const response = await findOne({_id : req.params._id})
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
}

const deleteUser = async(req,res)=> {
    try {
        return res.status(200).json({
            message: 'User Deleted succesfull',
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error,
        })
    }
}

const editUser = async (req,res) => {
    try {
        const User = new uSchema ({
            _id : req.params._id,
            name : req.body.name,
            address : req.body.address,
            location : req.body.location,
            rol : req.body.rol, 
        });
        const response = await findOneAndUpdate({_id : req.params._id},User,{new : true})
        return res.status(200).json({
            data : response,
            error : false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error,
        })
    }
}

export default{
    indexClients,
    addUser,
    addRol,
    indexRol,
    getUserById,
    deleteUser,
    editUser,
}