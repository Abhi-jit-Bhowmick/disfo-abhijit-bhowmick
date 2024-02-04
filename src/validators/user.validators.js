const Joi = require("joi")

const userValidationSchema = Joi.object().keys({
    userName: Joi.string().max(20),
})


const validateSearch = (req, res, next) => {
    const { userName } = req.params;

    const { error } = userValidationSchema.validate({ userName });

    if (error) {
        return res.status(404).json(error)
    }
    next()
}



module.exports = validateSearch
