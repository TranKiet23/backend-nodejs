const connection = require('../config/database')

const getHomePage = (req, res) => {
    let users = [];
    connection.query('SELECT  * FROM Users u ',
        function (err, result, field) {
            users = result
            console.log('users', users);
            res.send(JSON.stringify(users))
        }
    )
}

const getAge = (req, res) => {
    res.send('27 && 26')
}

const getMyLove = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAge,
    getMyLove
}