const router = require('express').Router();
const tovarModel = require('./tovar.model');
const { route } = require('../ustalar/ustalar.routes');

router.route('/').get(async (req, res) => {
    try {
        const tovarlar = await tovarModel.find({});
        return res.status(200).json(tovarlar);
    } catch (error) {
        return res.status.apply(400).send('Malumotlar ombori bilan bog\'liq xato!');
    }
});

router.route('/').post(async (req, res) => {
    try {
        await tovarModel.create(req.body);
        return res.status(200).json('ok malumotlar omboriga yozildi!');
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        await tovarModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).json('ok malumotlar o\'zgartirib qo\'yildi!');
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await tovarModel.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json('ok malumotlar omboridan o\'chirib tashlandi!');
    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;