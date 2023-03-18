//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

//db connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to db succesfully')).catch((err) => console.log(err));

// routes prefix
app.use('/api/post', require('./routes/routes'));
app.use('/api/meds', require('./routes/medroutes'));
app.use('/api/reqs', require('./routes/reqroutes'));

// start server
app.listen(port, () => console.log(`server has started and running on port ${port}`));