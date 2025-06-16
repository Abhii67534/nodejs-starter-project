const express = require('express');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const apiSpec = YAML.load('./docs/api.yaml');

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSpec));

const userRoutes = require('./src/routes/userRoutes');
app.use('/', userRoutes);

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
  console.log('API docs at http://localhost:8080/docs');
});
