const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const { registerUser, loginUser } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

// Register route with validation middleware
router.post('/register', [
  body('username').not().isEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .custom(value => {
      if (!/[A-Z]/.test(value)) {
        throw new Error('Password must contain at least one uppercase letter');
      }
      if (!/[0-9]/.test(value)) {
        throw new Error('Password must contain at least one number');
      }
      return true;
    }),
], registerUser);

// Login route with validation middleware
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').not().isEmpty().withMessage('Password is required'),
], loginUser);

router.get('/protectedRoute', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
  });
  

module.exports = router;
