const   express = require("express"),
        router  = express.Router();

router.get("/app", (req, res) => {
    res.status(200)
        .render("index");
});



module.exports = router;
