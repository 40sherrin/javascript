import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// Routers 
import getRouter from './routes/posts.js';


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', getRouter);

app.get('/', (req, res) => {
  res.send('Hello world javascript api');
})

const CONNECTION_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 500;

mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)))
  .catch(err => console.log(err.message));


mongoose.set('useFindAndModify', false);