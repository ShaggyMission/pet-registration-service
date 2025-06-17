const mongoose = require('mongoose');

const uri = 'mongodb+srv://lmpacheco:hDRBdR2ZRlvo0JCR@shaggymission.lmlrn7e.mongodb.net/shaggymission_pets?retryWrites=true&w=majority&appName=shaggymission';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
