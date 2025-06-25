const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));
app.use('/register/pets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/pets', petRoutes);

module.exports = app;
