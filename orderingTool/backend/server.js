const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key_here'; // Hardcoded secret key for simplicity

app.use(express.json()); // Middleware to parse JSON bodies
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// MongoDB Connection
mongoose.connect('mongodb://localhost/yourDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: String, required: true },
    password: { type: String, required: true } // Password is not encrypted in this version
});

const locationSchema = new mongoose.Schema({
    cabinetType: {type: String, required: true},
    cabinetColor: {type: String, required: true},
    hingeOverlay: {type: String, required: true},
    pullType: {type: String, required: true},
    pullSize: {type: String, required: true},
    locationName: {type: String, required: true}
});


const User = mongoose.model('User', userSchema);
const Location = mongoose.model('Location', locationSchema);

// POST Endpoint to create an account
app.post('/create-account', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error('Failed to create user:', error);
        res.status(500).json({ message: "Error creating user" });
    }
});
// POST Endpoint to create a location
app.post('/create-location', async (req, res) => {
    try { 
        const newLocation = new Location(req.body);
        await newLocation.save();
        res.status(201).json({ message: "Location created successfully!" });
    } catch (error) {
        console.error('Failed to create user:', error);
        res.status(500).json({ message: "Error creating user"});
    }
});
// end of location endpoint

//getting the locations
app.get('/locations', async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (error) {
        console.error('Failed to fetch locations:', error);
        res.status(500).json({ message: "Failed to fetch locations" });
    }
});

//end of getting the locations

// Login Endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token: token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.userId; // Pass the decoded token's userId to the request object
        next();
    });
};
// Protected route example
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', userId: req.userId });
});
  

