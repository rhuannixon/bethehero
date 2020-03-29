const dbConn = require('./../database/connection')
const generateUniqueId = require('./../util/generateUniqueId');

const list = async (req, res) => {
    try {
        const ongs = await dbConn('ongs').select('*');
        return res.json(ongs);
    } catch (error) {
        console.log(error)
        return res.send(error.message);
    }
};

const create = async (req, res) => {
    try {

        const { name, email, whatsapp, city, uf } = req.body;
        const id = generateUniqueId();

        await dbConn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    } catch (error) {
        console.log(error);
        return res.send(error.message);
    }
};

module.exports = {
    create,
    list
};