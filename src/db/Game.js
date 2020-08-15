import mongoose from 'mongoose';

// Создаём схемы.
const gameSchema = mongoose.Schema({
  author: {
      type: mongoose.Schema.Types.ObjectId
      ref: 'User'
  },
  challenges: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge'
  }],
  startDate: Date,
  players: {
      player: {
        type: mongoose.Schema.Types.ObjectId
        ref: 'User'
      },
      challengeTimes: [Date]
  }
});

export default mongoose.model('Game', gameSchema);
