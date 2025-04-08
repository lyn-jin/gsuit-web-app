const express = require('express');
const cors = require('cors'); // Make sure you have cors installed
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

const uri = "mongodb+srv://rinzee404:5LMfe5aP9yQFgGgq@gsuit-cluster.eoi88rf.mongodb.net/?retryWrites=true&w=majority&appName=gsuit-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Root route for checking if API is working
app.get('/', (req, res) => {
    res.send('API is working!');
});

// A route to test MongoDB connection
app.get('/connect', async (req, res) => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        res.send("MongoDB connection successful!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).send("Failed to connect to MongoDB.");
    } finally {
        await client.close();
    }
});

// Define port
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
