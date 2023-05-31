const UserModel = require('../model/userModel')

async function getUsers(req,res){
        await UserModel.find()
        .then((response) => res.send(response))
        .catch((error) => res.status(error.status || 404).json({message: error.message}))
}


async function getUserById(req,res){
        const id = req.params.id
        await UserModel.findById(id)
        .then((response)=> res.send(response))
        .catch((error)=> res.status(error.status || 404).json({message: error.message}))
}

async function addNewUser(req, res){
        const user = new UserModel({
            ...req.body
        })
         await user.save()
        .then((response)=> {
            res.setHeader('Access-Control-Max-Age', '3600')
            res.status(201).json(response)})
        .catch((error)=> res.status(error.status || 500).json({message: error.message}))
}

async function updateUser(req, res){
        const updates = {
            ...req.body
        }
        const user = UserModel.findById(req.params.id)

        await user.updateOne(updates)
        .then((response)=> res.status(200).json(response))
        .catch((error)=>   res.status(error.status || 403).json({message: error.message})
        )
}

async function deleteUser(req, res){
        const deletedStatus= await UserModel.deleteOne({_id: req.params.id})
        .then((response)=> res.status(200).json(deletedStatus))
        .catch((error)=>res.status(error.status || 404).json({message: error.message}))
}

module.exports = {
    getUsers,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
}
