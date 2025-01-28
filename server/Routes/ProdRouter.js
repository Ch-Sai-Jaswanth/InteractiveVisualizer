const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log("----User details----", req.user);
    res.status(200).json([
        {
            name: "Laptop",
            price: 50000
        },
        {
            name: "Mobile",
            price: 20000
        }
    ])
});

module.exports = router;