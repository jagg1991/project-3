const User = require("../../models/user");
const Router = require("express").Router();
const Land = require(); //needs path 


router.post("/", async (req, res) => {
Land.create(req.body)
.then(landData => {
    req.session.save(() => {
        req.session.user_id =landData.id
        requestAnimationFrame.session.logged_in = true 
    })
})
})

