const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('./config/database');
const app = require('./app');

const PORT = process.env.PORT || 3006;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
