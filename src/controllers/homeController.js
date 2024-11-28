const connection = require('../config/database');
const {getAllUser} = require('../services/CRUDService')


const getHomePage = async (req, res) => {
    const result = await getAllUser();
    res.render('home.ejs', {listUsers : result}) 
}

const getAge = (req, res) => {
    res.send('27 && 26')
} 

const getMyLove = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = async (req,res) => {
    // const [result, fields] = await  connection.query(`select * from Users u`);
    // console.log("🚀 ~ getCreatePage ~ result:", result)
    // res.render('create.ejs', {listUsers : result})
}

const postNewUser = async (req, res) => {
    let { email, name, city } =  req.body;
    
    const [result, fields] = await  connection.query(`
    INSERT INTO Users(email, name, city)
    VALUE (?,?,?)
    `,[email, name, city])
    res.send('create user success')

}

module.exports = {
    getHomePage,
    getAge,
    getMyLove,
    postNewUser,
    getCreatePage
}