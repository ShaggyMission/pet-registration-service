const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/database');
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const cors = require('cors'); 

dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));
app.use('/register/pets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/pets', petRoutes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
