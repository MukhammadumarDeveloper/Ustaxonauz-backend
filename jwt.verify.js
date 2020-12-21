const config = require('./config/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['jwt-token'];
    jwt.verify(token, config.secretKey, (err) => {
        if(err) return res.status(401).json('Unauthorised');
        return next();
    })
}