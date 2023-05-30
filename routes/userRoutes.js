const express = require('express')
const { getUsers, getUserById, addNewUser, updateUser, deleteUser} = require('../controllers/userController')
const UserModel = require('../model/userModel')


const router = express.Router()

router.post('/', addNewUser)

router.get('/', getUsers)

router.get('/:id', getUserById)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


module.exports = router