const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/main');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
