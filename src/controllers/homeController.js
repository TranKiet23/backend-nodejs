const connection = require('../config/database')

const getHomePage = (req, res) => {
    // let users = [];
    // connection.query('SELECT  * FROM Users u ',
    //     function (err, result, field) {
    //         users = result
    //         console.log('users', users);
    //         res.send(JSON.stringify(users))
    //     }
    // )
    return res.render('navbar.ejs')
}

const getAge = (req, res) => {
    res.send('27 && 26')
}

const getMyLove = (req, res) => {
    res.render('sample.ejs')
}

const postNewUser = (req, res) => {
    console.log("ssss",req.body);
    let { email, name, city } =  req.body;
    connection.query(`
    INSERT INTO Users(email, name, city)
    VALUE (?,?,?)
    `,[email, name, city],
    function(err, result) {
         res.send('create user success')

    })
    

}

module.exports = {
    getHomePage,
    getAge,
    getMyLove,
    postNewUser
}