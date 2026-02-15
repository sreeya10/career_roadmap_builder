const express = require('express');
const TimeLog = require('../models/TimeLog');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/log', auth, async (req, res) => {
  try {
    const { timeSpent } = req.body;
    const today = new Date().toISOString().split('T')[0];
    
    let log = await TimeLog.findOne({ user: req.userId, date: today });
    
    if (log) {
      log.timeSpent += timeSpent;
    } else {
      log = new TimeLog({
        user: req.userId,
        date: today,
        timeSpent
      });
    }
    
    await log.save();
    res.json({ timeSpent: log.timeSpent });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/daily', auth, async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const log = await TimeLog.findOne({ user: req.userId, date: today });
    
    res.json({ timeSpent: log ? log.timeSpent : 0 });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/weekly', auth, async (req, res) => {
  try {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekAgoStr = weekAgo.toISOString().split('T')[0];
    
    const logs = await TimeLog.find({
      user: req.userId,
      date: { $gte: weekAgoStr }
    });
    
    const total = logs.reduce((sum, log) => sum + log.timeSpent, 0);
    
    res.json({ weeklyTime: total, logs });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
