const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 5000;

app.get('/hai', (req, res) => {
    res.send('Hello World');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', require('./Routes/AuthRouter'));
app.use('/products', require('./Routes/ProdRouter'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

