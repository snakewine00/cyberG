const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cybersec', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  process.exit(0);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
}); 