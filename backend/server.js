const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URI = process.env.ATLAS_URI || 'mongodb+srv://javascriptfulstack:javascript@cluster0.iprn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)))
  .catch(err => console.log(err.message));


mongoose.set('useFindAndModify', false);