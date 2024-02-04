const router = require("express").Router();
const {
    postNewUserData,
    getAllUser,

} = require("../controllers/user.controller");
const verify = require("../middlewares/verify.middlewares");



router.post("/register", postNewUserData);

router.get("/all", verify, getAllUser)

module.exports = router