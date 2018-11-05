const router = require("express").Router();

const User = require("../models/user");

// CRUD

// Get all users.
router.get("/", (req, res) => {
    User.find({}).exec((err, records) => {
        if (err) return console.warn(err);
        res.send({
            records
        });
    })
});

// Get user by ID.
router.get("/:id", (req, res) => {
    User.find({
        _id: req.params.id
    }).exec((err, records) => {
        if (err) return console.warn(err);
        res.send({
            records
        });
    })
});

// Create a new user.
router.post("/", (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    newUser.save(err => {
        if (err) console.warn(err);

        res.send(newUser);
    });
});

// Completly overwrite user.
router.put("/update/:id", (req, res) => {

    User.findById(req.params.id, function (err, user) {

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;

        user.save(err => {
            if (err) console.warn(err);

            res.json({
                message: 'True'
            });
        });

    });
});

// Add Group to user
router.put("/add-group/:id", (req, res) => {

    User.findById(req.params.id, function (err, user) {

        user.groupList.push(req.body.idGroup);

        user.save(err => {
            if (err) console.warn(err);

            res.json({
                message: 'True'
            });
        });

    });
});

// get users groups
router.get("/get-groups/:id", (req, res) => {

    User.findById(req.params.id, function (err, user) {

        user.groupList.push(req.body.idGroup);

        user.save(err => {
            if (err) console.warn(err);

            res.json({
                message: 'True'
            });
        });

    });
});

// Remove group from user.
router.post("/remove-group/:id", (req, res) => {
    User.findById(req.params.id, function (err, user) {

        user.groupList.splice(user.groupList.indexOf(req.body.id), 1);

        user.save(err => {
            if (err) console.warn(err);

            res.json({
                message: user.groupList.splice(user.groupList.indexOf(req.body.id), 1)
            });
        });

    });
});


// Delete user.
router.delete("/:id", (req, res) => {
    User.remove({
        _id: req.params.id
    }).exec((err, respond) => {
        if (err) return console.warn(err);
        res.send({
            respond
        });
    })
});



module.exports = router;