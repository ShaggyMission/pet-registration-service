const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/database');
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/pets', petRoutes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
