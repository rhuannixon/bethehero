const dbConn = require('../database/connection');
require('dotenv').config();

const login = async (req, res) => {
    try {
        const { id } = req.body;
        const ong = await dbConn('ongs').where('id', id).select('name').first();

        if (!ong) return res.status(400).json({ error: "No ONG found with this ID" });

        return res.json(ong);
    } catch (error) {
        console.log(error);
        return res.send(error.message);
    }
};

module.exports = {
    login
};