const USER_SERVICE = require("../services/user.service");
const USER_SERVICE_INSTANCE = new USER_SERVICE();

// const { create } = require("../services/user.service")

const postNewUserData = async (req, res) => {
    const userBody = req.body;
    // console.log(userBody)
    try {
        const result = await USER_SERVICE_INSTANCE.create(userBody);
        res.status(200).json(result)
    }
    catch (error) {
        // console.log("Error:", error)
        res.status(404).send({ "Message": "Not Found" })
    }
}


const getAllUser = async (req, res) => {
    try {
        const result = await USER_SERVICE_INSTANCE.get();
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ "message": "Not Found" })
    }

}

module.exports = {
    postNewUserData,
    getAllUser,

}