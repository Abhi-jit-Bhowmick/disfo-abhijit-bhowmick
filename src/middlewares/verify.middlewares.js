require("dotenv").config()
const verify = (req, res, next) => {
    const key = req.headers["x-api-key"];
    if (!key) {
        res.status(404).json({ "message": "No key is Available" })
    }
    if (key !== process.env.keyHeaders) {
        res.status(404).json({ "message": "No Authorized" })
    }
    next()

}


module.exports = verify
