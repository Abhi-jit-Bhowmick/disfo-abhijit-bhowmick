require("dotenv").config()


const endpoient = {
    PORT: process.env.PORT,
    DB_URI: process.env.MONGODB_URI
}


module.exports = endpoient