const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
// import route from './routes/userRoute.js'

const app = express();
app.use(cors);
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
        .then(() => {
          console.log("Mongo connected successfully");
        })
        .catch((error) => {
          console.log(error);
        })

app.listen(PORT, () => {
  console.log(`Server is running on address:http://localhost:${PORT}`);
})

// app.use('/user', route);
