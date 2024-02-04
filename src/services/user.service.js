const User = require("../models/user.model")

class USER_SERVICE {
    // save = async (doc) => {
    //     const result = await doc.save();
    //     return result
    // }


    create = async (body) => {
        const newDoc = new User(body);
        const saveDoc = await newDoc.save(newDoc);
        return saveDoc;
    }

    get = async () => {
        const allUser = await User.find({});
        return allUser
    }


    findByTitle = async (title) => {
        const result = await User.findOne({ userName: title });
        return result
    }
}

module.exports = USER_SERVICE