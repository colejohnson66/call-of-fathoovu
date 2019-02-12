const express = require("express");
const StoryPath = require("../models/StoryPath");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();


router.get("/stories/:path", (req, res) => {
    StoryPath.find({ path: req.params.path }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
});

router.post("/stories/bulkInsert", (req, res) => {
    var data = req.body;
    // drop the whole database
    StoryPath.deleteMany({}).then(() => {
        // extract the path info
        for (let path in data) {
            let obj = new StoryPath();
            obj.path = path;
            obj.text = data[path].text;
            obj.imagePath = data[path].image;
            obj.choices = data[path].choices;

            obj.validateSync();
            obj.save();

            res.json({});
        }
    });
});


router.post("/user", (req, res) => {
    User.findOne({ username: req.body.username }).then((data) => {
        // don't create the user if they already exist
        if (data !== null)
            return res.status(400).json({});

        let user = new User();
        user.username = req.body.username;
        user.password = bcrypt.hashSync(req.body.password, 10);

        user.validateSync();
        user.save();

        res.json(user);
    });
});

module.exports = router;