const express = require('express');
const Group = require('../models/Group');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

function generateInviteCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

router.post('/create', auth, async (req, res) => {
  try {
    const { name } = req.body;
    const inviteCode = generateInviteCode();
    
    const group = new Group({
      name,
      creator: req.userId,
      members: [{ user: req.userId, hideProgress: false }],
      inviteCode
    });
    
    await group.save();
    
    const user = await User.findById(req.userId);
    user.groups.push(group._id);
    await user.save();
    
    res.json({ group });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/join', auth, async (req, res) => {
  try {
    const { inviteCode } = req.body;
    
    const group = await Group.findOne({ inviteCode });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    
    const isMember = group.members.find(m => m.user.toString() === req.userId);
    if (isMember) {
      return res.status(400).json({ message: 'Already a member' });
    }
    
    group.members.push({ user: req.userId, hideProgress: false });
    await group.save();
    
    const user = await User.findById(req.userId);
    user.groups.push(group._id);
    await user.save();
    
    res.json({ group });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/my-groups', auth, async (req, res) => {
  try {
    const groups = await Group.find({ 'members.user': req.userId })
      .populate('creator', 'username')
      .populate('members.user', 'username');
    
    res.json({ groups });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:groupId/members', auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId)
      .populate('members.user', 'username primaryCareer completedSkills completedProjects currentStreak');
    
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    
    res.json({ members: group.members });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/toggle-privacy', auth, async (req, res) => {
  try {
    const { groupId } = req.body;
    
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    
    const member = group.members.find(m => m.user.toString() === req.userId);
    if (!member) {
      return res.status(403).json({ message: 'Not a member' });
    }
    
    member.hideProgress = !member.hideProgress;
    await group.save();
    
    res.json({ hideProgress: member.hideProgress });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
