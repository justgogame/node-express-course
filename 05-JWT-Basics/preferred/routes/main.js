const express = require('express');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/auth');
const hello = require('../controllers/main');

const router = express.Router();

router.post('/login', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required' });
  }

  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  });

  res.status(200).json({ token });
});

router.get('/hello', authenticate, hello);

module.exports = router;
