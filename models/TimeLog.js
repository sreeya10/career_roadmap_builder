const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: String,
    required: true
  },
  timeSpent: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('TimeLog', timeLogSchema);
