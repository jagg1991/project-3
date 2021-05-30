const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcryptjs");


//routes are at "/api/users"
router.post("/", async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)

    User.create(req.body)
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
            })
            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}
)

router.get("/", async (req, res) => {

    User.findById(
        req.session.user_id
    )
        .then(userData => {

            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })

})
router.post("/auth", async (req, res) => {
    User.findOne(
        {
            email: req.body.email
        }
    )

        .then(async (userData) => {
            const isMatch = await bcrypt.compare(req.body.password, userData.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: "Invalid credentials!" }] })
            }
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;


            })
            res.json(userData)

        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router