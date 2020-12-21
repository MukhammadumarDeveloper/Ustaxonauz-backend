const router = require('express').Router();
const ustalarModel = require('./ustalar.model');

router.route('/').get(async (req, res) => {
    try {
        const ustalar = await ustalarModel.find({});
        return res.status(200).json(ustalar);
    } catch (error) {
        return res.status(400).send('Malumotlar bazasi bilan ishlashda xatolik!');
    }
});

router.route('/').post(async (req, res) => {
    try {
        await ustalarModel.create(req.body);
        return res.status(200).json('ok dbga yozib qo\'yildi!');
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:id').put(async (req, res) => {
    try {
        await ustalarModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).json('ok dbga o\'zgartirib qo\'yildi!');
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        await ustalarModel.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json('ok malumotlar omboridan o\'chirib yuborildi!');
    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;