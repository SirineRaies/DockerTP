const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// Route de test
app.get("/", (req, res) => {
  res.send("App is running");
});

const dbo = require("./db/conn");

// Fonction pour démarrer le serveur après connexion MongoDB
async function startServer() {
  try {
    await dbo.connectToMongoDB(); // Connexion à MongoDB
    console.log("MongoDB connected, starting server...");
    app.listen(port, () => {
      console.log("Server is running on port: " + port);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

// Démarrage
startServer();
