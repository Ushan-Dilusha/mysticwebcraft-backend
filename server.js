const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const routes = require("./routes/Route");
const database = require("./configuration/database");

const app = express();
const PORT = process.env.PORT || 8070;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.use(cors());

database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => console.log("Waiting to Connect DB"));

app.listen(PORT, () => console.log("Listening at " + PORT));
