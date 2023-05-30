const UserModel = require('../model/userModel')

async function getUsers(req,res){
    try{
        const users = await UserModel.find()
        res.send(users)
    }catch(error){
        res.status(error.status)
        res.send(error.message)
    }
}


async function getUserById(req,res){
    try{
        const id = req.params.id
        const user= await UserModel.findById(id)
        res.send(user)
    }catch(error){
        res.status(error.status || 404).json({message: error.message})
    }
}

async function addNewUser(req, res){
    try{
        const user = new UserModel({
            ...req.body
        })
        const savedUser = await user.save()

        res.status(201).json(savedUser)
    }catch(error){
        res.status(error.status).json({message: error.message})
    }
}

async function updateUser(req, res){
    try{
        const updates = {
            ...req.body
        }
        const user = UserModel.findById(req.params.id)

        const updatedResponse = await user.updateOne(updates)

        res.status(200).json(updatedResponse)
    }catch(error){
        res.status(error.status || 404).json({message: error.message})
    }
}

async function deleteUser(req, res){
    try{
        const deletedStatus= await UserModel.deleteOne({_id: req.params.id})
        res.status(200).json(deletedStatus)
    }catch(error){
        console.log(error)
        res.status(error.status || 404).json({message: error.message})
    }
}

module.exports = {
    getUsers,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
}
