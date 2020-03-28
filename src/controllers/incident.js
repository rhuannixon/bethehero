const dbConn = require('../database/connection');
require('dotenv').config();

const list = async (req, res) => {
    try {
        const pagination = process.env.PAGINATION;
        const { page = 1 } = req.query;
        const incidents = await dbConn('incidents')
            .limit(pagination)
            .offset((page - 1) * pagination)
            .select('*');
        return res.json(incidents);
    } catch (error) {
        console.log(error)
        return res.send(error.message);
    }
};

const create = async (req, res) => {
    try {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;
        const [id] = await dbConn('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return res.send({ id })
    } catch (error) {
        console.log(error);
        return res.send(error.message);
    }
};

module.exports = {
    create,
    list
};