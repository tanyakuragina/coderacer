import mongoose from 'mongoose';

// Создаём схемы.
const gameSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  challenges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge',
    },
  ],
  startDate: Date,
  players: [
    {
      player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    challengeTimes: [{
      type: Date,
    }],
  }],
});

// Выдает всех пользователей, учавствующих в игре
gameSchema.methods.findPlayers = async function () {
  const populated = await this.model('Game')
    .findById(this.id)
    .populate('players.player');
  return populated.players.map((player) => player.player);
};



// Выдает все не начавшиеся игры, отсортированные по дате начала
gameSchema.statics.findUpcoming = async function () {

  const games = await this.find()
    .where('startDate')
    .gte(new Date())
    .sort({ startDate: 1 })
    .populate('author');
  return games.map((game) => ({
    _id: game._id,
    author: game.author.username,
    startDate: game.startDate,
    players: game.players.length,
  }));
};

export default mongoose.model('Game', gameSchema);
