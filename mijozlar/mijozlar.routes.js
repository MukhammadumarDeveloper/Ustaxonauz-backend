const router = require('express').Router();
const mijozlarModel = require('./mijozlar.model');
const ustalarModel = require('../ustalar/ustalar.model');

router.route('/').get(async (req, res) => {
    try {
        const mijozlar = await mijozlarModel.find({});
        return res.status(200).json(mijozlar)
    } catch (error) {
        return res, status(400).send(error)
    }
});

router.route('/').post(async (req, res) => {
    try {
        const ustalar = await ustalarModel.find({});
        let isCreate = ustalar.find(b => b.ismi == req.body.usta);
        if (!isCreate)
            return res.status(400).send('Siz mavjud bo\'lmagan usta nomini kiritfingiz!');
        else {
            const mijozlar = await mijozlarModel.find({});
            req.body.tr = mijozlar.length+1;
            await mijozlarModel.create(req.body);
            return res.status(200).json('ok malumotlar omboriga yozib qo\'yildi!');
        }
    } catch (error) {
        return res.status(400).send(error)
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        await mijozlarModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).json('ok malumotlar o\'zgartirib qo\'yildi!');
    } catch (error) {
        return res.status(400).send(error)
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await mijozlarModel.findByIdAndDelete({ _id: req.params.id })
        return res.status(200).json('ok malumotlar omboridan o\'chirib tashlandi!');
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports = router;