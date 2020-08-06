const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const CookeExpiry = require('./constants');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session()); 

const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.get('/', (req, res) => res.send('working'));
app.listen(PORT, () => console.log(`server running on port:${PORT}`));
