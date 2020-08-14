import mongoose from 'mongoose';

// Создаём схемы.
const challengeSchema = mongoose.Schema({
  name: String,
  difficulty: Number,
  description: String,
  startParameters: String,
  sampleInput: String,
  sampleOutput: String,
  tests: {
    sample: { in: {}, out: {} },
    main: [{ in: {}, out: {} }],
  },
});

export default mongoose.model('Challenge', challengeSchema);
