const router = require("express").Router();

const Group = require("../models/group");

// CRUD

// Get all users.
router.get("/", (req, res) => {
    Group.find({}).exec((err, records) => {
        if (err) return console.warn(err)
        res.send({
            records
        });
    })
});

// Get user by ID.
router.get("/:id", (req, res) => {
    Group.find({
        _id: req.params.id
    }).exec((err, records) => {
        if (err) return console.warn(err)
        res.send({
            records
        });
    })
});

// Create a new user.
router.post("/", (req, res) => {
    const newGroup = new Group({
        name: req.body.name,
    });

    newGroup.save(err => {
        if (err) console.warn(err);
        res.send(newGroup);
    });
});

// Completly overwrite user.
router.put("/update/:id", (req, res) => {

    Group.findById(req.params.id, function (err, user) {

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

// Make partial update.
router.patch("/:id", (req, res) => {
    Group.send({
        _id: req.params.id
    }).exec((err, respond) => {
        if (err) return console.warn(err);
        res.send({
            respond
        });
    })
});


// Delete user.
router.delete("/:id", (req, res) => {
    Group.remove({
        _id: req.params.id
    }).exec((err, respond) => {
        if (err) return console.warn(err);
        res.send({
            respond
        });
    })
});



module.exports = router;