const express = require("express")
const bodyParser = require('body-parser');
const routes = require("./routes/Route")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./configuration/database");
const app = express()
const PORT = process.env.PORT


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())
app.use(cors())


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`app listening at http://localhost:${PORT}`);
    });
}
);

app.use("/api", routes)
app.listen(PORT, () => console.log("Listening at " + PORT))
