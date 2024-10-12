const express = require('express');
const router = express.Router();
const { creatUser, login, getUsers, getUsersById, deleteUserById, updateUserById } = require('../controllers/userController');

router.get('/', getUsers );
router.get('/:id', getUsersById);

router.post('/', creatUser );
router.post('/login', login);

router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;