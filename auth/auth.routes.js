const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const ustalarModel = require('../ustalar/ustalar.model');

router.route('/').post(async (req, res) => {
    try {
        let user = await ustalarModel.findOne({
            ismi: req.body.username,
            password: req.body.password
        }).lean();
        if (user) {
            const jwtToken = jwt.sign({
                message: "Configuration!",
            }, config.secretKey, {
                expiresIn: config.expiresAt
            });

            return res.status(200).json({
                jwt: jwtToken,
                role: user.role
            });
        }
        return res.status(400).json("not found!")
    } catch (error) {
        return res.status(400).json("not found!")
    }
});

module.exports = router;