const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const appRoutes = require('./routes');
const db = require('./config/config').database;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// MongoDB connection
mongoose.connect(db, { useNewUrlParser: "true" });
mongoose.connection.on("error", (err) => { console.log("Err: ", err) });
mongoose.connection.on("connected", (err, res) => { console.log("Mongoose is connected!"); });


app.use('/', appRoutes);

app.listen(8080, () => {
    console.log('Nodeserver 8080 chi portda ishlayapti')
})