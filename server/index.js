import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/routes.js';
import cors from 'cors';
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));

app.use('/api', userRoutes);

// const CONNECTION_URL = "mongodb+srv://usman:root@cluster0.3eekn.mongodb.net/ironbeez?retryWrites=true&w=majority";
const CONNECTION_URL =
  process.env.CONNECTION_STRING ||
  'mongodb+srv://fahad:1234@cluster0.zrjqbia.mongodb.net/mironbeez?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch(error => console.log(`${error} did not connect`));

//   mongoose.set('useFindAndModify', false);
