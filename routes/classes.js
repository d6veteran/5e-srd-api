var express = require('express'),
    router = express.Router(),
    app = express();

var Class = require('../models/class');

router.route('/classes')
    .get((req,res) => {
        Class.find((err,classes) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(classes);
        })
    })

module.exports = router;