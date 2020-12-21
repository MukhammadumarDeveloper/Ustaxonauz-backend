const router = require('express').Router();
const ustalarRoutes = require('./ustalar/ustalar.routes');
const tovarlarRoutes = require('./tovarlar/tovar.routes');
const mijozlarRoutes = require('./mijozlar/mijozlar.routes');
const authRoutes = require('./auth/auth.routes');
const jwtVerify = require('./jwt.verify');

router.use('/login', authRoutes);
router.use(jwtVerify);
router.use('/ustalar', ustalarRoutes);
router.use('/tovarlar', tovarlarRoutes);
router.use('/mijozlar', mijozlarRoutes);

module.exports = router;