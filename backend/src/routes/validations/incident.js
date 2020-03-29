const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    incidentOng: celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown()
    })
}