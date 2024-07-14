const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const authToken = require('./middlewares/requireAuth.cjs')
// import userSchema from './models/User'
const authRoutes = require('./routes/authRoutes.cjs');
const trackRoutes = require('./routes/trackRoutes.cjs')
const app = express();
const uri = "mongodb+srv://admin:yKD4IVTunRvU7cVC@cluster25.hiacxb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster25";

// Middleware to parse JSON
app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);
app.use(cors());
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri,
    );
    console.log('Connected to MongoDB instance');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};
connectToDatabase();

app.get('/',authToken, (req, res) => {
  res.send(`Your email:${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
