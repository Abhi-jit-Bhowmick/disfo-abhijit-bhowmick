const router = require("express").Router();
const {
    postNewUserData,
    getAllUser,
    getUserByTitle

} = require("../controllers/user.controller");
const verify = require("../middlewares/verify.middlewares");
const validateSearch = require("../validators/user.validators");

router.get("/all", verify, getAllUser)

router.get("/:userName", validateSearch, getUserByTitle)

router.post("/register", postNewUserData);



module.exports = router