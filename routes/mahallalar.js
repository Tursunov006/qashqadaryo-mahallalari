const express = require('express');
const router = express.Router();
const Mahalla = require('../models/Mahalla');
const Xizmat = require('../models/Xizmat');

// Barcha mahallalar
router.get('/', async (req, res) => {
    try {
        const mahallalar = await Mahalla.find();
        res.render('mahallalar/index', { mahallalar });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// 24/7 xizmatlar
router.get('/xizmatlar', async (req, res) => {
    try {
        const xizmatlar = await Xizmat.find().populate('mahalla');
        res.render('mahallalar/xizmatlar', { xizmatlar });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// 24/7 favqulodda xizmatlar
router.get('/favqulodda', async (req, res) => {
    try {
        const mahallalar = await Mahalla.find();
        res.render('mahallalar/favqulodda', { mahallalar });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// Mahalla tafsilotlari
router.get('/:id', async (req, res) => {
    try {
        const mahalla = await Mahalla.findById(req.params.id);
        const xizmatlar = await Xizmat.find({ mahalla: mahalla._id });
        res.render('mahallalar/show', { mahalla, xizmatlar });
    } catch (err) {
        console.error(err);
        res.redirect('/mahallalar');
    }
});

// Qo'shni mahallalar
router.get('/qoshni/:id', async (req, res) => {
    try {
        const mahalla = await Mahalla.findById(req.params.id);
        const qoshniMahallalar = await Mahalla.find({ 
            _id: { $ne: mahalla._id } 
        }).limit(5);
        res.json(qoshniMahallalar);
    } catch (err) {
        console.error(err);
        res.json([]);
    }
});

module.exports = router;