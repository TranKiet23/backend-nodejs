const connection = require('../config/database')

const getAllUser = async () => {
    const [result, fields] = await  connection.query(`select * from Users u`);
    return result
}

module.exports = {getAllUser}