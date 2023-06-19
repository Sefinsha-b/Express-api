// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Retrieve all users
router.get('/', userController.getAllUsers);

// Retrieve a specific user by ID
router.get('/:id', userController.getUserById);

// Update a specific user by ID
router.put('/:id', userController.updateUser);

// Delete a specific user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
