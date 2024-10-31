const getHomePage = (req, res) => {
    console.log(req);
    res.send('hien tran')
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