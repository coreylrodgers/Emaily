const express = require("express");
const mongoose = require('mongoose');
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);

app.get('/', (req,res) => res.send('working'));
app.listen(PORT, () => console.log(`server running on port:${PORT}`));


