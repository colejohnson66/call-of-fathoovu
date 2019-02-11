const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/callOfFathoovu";


const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
if (process.env.NODE_ENV === "production")
    app.use(express.static("client/build"));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.get("/api/story/:path", (req, res) => {

});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
