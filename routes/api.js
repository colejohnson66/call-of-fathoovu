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
    });
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
        }
        res.json({
            inserted: data.length
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.post("/user/create", (req, res) => {
    User.findOne({ username: req.body.username }).then((data) => {
        // don't create the user if they already exist
        if (data !== null)
            return res.json(data);

        let user = new User();
        user.username = req.body.username;
        user.password = bcrypt.hashSync(req.body.password, 10);
        user.achievements = [];

        user.validateSync();
        user.save();

        res.json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// GET would make sense, but a GET request shouldn't have a body
//   and sending the password as part of the URL is terrible for
//   security. So we use POST here.
router.post("/user/achievements", (req, res) => {
    User.findOne({ username: req.body.username }).then((data) => {
        if (data === null)
            return res.status(400).json({});

        // check password
        let match = bcrypt.compareSync(req.body.password, data.password);
        if (!match)
            return res.status(400).json({});

        res.json(data.achievements);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.post("/user/achievements/add", (req, res) => {
    User.findOne({ username: req.body.username }).then((data) => {
        if (data === null)
            return res.status(400).json({});

        // check password
        let match = bcrypt.compareSync(req.body.password, data.password);
        if (!match)
            return res.status(400).json({});

        data.achievements.push(req.body.achievement);
        data.save();

        res.json(data.achievements);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;