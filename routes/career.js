const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/save', auth, async (req, res) => {
  try {
    const { career } = req.body;
    const user = await User.findById(req.userId);
    
    if (!user.savedCareers.includes(career)) {
      user.savedCareers.push(career);
      await user.save();
    }
    
    res.json({ message: 'Career saved', savedCareers: user.savedCareers });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/set-primary', auth, async (req, res) => {
  try {
    const { career } = req.body;
    const user = await User.findById(req.userId);
    
    user.primaryCareer = career;
    await user.save();
    
    res.json({ message: 'Primary career set', primaryCareer: user.primaryCareer });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/saved', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json({ savedCareers: user.savedCareers, primaryCareer: user.primaryCareer });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
