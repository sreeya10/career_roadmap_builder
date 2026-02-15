const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/skill', auth, async (req, res) => {
  try {
    const { career, skill } = req.body;
    const user = await User.findById(req.userId);
    
    const exists = user.completedSkills.find(s => s.career === career && s.skill === skill);
    if (!exists) {
      user.completedSkills.push({ career, skill });
      await user.save();
    }
    
    res.json({ message: 'Skill marked complete', completedSkills: user.completedSkills });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/project', auth, async (req, res) => {
  try {
    const { career, project } = req.body;
    const user = await User.findById(req.userId);
    
    const exists = user.completedProjects.find(p => p.career === career && p.project === project);
    if (!exists) {
      user.completedProjects.push({ career, project });
      await user.save();
    }
    
    res.json({ message: 'Project marked complete', completedProjects: user.completedProjects });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:career', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const career = req.params.career;
    
    const skills = user.completedSkills.filter(s => s.career === career);
    const projects = user.completedProjects.filter(p => p.career === career);
    
    res.json({ skills, projects });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update-streak', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const today = new Date().toDateString();
    const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate).toDateString() : null;
    
    if (lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (lastActive === yesterdayStr) {
        user.currentStreak += 1;
      } else if (lastActive !== today) {
        user.currentStreak = 1;
      }
      
      if (user.currentStreak > user.longestStreak) {
        user.longestStreak = user.currentStreak;
      }
      
      user.lastActiveDate = new Date();
      await user.save();
    }
    
    res.json({ currentStreak: user.currentStreak, longestStreak: user.longestStreak });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
