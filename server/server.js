const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Local MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioDB')
    .then(() => console.log("Connected to MongoDB Compass"))
    .catch(err => console.log(err));

// Define Schema
const profileSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    skills: [String],
    qualifications: [String],
    hobbies: [String],
    imageUrl: String
});

const Profile = mongoose.model('Profile', profileSchema);

// API Route to get profile data
app.get('/api/profile', async (req, res) => {
    const profile = await Profile.findOne();
    res.json(profile);
});

app.listen(5000, () => console.log("Server running on port 5000"));